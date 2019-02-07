import loadTacos from '../loadTacos'
import rp from 'request-promise'
import addControllerConfig from '../addControllerConfig'
import getConnectionDetails from '../getConnectionDetails'
import uploadDashboard from '../uploadDashboard'
import nunjucks from 'nunjucks'
import _ from 'lodash'
import traverse from 'traverse'
import deployWithConfigExporter from '../deployWithConfigExporter'
// import getConnectionDetails from '../getConnectionDetails'

const getExistingConfigs = async config => {
  // Replace double slashes with single slashes since ConfigExporter will show the UI if we go for //
  const url = `${process.env.CONFIG_EXPORTER_URL}/api/controllers`.replace(
    '//api',
    '/api'
  )
  return rp({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    url,
    timeout: 10000,
  })
    .promise()
    .then(data => {
      const parsedData = JSON.parse(data)
      return parsedData
    })
    .catch(err => {
      return { errorMsg: `Error: ${err}`, type: 'danger' }
    })
}

/*
 The json files for the ingredients include template variables for nunjucks.
 In the case, that a variable replaces a non-string attribute, we need a workaround
 to keep the json files well formated. For this case a special object is introduced,
 which only has the key _ and the value that should be converted,e.g.
 `"backgroundColor": 0` is converted to `"backgroundColor": {"_": "{{ color1 }}"}`
*/
const postProcessTemplate = template => {
  // Don't use an arrow function here, since `this` is used by traverse
  traverse.forEach(template, function(value) {
    if (
      _.isPlainObject(value) &&
      Object.keys(value).length == 1 &&
      Object.keys(value).includes('_')
    ) {
      this.update(parseInt(value._))
    }
  })

  return template
}

// https://singularity.jira.com/wiki/spaces/CS/pages/221021421/Config+Exporter+API
export default async (req, res) => {
  const savedTacos = await loadTacos(false, true)
  const { id } = req.params
  const { deployScope, settings } = req.body.post
  const connectionDetails = getConnectionDetails(req.body.post)
  const config = connectionDetails.options

  const taco = savedTacos.find(({ id: tacoId }) => tacoId === id)

  if (!taco) {
    return res.send({ msg: 'not found', notFound: true })
  }

  const ingredients = taco.ingredients
    .filter(
      ingredient => deployScope == 'all' || deployScope == ingredient.type
    )
    .map(ingredient => {
      ingredient.json = postProcessTemplate(
        JSON.parse(nunjucks.renderString(ingredient.template, settings))
      )

      return ingredient
    })

  // see if controller config is already there  GET /api/controllers
  const existingConfigs = await getExistingConfigs()

  const existing = existingConfigs.find(e => {
    return (
      e.url === config.url.replace('/controller', '') &&
      e.user === config.auth.user.split('@')[0] &&
      e.account == config.auth.user.split('@')[1]
    )
  })

  const controllerId = existing
    ? existing.id
    : await addControllerConfig(req.body.post.config)

  console.log(controllerId)

  const promises = ingredients.map(ingredient => {
    if (ingredient.type === 'dashboard') {
      return uploadDashboard({
        ...connectionDetails,
        dashboards: [ingredient.json],
      })
    } else {
      return deployWithConfigExporter({ ingredient, settings })
    }
  })

  const result = await Promise.all(promises)
  console.log(result)

  res.send({ msg: 'Deployment complete' })
}

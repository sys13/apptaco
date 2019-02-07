import loadTacos from '../loadTacos'
import rp from 'request-promise'
import addControllerConfig from '../addControllerConfig'
import nunjucks from 'nunjucks'
// import getConnectionDetails from '../getConnectionDetails'

const getExistingConfigs = async config => {
  rp({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      timeout: 10000,
    },
    url: `${process.env.CONFIG_EXPORTER_URL}/api/controllers`,
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

// https://singularity.jira.com/wiki/spaces/CS/pages/221021421/Config+Exporter+API
export default async (req, res) => {
  const savedTacos = await loadTacos(false, true)
  const { id } = req.params
  const { deployScope, config, settings } = req.body.post
  console.log('config: ', req.body.post)

  const taco = savedTacos.find(({ id: tacoId }) => tacoId === id)

  const ingredients = taco.ingredients
    .filter(
      ingredient => deployScope == 'all' || deployScope == ingredient.type
    )
    .map(ingredient => {
      ingredient.json = JSON.parse(
        nunjucks.renderString(ingredient.template, settings)
      )

      return ingredient
    })

  console.log(ingredients.map(ingredient => JSON.stringify(ingredient.json)))

  // see if controller config is already there  GET /api/controllers
  // const existingConfigs = await getExistingConfigs()

  // TODO: can actually skip this step if we verify the existingConfigs first
  // add controller config if it isn't
  // const controllerId = await addControllerConfig(config)

  // TODO: upload each ingredient
  // TODO: upload bt config type

  if (!taco) {
    res.send({ msg: 'not found', notFound: true })
  } else {
    res.send({ msg: 'Deployment complete' })
  }
}

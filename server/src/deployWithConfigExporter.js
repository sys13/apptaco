import rp from 'request-promise'
import getApps from './getApps'

export default async ({
  ingredient,
  settings,
  connectionDetails,
  targetControllerId,
}) => {
  // 1. fetch the entity type from the ingredient json and append to Url
  const { entityType } = ingredient.json
  console.log(`Doing EntityType: ${entityType}`)

  const url = `${
    process.env.CONFIG_EXPORTER_URL
  }/api/export/${entityType}`.replace('//api', '/api')

  // 2. fetch the entity ids and add them to the export metadata
  const { baseURL, options } = connectionDetails
  const apps = await getApps({ baseURL, options })

  const { id: targetApplicationId } =
    apps.find(({ name }) => name === settings.businessApplication) || {}

  const staticFlags = {
    properties: {},
    requestId: 0,
    targetTierMatchByName: true,
    targetNodeMatchByName: true,
    targetBtMatchByName: true,
    targetInfoPointMatchByName: true,
    targetBackendMatchByName: true,
    targetErrorMatchByName: true,
    targetAddMatchByName: true,
    targetHrMatchByName: true,
  }

  // TODO: do tier level ones as well
  // 4. append the ingredient json to the export json
  const entities = {
    targetEntities: ingredient.json.entities[1].map(([, entity]) => {
      let entityStr
      console.log('--------###')

      console.log(entity.idStr)
      console.log(entity.id)

      if (entity.idStr === null && entity.id === 0) {
        entityStr = JSON.parse(entity.jsonStr$$).summary.id
        console.log(`EntityStr: ${entityStr}`)
      }
      const obj = {
        sourceEntityIdStr: entity.idStr || entityStr,
        sourceEntityId: entity.id,
        targetControllerId,
        targetApplicationId,
        ...staticFlags,
      }
      return obj
    }),
    properties: { synchronize: false },
    jsonWithTypeInfo: JSON.stringify(ingredient.json),
  }
  console.log(entities)

  return rp({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: entities,
    url,
    json: true,
    timeout: 10000,
  })
    .promise()
    .then(parsedBody => {
      return parsedBody
    })
    .catch(err => {
      return { errorMsg: `Error: ${err}`, type: 'danger' }
    })
}

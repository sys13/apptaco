import rp from 'request-promise'

export default async ({ ingredient, settings }) => {
  const url = `${process.env.CONFIG_EXPORTER_URL}/api/export`.replace(
    '//api',
    '/api'
  )

  //1. fetch the entity type from the ingredient json and append to Url

  //2. fetch the entity ids and add them to the export metadata
  // looks like this:
  // {"targetEntities":[{"sourceEntityId":27,"targetControllerId":1062062162,"targetApplicationId":48,"properties":{},"requestId":0,"targetTierMatchByName":true,"targetNodeMatchByName":true,"targetBtMatchByName":true,"targetInfoPointMatchByName":true,"targetBackendMatchByName":true,"targetErrorMatchByName":true,"targetAddMatchByName":true,"targetHrMatchByName":true},{"sourceEntityId":28,"targetControllerId":1062062162,"targetApplicationId":48,"properties":{},"requestId":1,"targetTierMatchByName":true,"targetNodeMatchByName":true,"targetBtMatchByName":true,"targetInfoPointMatchByName":true,"targetBackendMatchByName":true,"targetErrorMatchByName":true,"targetAddMatchByName":true,"targetHrMatchByName":true},{"sourceEntityId":29,"targetControllerId":1062062162,"targetApplicationId":48,"properties":{},"requestId":2,"targetTierMatchByName":true,"targetNodeMatchByName":true,"targetBtMatchByName":true,"targetInfoPointMatchByName":true,"targetBackendMatchByName":true,"targetErrorMatchByName":true,"targetAddMatchByName":true,"targetHrMatchByName":true},{"sourceEntityId":30,"targetControllerId":1062062162,"targetApplicationId":48,"properties":{},"requestId":3,"targetTierMatchByName":true,"targetNodeMatchByName":true,"targetBtMatchByName":true,"targetInfoPointMatchByName":true,"targetBackendMatchByName":true,"targetErrorMatchByName":true,"targetAddMatchByName":true,"targetHrMatchByName":true},{"sourceEntityId":31,"targetControllerId":1062062162,"targetApplicationId":48,"properties":{},"requestId":4,"targetTierMatchByName":true,"targetNodeMatchByName":true,"targetBtMatchByName":true,"targetInfoPointMatchByName":true,"targetBackendMatchByName":true,"targetErrorMatchByName":true,"targetAddMatchByName":true,"targetHrMatchByName":true},{"sourceEntityId":32,"targetControllerId":1062062162,"targetApplicationId":48,"properties":{},"requestId":5,"targetTierMatchByName":true,"targetNodeMatchByName":true,"targetBtMatchByName":true,"targetInfoPointMatchByName":true,"targetBackendMatchByName":true,"targetErrorMatchByName":true,"targetAddMatchByName":true,"targetHrMatchByName":true},{"sourceEntityId":33,"targetControllerId":1062062162,"targetApplicationId":48,"properties":{},"requestId":6,"targetTierMatchByName":true,"targetNodeMatchByName":true,"targetBtMatchByName":true,"targetInfoPointMatchByName":true,"targetBackendMatchByName":true,"targetErrorMatchByName":true,"targetAddMatchByName":true,"targetHrMatchByName":true},{"sourceEntityId":34,"targetControllerId":1062062162,"targetApplicationId":48,"properties":{},"requestId":7,"targetTierMatchByName":true,"targetNodeMatchByName":true,"targetBtMatchByName":true,"targetInfoPointMatchByName":true,"targetBackendMatchByName":true,"targetErrorMatchByName":true,"targetAddMatchByName":true,"targetHrMatchByName":true},{"sourceEntityId":35,"targetControllerId":1062062162,"targetApplicationId":48,"properties":{},"requestId":8,"targetTierMatchByName":true,"targetNodeMatchByName":true,"targetBtMatchByName":true,"targetInfoPointMatchByName":true,"targetBackendMatchByName":true,"targetErrorMatchByName":true,"targetAddMatchByName":true,"targetHrMatchByName":true},{"sourceEntityId":36,"targetControllerId":1062062162,"targetApplicationId":48,"properties":{},"requestId":9,"targetTierMatchByName":true,"targetNodeMatchByName":true,"targetBtMatchByName":true,"targetInfoPointMatchByName":true,"targetBackendMatchByName":true,"targetErrorMatchByName":true,"targetAddMatchByName":true,"targetHrMatchByName":true},{"sourceEntityId":37,"targetControllerId":1062062162,"targetApplicationId":48,"properties":{},"requestId":10,"targetTierMatchByName":true,"targetNodeMatchByName":true,"targetBtMatchByName":true,"targetInfoPointMatchByName":true,"targetBackendMatchByName":true,"targetErrorMatchByName":true,"targetAddMatchByName":true,"targetHrMatchByName":true}]
  //

  // 3. same for target app id, and targetControllerId

  //4. append the ingredient json to the export json

  return rp({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: ingredient,
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

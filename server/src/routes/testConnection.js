import _ from 'lodash'
import rp from 'request-promise'
import getConnectionDetails from '../getConnectionDetails'

const getApps = async ({ options, baseURL }) =>
  rp({
    ...options,
    url: `${baseURL}/rest/applications?output=json`,
    timeout: 10000,
  })
    .promise()
    .then(data => {
      const parsedData = JSON.parse(data)
      return parsedData
    })
    .catch(err => {
      let message = err.message
      console.log(err)
      if (err.name === 'StatusCodeError' && err.message.includes('<h1>')) {
        message = err.message.split(/<\/?h1>/)[1]
      }
      return { errorMsg: message, type: 'danger' }
    })

export default async (req, res) => {
  const config = req.body.post
  const { options, baseURL } = getConnectionDetails({ config })
  const result = await getApps({ options, baseURL })

  if (_.isArray(result)) {
    res.send({ succeeded: _.isArray(result) })
  } else {
    res.send({ succeeded: false, error: result })
  }
}

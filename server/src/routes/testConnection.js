import _ from 'lodash'
import rp from 'request-promise'
import getConnectionDetails from '../getConnectionDetails'

const getApps = async ({ options, baseURL }) =>
  rp({
    ...options,
    url: `${baseURL}/rest/applications?output=json`,
  })
    .promise()
    .then(data => {
      const parsedData = JSON.parse(data)
      return parsedData
    })
    .catch(err => {
      return { errorMsg: `Error: ${err}`, type: 'danger' }
    })

export default async (req, res) => {
  const config = req.body.post
  const { options, baseURL } = getConnectionDetails({ config })
  const result = await getApps({ options, baseURL })

  res.send({ succeeded: _.isArray(result) })
}

import _ from 'lodash'
import getApps from '../getApps'
import getConnectionDetails from '../getConnectionDetails'

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

import rp from 'request-promise'

export default async ({ ingredient, settings }) => {
  const url = `${process.env.CONFIG_EXPORTER_URL}/api/controllers`.replace(
    '//api',
    '/api'
  )
  return rp({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: {},
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

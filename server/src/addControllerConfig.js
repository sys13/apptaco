import rp from 'request-promise'

export default async ({
  account,
  username: user,
  password,
  host,
  https,
  port = 80,
}) => {
  const url = `${https ? 'https' : 'http'}://${host}${
    port !== 80 ? `:${port}` : ''
  }`

  return rp({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: {
      account,
      password,
      url,
      user,
    },
    url: `${process.env.CONFIG_EXPORTER_URL}/api/controllers`.replace(
      '//api',
      '/api'
    ),
  })
    .promise()
    .then(data => {
      const parsedData = JSON.parse(data)
      const { id: controllerId } =
        parsedData.find(({ url: controllerUrl }) => controllerUrl === url) || {}
      return controllerId
    })
    .catch(err => {
      return { errorMsg: `Error: ${err}`, type: 'danger' }
    })
}

import rp from 'request-promise'

export default async ({ options, baseURL }) =>
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

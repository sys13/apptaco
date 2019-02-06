import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 5656

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/stuff', (req, res) => {
  console.log(req.body.post)

  res.send({ express: `Hello From Express, you sent me: ${req.body.post}` })
})

app.get('/api/v1/tacos', (req, res) => {
  console.log(req.body.post)

  const sampleList = [
    { id: '1', name: 'foo', description: 'lorem ipsum sit dolor' },
    { id: '2', name: 'bar', description: 'lorem ipsum sit dolor' },
    { id: '3', name: 'baz', description: 'lorem ipsum sit dolor' },
  ]
  res.send(sampleList)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

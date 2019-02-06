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

  res.send({ })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

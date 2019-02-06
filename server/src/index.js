import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import tacos from './routes/tacos'
import tacoDetails from './routes/tacoDetails'
import deployTaco from './routes/deployTaco'

const app = express()
const port = process.env.PORT || 5656

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/stuff', (req, res) => {
  console.log(req.body.post)

  res.send({ express: `Hello From Express, you sent me: ${req.body.post}` })
})

app.get('/api/v1/tacos', tacos)
app.get('/api/v1/tacos/:id', tacoDetails)
app.post('/api/v1/tacos/:id/deploy', deployTaco)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

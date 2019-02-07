import loadTacos from '../loadTacos'

export default (req, res) => {
  const savedTacos = loadTacos()
  //   console.log(req.body.post)

  const filteredTacos = savedTacos

  res.send(filteredTacos)
}

import loadTacos from '../loadTacos'

export default (req, res) => {
  const savedTacos = loadTacos()
  //   console.log(req.body.post)

  res.send(savedTacos)
}

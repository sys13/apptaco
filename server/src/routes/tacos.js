import loadTacos from '../loadTacos'

export default (req, res) => {
  const savedTacos = loadTacos()
  //   console.log(req.body.post)

  const filteredTacos = savedTacos.map(({ id, name, description }) => ({
    id,
    name,
    description,
  }))

  res.send(filteredTacos)
}

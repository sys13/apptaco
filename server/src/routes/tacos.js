import loadTacos from '../loadTacos'

export default async (req, res) => {
  const savedTacos = await loadTacos()
  //   console.log(req.body.post)
  console.log('savedTacos: ' + savedTacos)

  const filteredTacos = savedTacos

  res.send(filteredTacos)
}

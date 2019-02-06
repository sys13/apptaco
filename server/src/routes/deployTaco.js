import loadTacos from '../loadTacos'

export default (req, res) => {
  const savedTacos = loadTacos()
  const { id } = req.params
  const { deployScope } = req.body.post

  console.log(id, deployScope)

  const taco = savedTacos.find(({ id: tacoId }) => tacoId === id)

  // TODO: call the config exporter

  if (!taco) {
    res.send({ msg: 'not found', notFound: true })
  } else {
    res.send({ msg: 'Deployment complete' })
  }
}

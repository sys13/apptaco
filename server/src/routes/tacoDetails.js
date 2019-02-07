import loadTacos from '../loadTacos'

export default async (req, res) => {
  const savedTacos = await loadTacos()
  const { id } = req.params

  const taco = savedTacos.find(({ id: tacoId }) => tacoId === id)

  if (!taco) {
    res.send({ msg: 'not found', notFound: true })
  } else {
    res.send(taco)
  }
}

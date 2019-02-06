export default () => {
  console.log('loading tacos')

  const sampleList = [
    {
      id: '1',
      name: 'foo',
      description: 'lorem ipsum sit dolor',
      version: '1.3',
      tags: ['java', 'spring'],
      authors: 'Einstein',
      ingredients: [
        {
          type: 'btRules',
          contents: 'JSON from Config exporter',
          doc: 'This is a good config',
        },
        {
          type: 'eum',
          contents: 'JSON from Config exporter',
          doc: 'This is the best config',
        },
      ],
    },
    {
      id: '2',
      name: 'bar',
      description: 'lorem ipsum sit dolor',
      version: '1.3',
      tags: ['java', 'spring'],
      authors: 'Einstein',
      ingredients: [
        {
          type: 'btRules',
          contents: 'JSON from Config exporter',
          doc: 'This is a good config',
        },
        {
          type: 'eum',
          contents: 'JSON from Config exporter',
          doc: 'This is the best config',
        },
      ],
    },
    {
      id: '3',
      name: 'baz',
      description: 'lorem ipsum sit dolor',
      version: '1.3',
      tags: ['java', 'spring'],
      authors: 'Einstein',
      ingredients: [
        {
          type: 'btRules',
          contents: 'JSON from Config exporter',
          doc: 'This is a good config',
        },
        {
          type: 'eum',
          contents: 'JSON from Config exporter',
          doc: 'This is the best config',
        },
      ],
    },
  ]

  return sampleList
}

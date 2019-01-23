import templates from '../dashboardTemplates/templates'

export default [
  ...Object.keys(templates).map(key => ({
    type: 'TEMPLATE',
    title: key,
    query:
      'SELECT application FROM applications WHERE application REGEXP "MyApp1|MyApp2"',
  })),
  {
    type: 'GRID',
    title: 'All Applications',
    query: 'SELECT application, health, art, cpm, epm FROM applications',
  },
  {
    type: 'GRID',
    title: 'One Application',
    query:
      'SELECT application, health, art, cpm, epm FROM applications WHERE application = "MyApp"',
  },
  {
    type: 'GRID',
    title: 'Some Applications',
    query:
      'SELECT application, health, art, cpm, epm FROM applications WHERE application REGEXP "MyApp1|MyApp2|MyApp3"',
  },
  {
    type: 'GRID',
    title: 'All BTs in an App',
    query:
      'SELECT bt, health, art, cpm, epm FROM applications WHERE application = "MyApp"',
  },
  {
    type: 'GRID',
    title: 'Some BTs in an App',
    query:
      'SELECT bt, health, art, cpm, epm FROM applications WHERE application = "MyApp" AND bt REGEXP "MyBT.*"',
  },
  {
    type: 'GRID',
    title: 'Some BTs from different Apps',
    query:
      'SELECT bt, health, art, cpm, epm FROM applications WHERE application REGEXP "MyApp1|MyApp2|MyApp3" AND bt REGEXP "Login.*"',
  },
  {
    type: 'GRID',
    title: 'All Tiers in an App',
    query:
      'SELECT tier, health, art, cpm, epm FROM applications WHERE application = "MyApp"',
  },
  {
    type: 'GRID',
    title: 'All Nodes in an App',
    query:
      'SELECT node, health, art, cpm, epm FROM applications WHERE application = "MyApp"',
  },
  {
    type: 'GRID',
    title: 'All SEs in an App',
    query:
      'SELECT se, art, cpm, epm FROM applications WHERE application = "MyApp"',
  },
  {
    type: 'GRID',
    title: 'SEs with Health Rules',
    query:
      'SELECT se, health(art), health(error), art, cpm, epm FROM applications WHERE application REGEXP "MyApp"',
  },
  {
    type: 'GRID',
    title: 'Some SEs in different Apps',
    query:
      'SELECT se, art, cpm, epm FROM applications WHERE application REGEXP "MyApp" AND se REGEXP "Login.*"',
  },
]

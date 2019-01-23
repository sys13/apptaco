const SHORTCUTS = [
  { metric: 'Application', shortcut: 'application' },
  { metric: 'Tier', shortcut: 'tier' },
  { metric: 'Node', shortcut: 'node' },
  { metric: 'Backend', shortcut: 'backend' },
  { metric: 'Information Point', shortcut: 'ip' },
  { metric: 'Business Transaction', shortcut: 'bt' },
  { metric: 'Service Endpoint', shortcut: 'se' },
  { metric: '', shortcut: 'health' },
  {
    metric: 'Average Response Time (ms)',
    shortcut: 'art',
    formatString: '${v} ms', // eslint-disable-line no-template-curly-in-string
  },
  { metric: 'Calls per Minute', shortcut: 'cpm' },
  { metric: 'Errors per Minute', shortcut: 'epm' },
]

export default sc => SHORTCUTS.find(({ shortcut }) => shortcut === sc)

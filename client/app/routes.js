/* eslint flowtype-errors/show-errors: 0 */
import React from 'react'
import { Switch, Route } from 'react-router'
import App from './containers/App'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import ConfigPage from './containers/ConfigPage'

export default () => (
  <App>
    <Switch>
      <Route path="/config" component={ConfigPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
)

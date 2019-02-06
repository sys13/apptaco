import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import Deploy from './Deploy'

class DeployPage extends Component {
  render() {
    const { match } = this.props
    const { id, deployScope } = match.params
    const { host: controllerHost } =
      (Cookies.get('controllerConfig') &&
        JSON.parse(Cookies.get('controllerConfig'))) ||
      {}

    if (!id) {
      return
    }
    return (
      <Deploy
        id={id}
        deployScope={deployScope}
        controllerHost={controllerHost}
      />
    )
  }
}

export default withRouter(DeployPage)

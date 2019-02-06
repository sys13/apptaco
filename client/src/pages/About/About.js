import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class About extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>About AppTaco</title>
        </Helmet>
        <h1>About</h1>
        <div>
          <p>
          AppDynamics Configs, in Seconds
          </p>
          <p>
            Learn more about it at the{' '}
            <a href="https://github.com/sys13/apptaco">
              GitHub repository
            </a>.
          </p>
        </div>
      </div>
    )
  }
}

export default About

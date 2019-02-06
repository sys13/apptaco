import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>AppTaco</title>
        </Helmet>
        <div className="jumbotron">
          <h1 className="display-3">AppDynamics Configs, in Seconds</h1>
          <p className="lead">
            It's so cool!!!!
          </p>
          <hr className="my-4" />
          
        </div>
      </div>
    )
  }
}

export default Landing

import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>AppTaco - Share</title>
        </Helmet>
        <div className="mt-3">
          <h1>Share</h1>
          <div className="card bg-light my-4">
            <div className="card-body">
              <p className="card-text">
                Everyone loves more tacos! We would really appreciate your help
                in creating a library of more tacos.
              </p>
            </div>
          </div>
          <h3 className="mb-3">3 Steps to Taco Fame</h3>
          <ul className="list-group">
            <li className="list-group-item">
              1. Use{' '}
              <a href="https://singularity.jira.com/wiki/spaces/CS/pages/107413539/Config+Exporter">
                Config Exporter
              </a>{' '}
              to export your config JSONs
            </li>
            <li className="list-group-item">2. Export dashboards JSONs</li>
            <li className="list-group-item">
              3. Zip it up and send us an email at{' '}
              <a href="mailto:apptaco@appdynamics.com">
                apptaco@appdynamics.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Landing

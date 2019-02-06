import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import TacoList from '../../components/TacoList/TacoList.js'

class Landing extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>AppTaco</title>
        </Helmet>
        <div className="jumbotron">
          <h1 className="display-5">AppDynamics Configs, in Seconds</h1>
          <p className="lead">It is really cool</p>
          <hr className="my-4" />
          <p className="lead">Like sooo cool</p>
        </div>
        <div className="container">
          <div className="landing-searchbar input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
          <TacoList />
        </div>
      </div>
    )
  }
}

export default Landing

import React, { Component } from 'react'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import TacoList from '../../components/TacoList/TacoList.js'

class Landing extends Component {
  state = {
    search: '',
    // Auto Detection is a fake feature for the demo
    autoDetect: false,
  }
  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }

  componentDidMount() {
    const { search, autoDetect } = queryString.parse(this.props.location.search)
    if (search) {
      this.setState({ search, autoDetect })
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>AppTaco</title>
        </Helmet>
        <div className="jumbotron">
          <h1 className="display-5">AppDynamics Configs, in Seconds</h1>
          <p className="lead">
            AppTaco helps you deploy controller configuration and dashboards. It
            can deploy dashboards, business transaction scopes, rules, health
            rules, JMX, browser eum configs, and more! It also has a powerful
            templating engine that can generate very customizable configs and
            dashboards. We have a growing library of configs. Feel free to use
            these tacos and <Link to={'/share'}>share</Link>!
          </p>
        </div>
        <div className="container">
          <div className="landing-searchbar form-group">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                name="search"
                aria-label="Search"
                aria-describedby="button-addon2"
                onChange={this.handleInputChange}
                value={this.state.search}
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
            {this.state.autoDetect ? (
              <div
                class="form-text alert alert-success alert-dismissible fade show"
                role="alert"
              >
                <b>Congratulations!</b> We autodetected the following COTS in
                your business application: {this.state.autoDetect}
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            ) : null}
          </div>
          <TacoList searchQuery={this.state.search} />
        </div>
      </div>
    )
  }
}

export default Landing

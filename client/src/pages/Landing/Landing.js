import React, { Component } from 'react'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import TacoList from '../../components/TacoList/TacoList.js'

class Landing extends Component {
  state = {
    search: '',
  }
  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }

  componentDidMount() {
    const { search } = queryString.parse(this.props.location.search)
    if (search) {
      this.setState({ search })
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
            dashboards.
          </p>
          <hr className="my-4" />
          <p className="lead">
            We have a growing library of configs. Feel free to use these tacos
            and <Link to={'/share'}>share</Link>!
          </p>
        </div>
        <div className="container">
          <div className="landing-searchbar input-group mb-3">
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
          <TacoList searchQuery={this.state.search} />
        </div>
      </div>
    )
  }
}

export default Landing

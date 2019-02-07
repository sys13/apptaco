import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import changeCase from 'change-case'
import Loading from '../../components/Loading/Loading.js'

class DeploymentConfig extends Component {
  constructor(props) {
    super(props)

    let settings = {}

    if (props.taco.settings) {
      Object.keys(props.taco.settings).forEach(key => {
        settings[key] = props.taco.settings[key].default
      })
    }

    this.state = {
      deploying: false,
      deployMsg: '',
      settings,
    }
  }

  handleSettingsChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({
      settings: {
        ...this.state.settings,
        [name]: value,
      },
    })
  }

  deploy = () => {
    const { taco, deployScope, config } = this.props
    console.log('PROPS', this.props)
    this.setState({
      deploying: true,
      deployMsg: 'Deployment in progress',
    })
    fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/v1/tacos/${taco.id}/deploy`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post: {
            deployScope,
            config,
            id: taco.id,
            settings: this.state.settings,
          },
        }),
      }
    )
      .then(res => {
        res.json().then(({ msg }) => {
          this.setState({
            deploying: false,
            deployMsg: msg,
          })
        })
      })
      .catch(res => {
        this.setState({
          deploying: false,
          deployMsg: res.msg ? res.msg : 'No error message provided',
        })
      })
  }

  render() {
    const { taco, controllerHost } = this.props

    return (
      <div className="my-3">
        <h1 className="taco-details-title">Deploy Taco: {taco.name}</h1>
        <div className="mb-3">
          {controllerHost
            ? `Using controller host: '${controllerHost}'`
            : 'No controller config set up yet'}
          <span>
            &nbsp;<Link to="/config">(configure)</Link>
          </span>
          {Object.keys(taco.settings).map(name => {
            const setting = taco.settings[name]
            return (
              <div className="form-group" key={name}>
                <label htmlFor={`deployment-setting-${name}`}>
                  {changeCase.title(name)}
                </label>
                <input
                  onChange={this.handleSettingsChange}
                  name={name}
                  type="text"
                  className="form-control"
                  id={`deployment-setting-${name}`}
                  value={this.state.settings[name]}
                />
                <small className="form-text text-muted">
                  {setting.description}
                </small>
              </div>
            )
          })}
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.deploy}
          disabled={false}
        >
          {this.state.deploying ? (
            <div>
              <div
                className="spinner-border spinner-border-sm mr-1"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <span className="">Deploying Dashboard</span>
            </div>
          ) : (
            <div>Deploy Dashboard</div>
          )}
        </button>
        <div>{this.state.deployMsg}</div>
      </div>
    )
  }
}

class Deploy extends Component {
  state = {
    error: null,
    isLoaded: false,
    item: {},
  }

  componentDidMount() {
    const { id } = this.props
    if (!id) {
      return
    }
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/tacos/${id}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            item: result,
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  render() {
    const { controllerHost, deployScope } = this.props
    const { error, isLoaded, item } = this.state

    if (error) {
      return (
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">We dropped your tacos!</h4>
          <p>Error Message: {error.message}</p>
        </div>
      )
    }

    if (!isLoaded) {
      return <Loading />
    }

    return (
      <div className="container">
        <Helmet>
          <title>AppTaco - Deploy</title>
        </Helmet>
        <DeploymentConfig
          taco={item}
          deployScope={deployScope}
          controllerHost={controllerHost}
          config={this.props.config}
        />
      </div>
    )
  }
}

export default Deploy

import React, { Component } from 'react'
import Cookies from 'js-cookie'
// import { Link } from 'react-router-dom'

export default class Config extends Component {
  constructor() {
    super()
    const cookie = Cookies.get('controllerConfig')
    const { host, username, password, account, port, https } =
      (cookie && JSON.parse(cookie)) || {}

    this.state = {
      host,
      username,
      password,
      account,
      port,
      https,
      connectionTestLoading: false,
      connectionTested: false,
    }
  }
  onSubmit = () => {}
  handleInputChange = event => {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target
    const cookie =
      Cookies.get('controllerConfig') &&
      JSON.parse(Cookies.get('controllerConfig'))
    const newCookieVal = { ...cookie, [name]: value }

    Cookies.set('controllerConfig', JSON.stringify(newCookieVal))

    this.setState({ [name]: value, connectionTested: false })
  }
  onTestConnection = async event => {
    event.preventDefault()

    this.setState({
      connectionTestLoading: true,
    })

    const { host, username, password, account, port, https } =
      (Cookies.get('controllerConfig') &&
        JSON.parse(Cookies.get('controllerConfig'))) ||
      {}

    fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/testConnection`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: { host, username, password, account, port, https },
      }),
    })
      .then(res => {
        res.json().then(({ succeeded, error }) => {
          console.log(succeeded)

          this.setState({
            succeeded,
            connectionTestLoading: false,
            connectionError: error,
            connectionTested: true,
          })
        })
      })
      .catch(res => {
        this.setState({
          succeeded: false,
          connectionTestLoading: false,
          connectionError: {
            errorMsg: res.message ? res.message : 'Something went wrong...',
            type: 'danger',
          },
          connectionTested: true,
        })
      })
  }
  render() {
    return (
      <div>
        <div className="container mt-4">
          <h1>Configuration</h1>
          <div className="my-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onTestConnection}
            >
              Save &amp; Test Connection
            </button>
          </div>
          <div>
            {this.state.connectionTestLoading ? (
              <div
                className="alert alert-info d-flex align-items-center"
                role="alert"
              >
                <strong>Testing connection...</strong>
                <div
                  aria-hidden="true"
                  className="spinner-border ml-auto"
                  role="status"
                />
              </div>
            ) : null}
            {this.state.connectionTested && this.state.succeeded ? (
              <div className="alert alert-success">Connection succeeded!</div>
            ) : null}
            {this.state.connectionTested && !this.state.succeeded ? (
              <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Connection failed!</h4>
                <p>
                  {this.state.connectionError
                    ? this.state.connectionError.errorMsg
                    : 'No error message provided.'}
                </p>
              </div>
            ) : null}
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="hostInput">Controller Host</label>
              <input
                type="text"
                className="form-control"
                name="host"
                id="hostInput"
                placeholder="Controller hostname ex: mycompany.saas.appdynamics.com"
                onChange={this.handleInputChange}
                value={this.state.host}
              />
              <small id="emailHelp" className="form-text text-muted">
                Please don't add 'http://' or 'https://'. Example:
                mycompany.saas.appdynamics.com
              </small>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={this.handleInputChange}
                checked={this.state.https}
                value={this.state.https}
                name="https"
                id="httpsInput"
              />
              <label className="form-check-label" htmlFor="httpsInput">
                HTTPS
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="accountInput">Account</label>
              <input
                type="text"
                className="form-control"
                name="account"
                id="accountInput"
                placeholder="Account"
                onChange={this.handleInputChange}
                value={this.state.account}
              />
              <small id="emailHelp" className="form-text text-muted">
                Default account name is customer1
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="usernameInput">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="usernameInput"
                placeholder="Username"
                onChange={this.handleInputChange}
                value={this.state.username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="passwordInput"
                placeholder="Password"
                onChange={this.handleInputChange}
                value={this.state.password}
              />
              <small id="emailHelp" className="form-text text-muted">
                Note: Password is stored in plain-text on your computer
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="portInput">Port (optional)</label>
              <input
                type="text"
                className="form-control"
                name="port"
                id="portInput"
                placeholder="Port"
                onChange={this.handleInputChange}
                value={this.state.port}
              />
              <small id="emailHelp" className="form-text text-muted">
                Default is port 80. Only need to set this for on-prem
                controllers
              </small>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

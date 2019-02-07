import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class Deploy extends Component {
  state = {
    deploying: false,
    deployMsg: '',
  }
  deploy = () => {
    const { id, deployScope, config } = this.props
    this.setState({
      deploying: true,
      deployMsg: 'Deployment in progress',
    })
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/tacos/${id}/deploy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: { deployScope, config } }),
    })
      .then(res => {
        res.json().then(({ msg }) => {
          this.setState({
            deploying: false,
            deployMsg: msg,
          })
        })
      })
      .catch(res => {
        res.json().then(({ msg }) => {
          this.setState({
            deploying: false,
            deployMsg: msg,
          })
        })
      })
  }
  render() {
    const { controllerHost } = this.props
    return (
      <div className="container">
        <Helmet>
          <title>AppTaco - Deploy</title>
        </Helmet>
        <div className="my-3">
          <h1 className="taco-details-title">Deploy Taco</h1>
          <div className="mb-3">
            {controllerHost
              ? `Using controller host: '${controllerHost}'`
              : 'No controller config set up yet'}

            <div>
              <Link to="/config">Open Config screen</Link>
            </div>
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
      </div>
    )
  }
}

export default Deploy

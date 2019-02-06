import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class Deploy extends Component {
  state = {
    deploying: false,
    deployMsg: '',
  }
  deploy = () => {
    this.setState({
      deploying: true,
      deployMsg: 'Deploying, not for real though LOL',
    })
  }
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>AppTaco - Deploy</title>
        </Helmet>
        <div className="my-3">
          <h1 className="taco-details-title">Deploy Taco</h1>
          <div>
            No config entered yet. Add your controller details to{' '}
            <Link to="/config">Config</Link>
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

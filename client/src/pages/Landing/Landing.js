import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const TacoItem = ({ name, id }) => (
  <Link to={`/taco/${id}`} className="list-group-item list-group-item-action">
    {name}
  </Link>
)

const sampleList = [
  { id: '1', name: 'foo' },
  { id: '2', name: 'bar' },
  { id: '3', name: 'baz' },
]

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
          <div className="list-group">
            {sampleList.map(({ id, name }) => (
              <TacoItem key={id} id={id} name={name} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Landing

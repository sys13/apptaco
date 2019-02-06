import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const TacoItem = ({ name, id }) => (
  <div className="card">
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <p class="card-text">Lorem ispum</p>
    </div>
    <div class="card-footer">
      <Link to={`/taco/${id}`} className="btn bn-primary">
        Deploy
      </Link>
    </div>
  </div>
)

class TacoList extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  }
  componentDidMount() {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/tacos`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.tacos,
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
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="card-columns">
          {items &&
            items.length &&
            items.map(({ id, name }) => (
              <TacoItem key={id} id={id} name={name} />
            ))}
        </div>
      )
    }
  }
}

export default TacoList

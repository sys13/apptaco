import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const TacoItem = ({ id, name, description, image }) => (
  <Link to={`/taco/${id}`}>
    <div className="card">
      <div className="card-body">
        <img src={image.data} className="card-img-top" alt="..." />
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-dark">{description}</p>
      </div>
    </div>
  </Link>
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
            items: result,
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
  search(searchQuery, items) {
    return items.filter(
      ({ name, description, tags }) =>
        name.toLowerCase().includes(searchQuery) ||
        description.includes(searchQuery) ||
        tags.includes(searchQuery)
    )
  }
  render() {
    const { error, isLoaded, items } = this.state

    if (error) {
      return (
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">We dropped your tacos!</h4>
          <p>Error Message: {error.message}</p>
        </div>
      )
    }

    if (!isLoaded) {
      return (
        <div
          className="alert alert-info d-flex align-items-center"
          role="alert"
        >
          <strong>Loading...</strong>
          <div
            aria-hidden="true"
            className="spinner-border ml-auto"
            role="status"
          />
        </div>
      )
    }

    const { searchQuery } = this.props
    const filteredItems =
      searchQuery === '' ? items : this.search(searchQuery.toLowerCase(), items)
    return (
      <div className="card-columns">
        {filteredItems &&
          filteredItems.length &&
          filteredItems.map(({ id, name, description, image }) => (
            <TacoItem
              key={id}
              id={id}
              name={name}
              image={image}
              description={description}
            />
          ))}
      </div>
    )
  }
}

export default TacoList

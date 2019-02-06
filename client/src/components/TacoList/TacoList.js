import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const TacoItem = ({ id, name, description }) => (
  <Link to={`/taco/${id}`}>
    <div className="card">
      <div className="card-body">
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
      ({ name, description }) =>
        name.includes(searchQuery) || description.includes(searchQuery)
    )
  }
  render() {
    const { error, isLoaded, items } = this.state

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      const { searchQuery } = this.props
      const filteredItems =
        searchQuery === '' ? items : this.search(searchQuery, items)
      return (
        <div className="card-columns">
          {filteredItems &&
            filteredItems.length &&
            filteredItems.map(({ id, name, description }) => (
              <TacoItem
                key={id}
                id={id}
                name={name}
                description={description}
              />
            ))}
        </div>
      )
    }
  }
}

export default TacoList

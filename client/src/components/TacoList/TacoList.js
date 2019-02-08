import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading.js'

const TacoItem = ({ id, name, description, image, support }) => (
  <div className="card">
    {support === 'vendor' || support === 'appdynamics' ? (
      <div
        class={`card-header bg-${
          support === 'vendor' ? 'success' : 'info'
        } text-white`}
      >
        {support} supported
      </div>
    ) : null}
    <div className="card-body">
      <Link to={`/taco/${id}`}>
        <img src={image.data} className="card-img-top" alt="..." />
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-dark">{description}</p>
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
    return items.filter(({ name, description, tags }) => {
      return searchQuery.split(' ').reduce((carry, word) => {
        return (
          carry ||
          name.toLowerCase().includes(word) ||
          description.includes(word) ||
          tags.includes(word)
        )
      }, false)
    })
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
      return <Loading />
    }

    const { searchQuery } = this.props
    const filteredItems =
      searchQuery === '' ? items : this.search(searchQuery.toLowerCase(), items)
    return (
      <div className="card-columns">
        {filteredItems &&
          filteredItems.length &&
          filteredItems.map(({ id, name, description, image, support }) => (
            <TacoItem
              key={id}
              id={id}
              name={name}
              image={image}
              support={support}
              description={description}
            />
          ))}
      </div>
    )
  }
}

export default TacoList

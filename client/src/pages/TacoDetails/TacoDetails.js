import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class TacoDetails extends Component {
  render() {
    const { id, name, description, version, tags, authors, ingredients } =
      this.props.taco || {}
    return (
      <div className="container">
        <Helmet>
          <title>AppTaco - Taco</title>
        </Helmet>
        <div className="my-3">
          <h1 className="taco-details-title d-inline">Taco</h1>
          <Link to={`/taco/${id}/deploy/all`}>
            <button className="btn btn-primary float-right">Deploy Taco</button>
          </Link>
        </div>

        <ul className="taco-details-info list-group">
          <li className="list-group-item">
            <b>Name:</b> {name}
          </li>
          {version ? (
            <li className="list-group-item">
              <b>Version:</b> {version}
            </li>
          ) : null}
          {tags ? (
            <li className="list-group-item">
              <b>Tags:</b> {tags.join(', ')}
            </li>
          ) : null}
          {authors ? (
            <li className="list-group-item">
              <b>Authors: </b>
              {authors}
            </li>
          ) : null}
          {description ? (
            <li className="list-group-item">
              <b>Description: </b>
              {description}
            </li>
          ) : null}
        </ul>
        <div className="taco-details-description mt-4">
          <h4 className="mb-3">Ingredients</h4>
          <ul className="taco-details-ingredients list-group">
            {ingredients && ingredients.length
              ? ingredients.map(({ type, doc }) => (
                  <li key={type} className="list-group-item">
                    <b>{type}</b> - {doc}
                    <Link to={`/taco/${id}/deploy/${type}`}>
                      <button className="btn btn-secondary float-right">
                        Deploy Ingredient
                      </button>
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    )
  }
}

export default TacoDetails

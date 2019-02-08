import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class ExternaLink extends Component {
  render() {
    return (
      <span>
        {this.props.children}
        <a href={this.props.to}>
          <img
            style={{ height: '12px', marginLeft: '2px' }}
            alt={`(vist ${this.props.to})`}
            src={process.env.PUBLIC_URL + '/external.svg'}
          />
        </a>
      </span>
    )
  }
}

class SupportBadge extends Component {
  render() {
    const badge = { author: 'light', appdynamics: 'info', vendor: 'success' }[
      this.props.type
    ]
    return (
      <span className={`badge badge-pill badge-${badge}`}>
        {this.props.type} supported
      </span>
    )
  }
}

class TacoDetails extends Component {
  render() {
    const {
      id,
      name,
      support,
      description,
      version,
      tags,
      authors,
      ingredients,
      product_link,
    } = this.props.taco || {}
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
            <b>Name:</b> <ExternaLink to={product_link}>{name}</ExternaLink>{' '}
            <SupportBadge type={support} />
          </li>
          {version ? (
            <li className="list-group-item">
              <b>Version:</b> {version}
            </li>
          ) : null}
          {tags ? (
            <li className="list-group-item">
              <b>Tags:</b>{' '}
              {tags.map((tag, index) => (
                <span key={index}>
                  <Link
                    className="badge badge-warning"
                    key={index}
                    to={`/?search=${tag}`}
                  >
                    {tag}
                  </Link>
                  &nbsp;
                </span>
              ))}
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
                    <b>{type}</b>
                    {doc ? ` - ${doc}` : null}
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

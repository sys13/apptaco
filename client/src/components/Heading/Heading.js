import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Heading extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark">
        <Link className="navbar-brand" to="/">
          AppTaco
        </Link>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/share">
          Share
        </Link>
        <Link className="nav-link" to="/config">
          Config
        </Link>
        <Link className="nav-link" to="/">
          Help
        </Link>
      </nav>
    )
  }
}

export default Heading

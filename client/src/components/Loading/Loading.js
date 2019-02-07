import React, { Component } from 'react'

class Loading extends Component {
  render() {
    return (
      <div className="alert alert-info d-flex align-items-center" role="alert">
        <strong>Loading...</strong>
        <div
          aria-hidden="true"
          className="spinner-border ml-auto"
          role="status"
        />
      </div>
    )
  }
}

export default Loading

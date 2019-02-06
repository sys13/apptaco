import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import TacoDetails from './TacoDetails'

class TacoDetailsPage extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  }
  componentDidMount() {
    const { match } = this.props
    const { id } = match.params
    if (!id) {
      return
    }
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/tacos/${id}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            item: result,
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
    return <TacoDetails taco={this.state.item} loaded={this.state.loaded} />
  }
}

export default withRouter(TacoDetailsPage)

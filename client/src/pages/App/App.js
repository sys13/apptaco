import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="">
        <Helmet>
          <meta charSet="utf-8" />
          <title>AppTaco</title>
        </Helmet>
        {this.props.children}
      </div>
    )
  }
}

export default App

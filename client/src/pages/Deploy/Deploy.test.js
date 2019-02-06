import React from 'react'
import ReactDOM from 'react-dom'
import Deploy from './Deploy'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Deploy />, div)
})

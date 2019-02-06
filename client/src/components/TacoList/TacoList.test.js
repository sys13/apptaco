import React from 'react'
import ReactDOM from 'react-dom'
import TacoList from './TacoList'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TacoList />, div)
})

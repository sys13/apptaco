import React from 'react'
import ReactDOM from 'react-dom'
import TacoDetails from './TacoDetails'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TacoDetails />, div)
})

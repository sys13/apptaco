import Landing from './pages/Landing/Landing'
import About from './pages/About/About'

export default [
  // landing
  { path: '/', component: Landing, exact: true },
  // about
  { path: '/about', component: About, exact: true },
]

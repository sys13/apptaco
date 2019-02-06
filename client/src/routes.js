import Landing from './pages/Landing/Landing'
import TacoDetails from './pages/TacoDetails/TacoDetails'
import Deploy from './pages/Deploy/Deploy'
import Share from './pages/Share/Share'
import About from './pages/About/About'

export default [
  // landing
  { path: '/', component: Landing, exact: true },
  // taco
  { path: '/taco/:tacoId', component: TacoDetails, exact: true },
  // share
  { path: '/share', component: Share, exact: true },
  // deploy
  { path: '/taco/:tacoId/deploy', component: Deploy, exact: true },
  // about
  { path: '/about', component: About, exact: true },
]

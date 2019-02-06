import Landing from './pages/Landing/Landing'
import TacoDetails from './pages/TacoDetails/TacoDetails'
import Deploy from './pages/Deploy/Deploy'
import Share from './pages/Share/Share'
import About from './pages/About/About'
import Config from './pages/Config/Config'

export default [
  // landing
  { path: '/', component: Landing, exact: true },
  // taco
  { path: '/taco/:id', component: TacoDetails, exact: true },
  // share
  { path: '/share', component: Share, exact: true },
  // deploy
  { path: '/taco/:id/deploy/:deployScope', component: Deploy, exact: true },
  // config
  { path: '/config', component: Config, exact: true },
  // about
  { path: '/about', component: About, exact: true },
]

import Landing from './pages/Landing/Landing'
import TacoDetailsPage from './pages/TacoDetails/TacoDetailsPage'
import DeployPage from './pages/Deploy/DeployPage'
import Share from './pages/Share/Share'
import About from './pages/About/About'
import Config from './pages/Config/Config'

export default [
  // landing
  { path: '/', component: Landing, exact: true },
  // taco
  { path: '/taco/:id', component: TacoDetailsPage, exact: true },
  // share
  { path: '/share', component: Share, exact: true },
  // deploy
  { path: '/taco/:id/deploy/:deployScope', component: DeployPage, exact: true },
  // config
  { path: '/config', component: Config, exact: true },
  // about
  { path: '/about', component: About, exact: true },
]

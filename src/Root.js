import Inferno from 'inferno'
import { Router, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'

const browserHistory = createBrowserHistory()

const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
)

export default routes

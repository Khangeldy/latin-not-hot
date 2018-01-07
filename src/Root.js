import { Router, Route, IndexRoute } from 'inferno-router'
import createHashHistory from 'history/createHashHistory'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import HandWriteView from './pages/HandWriteView'
import store from './store'

const hashHistory = createHashHistory()

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/handwrite" component={HandWriteView} />
    </Route>
  </Router>
)

export default routes

import { Router, Route, IndexRoute } from 'inferno-router'
// import createHistory from 'history/createBrowserHistory'
import createHashHistory from 'history/createHashHistory'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import HandWriteView from './pages/HandWriteView'
import CreateNew from './pages/CreateNew'
import NoMatch from './pages/NoMatch'

const history = createHashHistory()
// const history = createHistory()


const routes = (
  <Router history={history}>
    <Route path="/" onChange={() => alert('url changed')} component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/handwrite" component={HandWriteView} />
      <Route path="/new" component={CreateNew} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
)

export default routes

import { render } from 'inferno';
import { Provider } from 'inferno-mobx'
import routes from './Root';
import store from './store'
import './index.css';
// import 'whatwg-fetch';

render(<Provider store={store}>
  {routes}
</Provider>, document.getElementById('app'));

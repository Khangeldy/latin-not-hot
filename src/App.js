import { linkEvent } from 'inferno'
import { Link, IndexLink } from 'inferno-router'
import Component from 'inferno-component';
import { connect } from 'inferno-mobx'
import './registerServiceWorker';
import './App.css';

function toggleEditor(that, e) {
  console.log(that.props.store.diffMode)
  that.props.store.diffMode = !that.props.store.diffMode
  e.stopPropagation()
}

function switchFontHandler(that, e) {
  that.props.store.switchFont(e.target.value)
}

class App extends Component {

  state = {
    isMenu: false
  }

  componentDidMount() {
    this.unlisten = this.context.router.listen((location, action) => {
      document.body.classList.remove('is-menu')
    })
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <nav className="nav-burger" onClick={(e) => {
            console.log('toggle')
            e.stopPropagation();
            document.body.classList.toggle('is-menu')
          }}>
            <span></span>
            <span></span>
            <span></span>
          </nav>
          <ul class="cd-menu">
            <li><IndexLink activeClassName="active">Редактор</IndexLink></li>
            <li><Link to="/about" activeClassName="active">Kazak grammar</Link></li>
            <li><Link to="/handwrite" activeClassName="active">Қолжазба</Link></li>
            <li><Link to="/new" activeClassName="active">Өз вариантыңды жаса</Link></li>
          </ul>
          <div className="group-buttons">
            {
               this.context.router.isActive('/') && <button
                className={this.props.store.diffMode ? "active btn": "btn"}
                onClick={linkEvent(this, toggleEditor)}>Салыстыру режимі
              </button>
            }

            {
              this.context.router.isActive('/handwrite') && <select onChange={linkEvent(this, switchFontHandler)} defautValue="Kalam">
                <option value="Kalam">Kalam</option>
                <option value="Dancing Script">Dancing Script</option>
                <option value="Just Me Again Down Here">Just Me Again Down Here</option>
                <option value="Marck Script">Marck Script</option>
                <option value="Sedgwick Ave">Sedgwick Ave</option>
                <option value="Caveat">Caveat</option>
                <option value="Kavivanar">Kavivanar</option>
              </select>
            }
          </div>
        </header>
        <div className="App-intro">
          {this.props.children}
        </div>
        <div class="mobile-only-menu">
          <ul>
            <li><IndexLink activeClassName="active">Редактор</IndexLink></li>
            <li><Link to="/about" activeClassName="active">Kazak grammar</Link></li>
            <li><Link to="/handwrite" activeClassName="active">Қолжазба</Link></li>
            <li><Link to="/new" activeClassName="active">Өз вариантыңды жаса</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(['store'], App);

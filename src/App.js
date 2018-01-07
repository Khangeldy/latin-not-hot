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

function toggleMenu(that, e) {
  that.setState({isMenu: !that.state.isMenu})
  e.stopPropagation()
}

class App extends Component {

  state = {
    isMenu: false
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <ul class="cd-menu">
            <li><IndexLink>Редактор</IndexLink></li>
            <li><Link to="about">Өзіміз жайлы</Link></li>
            <li><Link to="handwrite">Қолма қол текст</Link></li>
            <li><Link to="new">Жаңа әліпби</Link></li>
          </ul>
          <div className="group-buttons">
            {
               this.context.router.isActive('/') && <button
                className={this.props.store.diffMode ? "active": ""}
                onClick={linkEvent(this, toggleEditor)}>Салыстыру режимі
              </button>
            }

            {
              this.context.router.isActive('/handwrite') && <select>
                <option>Почерк 1</option>
                <option>Почерк 2</option>
                <option>Почерк 3</option>
              </select>
            }
          </div>
        </header>
        <div className="App-intro">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(['store'], App);

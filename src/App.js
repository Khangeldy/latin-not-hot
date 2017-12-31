import Inferno from 'inferno';
import Component from 'inferno-component';
import './registerServiceWorker';
import './App.css';

class App extends Component {
  state = {
    activateDiffMode: false
  }

  toggleEditor() {
    this.setState({
      activateDiffMode: !this.state.activateDiffMode
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="group-buttons">
            <button onClick={this.toggleEditor.bind(this)}>Салыстыру режимі</button>
          </div>
        </header>
        <div className="App-intro">
          { Inferno.cloneVNode(this.props.children, { diffMode: this.state.activateDiffMode})}
        </div>
      </div>
    );
  }
}

export default App;

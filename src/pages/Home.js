import Inferno from 'inferno'
import Component from 'inferno-component'
import SourceEditor from '../components/SourceEditor'
import OutputEditor from '../components/OutputEditor'
import latinize from '../utils/latinize'
import official from '../utils/official'
import kazgrammer from '../utils/kazgrammer'
import { getPercent } from '../utils'
import './Home.css'

console.log(Inferno);

class Home extends Component {
  state = {
    input: '',
    output: '',
    output2: '',
    activateDiffMode: false,
    scrollPos: {
      first: 0,
      second: 0
    }
  }

  toggleEditor() {
    this.setState({
      activateDiffMode: !this.state.activateDiffMode,
      output: latinize(this.state.input, official)
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.diffMode !== this.props.diffMode) {
      this.setState({
        activateDiffMode: !this.state.activateDiffMode,
        output: latinize(this.state.input, official)
      })
    }
  }
  onInput(e) {
    const { value, selectionStart: cursor } = e.target,
          { output, output2, input } = this.state,
          stateSetter = {};
    if(input.length === cursor - 1) {
      stateSetter.output2 = output2 + latinize(value[cursor - 1], kazgrammer)
      stateSetter.input = e.target.value
      if(this.state.activateDiffMode) {
        stateSetter.output = output + latinize(value[cursor - 1], official)
      }
    } else {
      stateSetter.output2 = latinize(e.target.value, kazgrammer)
      stateSetter.input = e.target.value
      if(this.state.activateDiffMode) {
        stateSetter.output = latinize(e.target.value, official)
      }
    }

    this.setState(stateSetter)
  }

  render() {
    const { input, output, output2 } = this.state
    return(
      <div className='page-home'>
          <SourceEditor
            onInputTrigger={this.onInput.bind(this)}
            value={input}
            text="Кириллица"
          />
          {
            this.state.activateDiffMode && <OutputEditor
              value={output}
              text="Дәйекшелі(официалды)"
            />
          }
          <OutputEditor
              value={output2}
              text="Kazak grammer nazi"
              onComponentWillUpdate={(e) => console.log(e, this)}
          />
      </div>
    )
  }
}

export default Home

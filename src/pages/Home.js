import Component from 'inferno-component'
import { connect } from 'inferno-mobx'
import SourceEditor from '../components/SourceEditor'
import OutputEditor from '../components/OutputEditor'
import ScrollContainer from '../components/ScrollContainer'
import './Home.css'

// @connect
class Home extends Component {

  render() {
    const { store } = this.props
    return(
      <div className='page-home'>
        <ScrollContainer>
          <SourceEditor
            label="Кириллица"
          />

          {
            this.props.store.diffMode && <OutputEditor
              label="Акут(официалды)"
              value={store.diffValue}
            />
          }

          <OutputEditor
              label="Kazak grammar"
              value={store.outputValue}
          />
        </ScrollContainer>

      </div>
    )
  }
}

export default connect(['store'], Home)

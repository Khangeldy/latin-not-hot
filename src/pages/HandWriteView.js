import Component from 'inferno-component'
import { connect } from 'inferno-mobx'
import ScrollContainer from '../components/ScrollContainer'
import ScrollPane from '../components/ScrollPane'
// import { fromPromise } from 'mobx-utils'

class Test extends Component {

  componentDidMount() {

  }

  render() {
    const { store } = this.props
    return (
      <ScrollContainer>
        <ScrollPane>
          { store.diffValue }
        </ScrollPane>
        <ScrollPane>
          { store.outputValue }
        </ScrollPane>
      </ScrollContainer>
    )
  }
}

export default connect(['store'], Test)

import { linkEvent } from 'inferno'
import Component from 'inferno-component'
import { connect } from 'inferno-mobx'

function handleInput(that, e) {
  that.props.store.inputValue = e.target.value
}

class SourceEditor extends Component {

  componentDidMount() {
    this.context.registerPane(this.textArea)
  }

  componentWillUnmount() {
    this.context.unregisterPane(this.textArea)
  }

  render() {
    const { label, store } = this.props
    return (
      <div className="c-textarea">
        <textarea
          value={store.inputValue}
          onInput={linkEvent(this, handleInput)}
          rows={10}
          ref={(el) => this.textArea = el}
          >
        </textarea>
        <div>{label}</div>
      </div>
    )
  }
}

export default connect(['store'], SourceEditor)

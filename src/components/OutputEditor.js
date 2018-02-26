import Component from 'inferno-component'

class OutputEditor extends Component {
  componentDidMount() {
    this.context.registerPane(this.textArea)
  }

  componentWillUnmount() {
    this.context.unregisterPane(this.textArea)
  }

  render() {
    const { value, label } = this.props
    return (
      <div className='c-textarea'>
        <textarea
          readonly
          value={value}
          rows={10}
          ref={(el) => this.textArea = el}
          >
        </textarea>
        <div className="name-alphabet">{label}</div>
      </div>
    )

  }
}

export default OutputEditor

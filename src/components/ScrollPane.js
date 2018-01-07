import Component from 'inferno-component'

class ScrollPane extends Component {

  componentDidMount() {
    // console.log(this)
    // debugger;
    this.context.registerPane(this.el)
  }

  componentWillUnmount() {
    this.context.unregisterPane(this.el)
  }

  render() {
    return (
      <div class="scroll-child" ref={(el) => { this.el = el }}>
        {this.props.children}
      </div>
    )
  }
}

export default ScrollPane

import Component from 'inferno-component'

class ScrollContainer extends Component {

  getChildContext() {
    return {
      registerPane: this.registerPane,
      unregisterPane: this.unregisterPane
    }
  }

  panes = []

  registerPane = (node) => {
    if (!this.findPane(node)) {
      this.addEvents(node)
      this.panes.push(node)
    }
  }

  unregisterPane = (node) => {
    if (this.findPane(node)) {
      this.removeEvents(node)
      this.panes.splice(this.panes.indexOf(node), 1)
    }
  }

  addEvents = (node) => {
    node.onscroll = this.handlePaneScroll.bind(this, node)
  }

  removeEvents = (node) => {
    node.onscroll = null
  }

  findPane = node => this.panes.find(pane => pane === node)

  handlePaneScroll = (node) => {
    window.requestAnimationFrame(() => {
      // Calculate new scrollTop positions
      // for left and right panes based on
      // DOM nodes and evt.target.scrollTop
      // and set it directly on DOM nodes
      this.syncScroll(node)
    })
  }

  syncScroll(scrolledPane) {
    this.panes.forEach((pane) => {
      const offset = scrolledPane.scrollHeight - scrolledPane.clientHeight;
      if (pane !== scrolledPane) {
        this.removeEvents(pane);

        if(offset > 0) {
          pane.scrollTop = ((pane.scrollHeight - scrolledPane.clientHeight) * scrolledPane.scrollTop) / offset;
        }

        window.requestAnimationFrame(() => {
          this.addEvents(pane)
        })

      }

    })


  }

  render() {
    return (
      <div class="scroll-container">
        { this.props.children }
      </div>
    )

  }
}

export default ScrollContainer;

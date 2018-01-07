import { connect } from 'inferno-mobx'

export default connect(['store'], (props) => (
  <div>Cәлем менің атым Хангелды Илебаев.{console.log(props)}</div>
))

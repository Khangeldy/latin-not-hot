import Inferno from 'inferno'

function onUpdate(e) {
  alert(e, this)
  e.target.focus()
  e.target.blur()
}

export default ({ value, text }) => (
  <div className='c-textarea'>
    <textarea
      readonly
      value={value}
      rows={10}
      >
    </textarea>
    <div>{text}</div>
  </div>
)

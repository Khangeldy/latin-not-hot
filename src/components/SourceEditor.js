import Inferno from 'inferno'

export default ({value, onKeyDownTrigger, onInputTrigger, onScrollTrigger, text}) => (
  <div className="c-textarea">
    <textarea
      value={value}
      onKeyDown={onKeyDownTrigger}
      onInput={onInputTrigger}
      rows={10}
      onScroll={onScrollTrigger}
      >
    </textarea>
    <div>{text}</div>
  </div>
)

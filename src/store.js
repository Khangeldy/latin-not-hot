import { observable } from 'mobx'
import converter from './utils/latinize'
import kazgrammer from './utils/kazgrammer.json'
import official from './utils/official.json'

const store = observable({
  diffMode: false,
  inputValue: '',
  selectedAlphabet: 'kazgrammer',
  selectedFont: 'Kalam',
  switchFont(name) {
    this.selectedFont = name;
  },
  alphabets: {
    official,
    kazgrammer
  },
  selectCurrentAlp(alph) {
    if(this.alphabets[alph]) {
      this.selectedAlphabet = alph
    }
  },
  get outputValue() {
    return converter(this.inputValue, this.alphabets[this.selectedAlphabet])
  },
  get diffValue() {
    return converter(this.inputValue, official)
  }
})


export default store;

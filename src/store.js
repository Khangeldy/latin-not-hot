import { observable } from 'mobx'
import latinize from './utils/latinize'
import kazgrammer from './utils/kazgrammer.json'
import official from './utils/official.json'

const store = observable({
  diffMode: false,
  inputValue: '',
  selectedAlphabet: 'kazgrammer',
  alphabets: {
    official,
    kazgrammer
  },
  load: "pending",
  selectCurrentAlp(alph) {
    if(this.alphabets[alph]) {
      this.selectedAlphabet = alph
    }
  },
  get outputValue() {
    return latinize(this.inputValue, this.alphabets[this.selectedAlphabet])
  },
  get diffValue() {
    return latinize(this.inputValue, official)
  }
})


export default store;

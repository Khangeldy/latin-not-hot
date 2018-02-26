import Component from 'inferno-component'
import { connect } from 'inferno-mobx'
import ScrollContainer from '../components/ScrollContainer'
import ScrollPane from '../components/ScrollPane'
// import { fromPromise } from 'mobx-utils'

const example = `To'rtins'i - bilim-g'ylymdy ko'bei'ty'ge eki qary' bar adamnyn' is'inde: biri - mulahaza qyly', ekins'isi - berik muhafaza qyly'. Bul eki qy'atty zorai'ty' jahatinde boly' kerek. Bular zorai'mai', g'ylym zorai'mai'dy.

Besins'i - osy so'zdin' on tog'yzyns'y babynda jazylg'an aqyl keseli degen to'rt na'rse bar. Sodan qas'yq boly' kerek. Sonyn' is'inde y'ai'ymsyz salg'yrttyq degen bir na'rse bar, zi'nhar, janym, sog'an bek saq bol, a'sirese, a'y'eli - qudanyn', ekins'i - halyqtyn', u's'ins'i - da'y'lettin', to'rtins'i - g'i'brattyn', besins'i - aqyldyn', ardyn' -ba'rinin' dus'pany. Ol bar jerde bular bolmai'dy.`

const example2 = `Törtinci - bilim-gılımdı köbeytıwge eki karıw bar adamnıń icinde: biri - mulahaza kılıw, ekincisi - berik muhafaza kılıw. Bul eki kıwattı zoraytıw jahatinde bolıw kerek. Bular zoraymay, gılım zoraymaydı.

Besinci - osı sözdiń on togızıncı babında jazılgan akıl keseli degen tört närse bar. Sodan kacık bolıw kerek. Sonıń icinde ıwayımsız salgırttık degen bir närse bar, ziynhar, janım, sogan bek sak bol, äsirese, äıweli - kudanıń, ekinci - halıktıń, ücinci - däıwlettiń, törtinci - giybrattıń, besinci - akıldıń, ardıń -bäriniń ducpanı. Ol bar jerde bular bolmaydı.`

class HandWriteView extends Component {

  render() {
    const { store } = this.props
    return (
      <ScrollContainer style={{fontFamily:  store.selectedFont + ', sans-serif', height: '100%'}}>
        <ScrollPane>
          <p className="notebook" style={{paddingLeft: '25px'}}>
              { store.diffValue || example }
          </p>
        </ScrollPane>
        <ScrollPane>
          <p className="notebook reversed" style={{paddingRight: '25px'}}>
            { store.outputValue || example2 }
          </p>
        </ScrollPane>
      </ScrollContainer>
    )
  }
}

export default connect(['store'], HandWriteView)

import Component from 'inferno-component'
import { connect } from 'inferno-mobx'
import ScrollContainer from '../components/ScrollContainer'
import ScrollPane from '../components/ScrollPane'
// import { fromPromise } from 'mobx-utils'

const example = `Adam balasynyń eń jamany - talapsyz. Talap qylýshylar da neshe túrli bolady. Hám talaptyń ózi de túrli-túrli. Hám sol talaptardyń qaısysynyń sońyna tússe de, birinen biri ónerli, turlaýlyraq keledi. Ýa, lákın adam balasy ia talapty, ia talapsyz bolsyn, áıteýir «bárekeldini» kerek qylmaıtuǵyny bolmaıdy. Árneshik, orynsyz ba, oryndy ma, «bárekeldi» deýshini kóńil izdep turady. Adam balasy ózi qaı jolda, qaı maıdanda júrse, sol maıdandaǵy kisimen syrlas bolady. Onyń úshin ózge joldaǵylardan «bárekeldini» ońdy kútpeıdi. Maǵan «bárekeldi» dese, osy ózimmenen seriktes, syrlas osylar «bárekeldi» der deıdi.`

const example2 = `Adam balasınıń eń jamanı - talapsız. Talap kılıwcılar da nece türli boladı. Häm talaptıń özi de türli-türli. Häm sol talaptardıń kaysısınıń sońına tüsse de, birinen biri önerli, turlaıwlırak keledi. Uwa, läkiyn adam balası ya talaptı, ya talapsız bolsın, äytewir «bärekeldini» kerek kılmaytugını bolmaydı. Ärnecik, orınsız ba, orındı ma, «bärekeldi» deuwcini köńil izdep turadı. Adam balası özi kay jolda, kay maydanda jürse, sol maydandagı kisimen sırlas boladı. Onıń ücin özge joldagılardan «bärekeldini» ońdı kütpeydi. Magan «bärekeldi» dese, osı özimmenen seriktes, sırlas osılar «bärekeldi» der deydi.`

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

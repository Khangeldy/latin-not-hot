import Component from 'inferno-component'
// import { connect } from 'inferno-mobx'
import { characters } from '../utils/official.json'
import { withLowerCase, invert } from '../utils'

// const Captl = Object.keys(characters).filter(x => x === x.toUpperCase()).reduce((x))
const initialAlp = {}
for(const key in characters) {
  if(characters.hasOwnProperty(key) &&
  key === key.toUpperCase() &&
  !(/[ЯЭЩЧЪЬЮ]/.test(key))
  ) {
    initialAlp[key] = characters[key];
  }
}

const fontList = `"Open Sans", "lucida grande", "Segoe UI", arial, verdana, "lucida sans unicode", tahoma, sans-serif`;


class CreateNew extends Component {
  state = {
    alpha: initialAlp,
    author: 'Аноним'
  }
  createCanvas = () => {
    const canvas = document.createElement('canvas'),
          width = canvas.width = 800,
          height = canvas.height = 900,
          ctx = canvas.getContext('2d');

    ctx.fillStyle = '#ffbb00';
    ctx.fillRect(0, 0, width, height)
    ctx.font = '16px ' + fontList
    ctx.textAlign = 'center'
    const url = 'https://khangeldy.github.io/latinnothot';
    ctx.fillStyle = '#3d3dfd';
    ctx.fillText(url, width / 2, height - 40);
    const meas = ctx.measureText(url);
    ctx.fillRect(width / 2 - (meas.width * 0.5), height - 38, meas.width, 1);
    ctx.font = '20px ' + fontList
    ctx.fillStyle = 'tomato';
    ctx.textAlign = 'right'
    ctx.fillText('жасаған: ' + this.state.author, width - 30, 50)
    ctx.textAlign = 'left'
    ctx.fillText('Латын әліпби нұсқасы', 30, 50)
    // =======================

    const alpha = invert(this.state.alpha),
          keys = Object.keys(alpha),
          row = Math.ceil(keys.length / 5) + 1;

    const centerX = (width / 2 - (80 * (row / 2))),
          centerY = (height / 2 - (100 * (5 / 2))) + 40;

    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center'
    ctx.font = '36px ' + fontList
    ctx.fillText(this.convert("Қазақ әліпбиі", Object.assign({}, this.state.alpha)), width / 2, 150)

    ctx.textAlign = 'left'
    for(let i = 0; i < 5; i++) {
      for(let j = 0; j < row; j++) {
        let char = keys[i * row + j];
        if(!char) {
          continue;
        }
        ctx.fillStyle = 'lightcyan';
        ctx.font = '30px Open Sans';
        // ctx.strokeStyle = '#e75e97';
        // ctx.lineWidth = 3;
        ctx.fillText( `${withLowerCase(char)}`, j * 80 + centerX, i * 100 + centerY);
        // ctx.strokeText(`${withLowerCase(char)}`, j * 80 + 103, i * 100 + 103);
        ctx.fillStyle = '#fb6542';
        ctx.font = '16px monospace';
        ctx.fillText(`|${alpha[char].toLowerCase()}|`,  j * 80 + centerX, i * 100 + centerY + 20)
      }
    }

    // document.body.append(canvas)
    const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href=image;
  }

  convert = (string, charMaps) => {
    return string.split("")
      .map(x => charMaps[x] ? charMaps[x]: charMaps[x.toUpperCase()] ? charMaps[x.toUpperCase()].toLowerCase(): x).join("")
  }

  renderInput = (label, value) => {
    return <div style={{padding: '5px'}}>
      <label><span style={{color:'salmon'}}>{label}</span> = </label>
      <input
        value={value}
        name={label}
        style={{width: '40px', border: 'none', backgroundColor: '#fff'}}
        onInput={(e) => this.onInput(e, label)}
        onBlur={this.onBlur}
      />
    </div>
  }

  renderList = (obj) => {
    return Object.keys(obj).map((key, i) => {
      return this.renderInput(key, obj[key])
    })
  }

  onInput = (e, key) => {
    if(!e.target.value.trim()) {
      return;
    }
    const val = e.target.value.substr(0, 2).replace(/[^\u0040-\u024f']/gi, '').toUpperCase();
    this.setState({alpha: Object.assign({}, this.state.alpha, {[key]: val})})
  }

  onBlur = (e) => {
    const val = e.target.value;
    if(!val && /\w/.test(val)) {
      this.setState({
        alpha: Object.assign({}, this.state.alpha, {
          [e.target.name]: initialAlp[e.target.name]
        })
      })
    }
  }
  render() {
    return <div  style={{backgroundColor: 'rgba(255, 235, 59, 0.5)',height: '100%'}}>
      <div className="basic">
        <label>Авторы</label>
        <input className="basic" type="text" onChange={(e) => this.setState({author: e.target.value})} />
        <button onClick={this.createCanvas} className="basic">Қабылдау</button>
      </div>
      <div style={{ columnCount: 3, padding: '20px 0', maxWidth: '800px', margin: '0 auto'}}>
        {this.renderList(this.state.alpha)}
      </div>
    </div>
  }
}

export default CreateNew

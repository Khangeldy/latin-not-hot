import { connect } from 'inferno-mobx'

export default connect(['store'], (props) => (
  <div className="center about-format">
    <p>
      Біз жайлы пресса не дейді. Сұхбаттар мен мақалалар.
    </p>
    <ul className="about-links">
      <li><a target="_blank" href="https://the-steppe.com/news/razvitie/2017-04-27/latinica">the-steppe.com</a></li>
      <li><a target="_blank" href="https://www.youtube.com/watch?v=ukn-McQMbfI">Erjan Äcim(youtube)</a></li>
      <li><a target="_blank" href="https://www.youtube.com/watch?v=ukn-McQMbfI">Men Qazaq(youtube)</a></li>
      <li><a target="_blank" href="https://baribar.kz/34043/latyn-alipbiininh-qanday-nusqalary-bar/">baribar.kz</a></li>
      <li><a target="_blank" href="https://yvision.kz/post/758798">KESANTIELU DASEFERN(yvision)</a></li>
      <li><a target="_blank" href="https://www.qamshy.kz/article/til-ynstytwti-men-kazak-grammar-dinh-zhekpe-zhegi.html">Qamshy.kz</a></li>
      <li><a target="_blank" href="http://today.kz/news/kazahstan/2017-10-30/753383-kanagattandrlmagandktarzdan-kazak-grammar-razrabotali-variant-latinitsyi/">today.kz</a></li>
      <li><a target="_blank" href="http://kerekinfo.kz/2017/11/17/kazak-grammar-alpabeti.html">kerekinfo.kz</a></li>
      <li><a target="_blank" href="http://euromaidanpress.com/2017/04/18/moscow-reacts-to-kazakhstan-and-kyrgyzstan-switching-from-cyrillic-with-hysterics-euromaidan-press/">euromaidanpress.com</a></li>
      <li><a target="_blank" href="http://polandball.wikia.com/wiki/User_blog:KurwaAntics/Kazak_alphabet_(again)">polandball.wikia.com</a></li>
    </ul>
    <p>
      Егер сізге біздің жұмысым ұнаса әлеуметтік желілерде бөлісуге шақырамыз. Рақмет көп көп.
    </p>
    <ul className="social-share">
      <li>
        <a href="http://vk.com/share.php?url=https://khangeldy.github.io/latin-not-hot&title=LatinNotHot" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.344 16.163h-1.867c-1.055 0-1.232-.601-2.102-1.469-.785-.785-1.22-.183-1.202.935.006.297-.141.534-.495.534-1.105 0-2.694.156-4.304-1.58-1.647-1.779-3.374-5.348-3.374-5.699 0-.208.172-.301.459-.301h1.898c.503 0 .545.249.686.568.584 1.331 1.981 4.002 2.354 2.511.214-.856.301-2.839-.615-3.01-.52-.096.396-.652 1.722-.652.33 0 .688.035 1.054.12.673.156.676.458.666.898-.034 1.666-.235 2.786.204 3.069.419.271 1.521-1.502 2.104-2.871.159-.378.191-.632.643-.632h2.322c1.216 0-.159 1.748-1.21 3.112-.847 1.099-.802 1.12.183 2.034.701.651 1.53 1.54 1.53 2.043 0 .238-.186.39-.656.39z"/></svg>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/sharer.php?u=https://khangeldy.github.io/latin-not-hot" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
        </a>
      </li>
      <li>
        <a href="https://telegram.me/share/url?url=https://khangeldy.github.io/latin-not-hot&text=LatinNotHot" target="_blank">
          <svg width="50px" height="50px" version="1.1" viewBox="0 0 24 24" style={{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:1.41421}}><path id="telegram-5" d="M12,0c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm0,2c5.514,0 10,4.486 10,10c0,5.514 -4.486,10 -10,10c-5.514,0 -10,-4.486 -10,-10c0,-5.514 4.486,-10 10,-10Zm2.692,14.889c0.161,0.115 0.368,0.143 0.553,0.073c0.185,-0.07 0.322,-0.228 0.362,-0.42c0.435,-2.042 1.489,-7.211 1.884,-9.068c0.03,-0.14 -0.019,-0.285 -0.129,-0.379c-0.11,-0.093 -0.263,-0.12 -0.399,-0.07c-2.096,0.776 -8.553,3.198 -11.192,4.175c-0.168,0.062 -0.277,0.223 -0.271,0.4c0.006,0.177 0.125,0.33 0.296,0.381c1.184,0.354 2.738,0.847 2.738,0.847c0,0 0.725,2.193 1.104,3.308c0.047,0.139 0.157,0.25 0.301,0.287c0.145,0.038 0.298,-0.001 0.406,-0.103c0.608,-0.574 1.548,-1.461 1.548,-1.461c0,0 1.786,1.309 2.799,2.03Zm-5.505,-4.338l0.84,2.769l0.186,-1.754c0,0 3.243,-2.925 5.092,-4.593c0.055,-0.048 0.062,-0.13 0.017,-0.188c-0.045,-0.057 -0.126,-0.071 -0.188,-0.032c-2.143,1.368 -5.947,3.798 -5.947,3.798Z"/></svg>
        </a>
      </li>
      <li>
        <a href="whatsapp://send?text=https://khangeldy.github.io/latin-not-hot" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
        </a>
      </li>
    </ul>
  </div>
))

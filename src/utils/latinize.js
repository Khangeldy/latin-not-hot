// For KAZGRAMMER
const ALBABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','Y','Z','Ä','İ','Ń','Ö','Ü'];
// Дауысты
const VOWEL = ['A', 'Ä', 'Ö', 'O', 'Ü', 'U', 'E', 'I', 'İ'];
const SOFT = ['Ä', 'Ö', 'Ü', 'İ', 'E'];
const FIRM = ['A', 'O', 'U', 'I'];
// Дауыссыз
const CONSONANTS = ['B', 'V', 'G', 'D', 'J', 'Z', 'Y', 'L', 'R', 'U', 'M', 'N', 'Ń', 'K', 'H', 'P', 'F', 'S', 'T', 'C'];
const SHY = ['B', 'V', 'G', 'D', 'J', 'Z'];
const HINDI = ['Y', 'L', 'R', 'U', 'M', 'N', 'Ń'];
const SEVERE = ['K', 'H', 'P', 'F', 'S', 'T', 'C'];

export default function converter (str, alphabet) {
  const { characters, exceptions = [] } = alphabet
  // debugger;
  if (typeof str === 'string') {

    let latin = str;


    latin = latin.replace(/\S+/ig, word => {
      let w = word;
      console.log(w);
      const keys = Object.keys(exceptions);
      for (let i = 0, ii = keys.length; i < ii; i++) {
        w = w.replace(new RegExp(keys[i], 'ig'), exceptions[keys[i]]);
      }
      return w;
    })

    latin = latin.replace(/[А-Яа-яӘәІіҢңҒғҮүҰұҚқӨөҺһ]/gi, (l) => {
      return characters[l] ? characters[l]: l;
    });

    // if (alphabet.name === 'kazgrammer') {
    //   let newString;
    //   const exceptions = /[u]/i;
    //   const vowels = /[aäöoüueii]/i;
    // }


    return latin;

  }

}

// "exceptions": {
//   "^u":"uw",
//   "^U":"Uw",
//   "yya": "ya",
//   "([АаӘәЫыІіеЕоОөӨұҰүҮэЭиИ])[уУ]([АаӘәЫыІіеЕоОөӨұҰүҮэЭиИ])": "$1iw$2",
//   "^(.)[уУ]":"$1uw",
//   "^([^АаӘәЫыІіеЕоОөӨұҰүҮэЭиИ][АаӘәЫыІіеЕоОөӨұҰүҮэЭиИ])[уУ]":"$1uw"
// }


// Aa — /ɑ/: akca (ақша) 
// Bb — /b/: bilim (білім) 
// Cc — /ʃ/, [ɕ]: car (шар), cer (шер) 
// Dd — /d/: damıw (даму) 
// Ee — /e/: eńbek (еңбек) 
// Ff — /f/: formula (формула) 
// Gg — /g/, [ʁ]: gen (ген), gun (ғұн) 
// Hh — /χ/: halık (халық)
// Iı — /ɯ/: ınta (ынта) 
// Jj — /ʒ/, [ʑ]: jar (жар), jer (жер) 
// Kk — /k/, [q]: kün (күн), kun (құн) 
// Ll — /l/: layık (лайық) 
// Mm — /m/: mansap (мансап) 
// Nn — /n/: narık (нарық)
// Oo — /o/: okıw (оқу)
// Pp — /p/: payda (пайда)
// Rr — /r/: ras (рас)
// Ss — /s/: sana (сана)
// Tt — /t/: tabıs (табыс)
// Uu — /ɤ/: uyım (ұйым)
// Vv 
// Ww — /w/: wakıt (уақыт)
// Yy — /j/: yadro (ядро)
// Zz — /z/: zat (зат)
// Ää — /æ/: äsker (әскер)
// İi — /ɘ/: isker (іскер)
// Ńń — /ŋ/: oń (оң)
// Öö — /œ/: öner (өнер)
// Üü — /y/: üyren (үйрен)
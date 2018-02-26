export default function converter (str, alphabet) {
  const { characters, exceptions } = alphabet
  // debugger;
  if (typeof str === 'string') {

    return str.replace(/\S+/g, function(x) {

      if(!(/[А-Яа-яӘәІіҢңҒғҮүҰұҚқӨөҺһ]/i.test(x))) {
        return x;
      }
      let word = x;

      Object.keys(exceptions).forEach((key) => {
        // debugger;
        word = word.replace(new RegExp(key), exceptions[key])
      })

      return word.replace(/[А-Яа-яӘәІіҢңҒғҮүҰұҚқӨөҺһ]/gi, (l) => {
        console.log(characters)
        return characters[l] ? characters[l]: l;
      })
    })

    // return result.replace(/[^A-Za-z0-9]/g, function(x) {
    //     return characters[x] ? characters[x] : x;
    // })

  }

}

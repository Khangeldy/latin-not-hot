export default function converter (str, alphabet) {
  const { characters } = alphabet
  if (typeof str === 'string') {
    return str.replace(/[^A-Za-z0-9]/g, function(x) {
      return characters[x] ? characters[x] : x;
    });
  } else {
    return str;
  }
}

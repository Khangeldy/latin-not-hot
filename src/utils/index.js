export function getPercent( t, sh ) {
  return t * 100 / sh
}

export function withLowerCase(s) {
  if(!s) {
    return;
  }
  if(s.length > 1) {
    return s.split('/').map(x => x + x.toLowerCase()).join('/');
  }
  return s + s.toLowerCase()
}

export function invert(obj) {
  if(!obj) return;
  console.log(obj);
  const result = []
  Object.keys(obj).forEach((k) => {
    if(result[obj[k]]) {
      result[obj[k]] = result[obj[k]] + '/' + k
    } else {
      result[obj[k]] = k;
    }
  })
  console.log(result);
  return result;
}

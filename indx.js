let string = 'air hunjan di taman'

function filterHurufVokal(str) {
  let a, i, u, e, o;
  let hasil = 0
  if (str.split('').includes('a')) {
    a = 1
  } else {
    a = 0
  }
  if (str.split('').includes('i')) {
    i = 1
  } else {
    i = 0
  }
  if (str.split('').includes('u')) {
    u = 1
  } else {
    u = 0
  }
  if (str.split('').includes('e')) {
    e = 1
  } else {
    e = 0
  }
  if (str.split('').includes('o')) {
    o = 1
  } else {
    o = 0
  }
  hasil = a + i + u + e + o
  return `a:${a}, i:${i}, u:${u}, e:${e}, o:${o} = ${hasil}`

}
function getCount(str) {
  let j = str.toLowerCase().toString().split('')
  let a = j.filter(val => val == 'a')
  let i = j.filter(val => val == 'i')
  let u = j.filter(val => val == 'u')
  let e = j.filter(val => val == 'e')
  let o = j.filter(val => val == 'o')
  return (a.length + i.length + u.length + e.length + o.length)
}


function disemvowel(str) {
  return str.replace(/[aiueo]/ig, (m, i) => i = '')
}
let stringgg = 'This website is for losers LOL!'
console.log(disemvowel(stringgg))


console.log(getCount(string))
console.log(filterHurufVokal(string))
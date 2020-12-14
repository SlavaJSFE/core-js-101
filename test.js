// const obj = [
//   { country: 'Russia', city: 'Moscow' },
//   { country: 'Belarus', city: 'Minsk' },
//   { country: 'Poland', city: 'Warsaw' },
//   { country: 'Russia', city: 'Saint Petersburg' },
//   { country: 'Poland', city: 'Krakow' },
//   { country: 'Belarus', city: 'Brest' }
// ]
// const m1 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
// const m2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const m3 = [[1, 2, 3]];
// const m4 = [[4], [5], [6]];
const str = '{[(<{[]}>)]}'
// const str2 = str.replace(/\{\}|\(\)|\[\]/, '')
if (str.match(/\{\}|\(\)|\[\]/)) {
  const str2 = str.replace(/\{\}|\(\)|\[\]/, '')
  console.log(str2)
}

// console.log(obj.flat().sort())

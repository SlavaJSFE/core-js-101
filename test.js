// const m1 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
// const m2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const m3 = [[1, 2, 3]];
// const m4 = [[4], [5], [6]];

// const arr = [
//   { country: 'Belarus', city: 'Brest' },
//   { country: 'Russia', city: 'Omsk' },
//   { country: 'Russia', city: 'Samara' },
//   { country: 'Belarus', city: 'Grodno' },
//   { country: 'Belarus', city: 'Minsk' },
//   { country: 'Poland', city: 'Lodz' },
// ]
// const map = new Map()
// map.set(['country'], ['Belarus'])
const arr = ['/web/images/image1.png', '/web/images/image2.png']
const arr2 = arr.map((elem) => elem.split(''))

const res = arr2[0].filter((elem, ind) => {
  if (arr.length === 2) {
    return elem === arr[1][ind];
  }
  return elem;
})
console.log(res)

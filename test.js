// function getAngleBetweenVectors(x1, y1, x2, y2) {
//   const multiply = (Math.sqrt((x1 ** 2) + (x2 ** 2)) * Math.sqrt((y1 ** 2) + (y2 ** 2)));
//   const res = Math.cos(((x1 * y1) + (x2 * y2)) / multiply);
//   console.log(Math.acos(res), res)
// }
// getAngleBetweenVectors(1, 0, 0, 1);

const str = new Date(2000,1,1,10,0,0)
const time = new Date(2000,1,1,10,0,0,250)
console.log(time.getMilliseconds() - str.getMilliseconds())

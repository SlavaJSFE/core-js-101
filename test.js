const param = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const ttt = param.map((elem, ind) => {
  const array = new Array(ind + 1).fill(elem);
  return array.flat();
});
console.log(ttt);

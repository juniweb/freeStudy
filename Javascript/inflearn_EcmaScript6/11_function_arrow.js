let newArr = [1,2,3,4,5].map(function (value) {
  return value * 2;
});

console.log('[General Function]');
console.log(newArr);

let newArr2 = [1,2,3,4,5].map((val) => val * 2);

console.log('[Arrow Function]');
console.log(newArr2);

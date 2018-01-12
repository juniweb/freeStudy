var data = [1, 2, undefined, NaN, null, ''];

console.log('[forEach]');

data.forEach(function (value) {
  console.log('value is ', value);
});

console.log('-------------------------------------');
console.log('[for in]');

Array.prototype.getIndex = function () {};

for (let idx in data) {
  console.log(data[idx]);
}

console.log('-------------------------------------');
console.log('[for of]');

for (let value of data) {
  console.log(value);
}

console.log('-------------------------------------');
console.log('[for of - string]');

var str = 'hello world!!!';
for (let value of str) {
  console.log(value);
}
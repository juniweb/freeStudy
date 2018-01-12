// Set : 중복없이 유일한 값을 저장하려고 할 때. 이미 존재 하는지 체크할 때 유용
let mySet = new Set();
// console.log(toString.call(mySet));

mySet.add('huimori');
mySet.add('juniweb');
mySet.add('huimori');

console.log('huimori has: ', mySet.has('huimori'));

mySet.forEach(function (value) {
  console.log(value);
});

console.log('[Set delete]');
mySet.delete('huimori');

mySet.forEach(function (value) {
  console.log(value);
});

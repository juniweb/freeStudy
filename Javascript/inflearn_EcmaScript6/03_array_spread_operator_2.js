// spread operator, 펼침 연산자

console.log('[배열 중간에 데이터 삽입]');
let pre = [100, 200, 'hello', null];
let newData = [0, 1, 2, 3, ...pre, 4];

console.log(newData);

console.log('-------------------------------------');
console.log('[활용 예제 - function 에 배열 Parameter]');

function sum(a, b, c) {
  return a+b+c;
}

let arr = [100, 200, 300];

console.log('1.ES5 방법 - apply 의 argument 배열 활용');
console.log(sum.apply(null, arr));

console.log('2.ES6 방법 - spread operator 활용');
console.log(sum(...arr));
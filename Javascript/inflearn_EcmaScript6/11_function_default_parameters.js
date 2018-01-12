function sum(value, size) {
  return value * size;
}

console.log(sum(3, 10));

console.log('[두번째 Parameter 가 없는 경우, NaN]');
console.log(sum(3));

// ------------------------------------------------

function sum2(value, size=1) {
  return value * size;
}

console.log('[Default Parameter 사용한 경우]');
console.log(sum2(3));

// ------------------------------------------------

function sum3(value, size={value:10}) {
  return value * size.value;
}

console.log('[Default Parameter - Object 형태 사용한 경우]');
console.log(sum3(3));
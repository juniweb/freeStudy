// ES6 from method

function addMark() {
  let newData = [];

  for (let i = 0; i < arguments.length; i++) {
    newData.push(arguments[i] + '!');
  }

  console.log(newData);
}

addMark(1,2,3,4,5);

console.log('[from 사용 - 유사 배열 혹은 반복 가능한 객체를 Array 인스턴스 생성]');
function addMarkFrom() {
  let newArray = Array.from(arguments);
  let newData = newArray.map(function (value) {
    return value + '!';
  });

  console.log(newData);
}

addMarkFrom(1,2,3,4,5);
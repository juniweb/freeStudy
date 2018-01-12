// Destructuring. 
// 비구조화 할당 - 배열의 값이나 객체의 속성을 별개의 변수로 추출할 수 있게 하는 자바스크립트 식(expression)

let data = ['huimori', 'juniweb', 'jinny'];
let [myName,,youName] = data;
console.log(myName, youName);

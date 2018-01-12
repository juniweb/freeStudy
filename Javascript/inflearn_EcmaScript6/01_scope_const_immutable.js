function home() {
  const list = ['apple', 'orange', 'watermelon'];
  // const 를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.
  list.push('banana'); 

  console.log(list);   
}

home();

// immutable array 를 어떻게 만들지?
const list = ['apple', 'orange', 'watermelon'];
const list2 = [].concat(list, 'banana');

console.log(list, list2);
console.log(list === list2);

let obj = {
  name : 'huimori',
  address : 'korea',
  age : 33
};

let {name, age} = obj;
console.log('name:', name, ' / age :', age);

let {name:myName, age:myAge} = obj;
console.log('myName:', myName, ' / myAge :', myAge);

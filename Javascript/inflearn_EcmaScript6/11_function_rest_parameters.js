function checkNum() {
  const argArray = Array.prototype.slice.call(arguments);
  console.log(toString.call(argArray));

  const check = argArray.every((v) => typeof v === 'number');
  console.log(check);
}

const result1 = checkNum(1,2,3,4,5,'55');

// ------------------------------------------------

function checkNum2(...argArray) {
  console.log(toString.call(argArray));

  const check = argArray.every((v) => typeof v === 'number');
  console.log(check);
}

const result2 = checkNum(1,2,3,4,5,'55');
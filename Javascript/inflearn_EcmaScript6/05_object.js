function getObj() {
  const name = 'huimori';

  const getName = function () {
    return name;
  };

  const setName = function (newName) {
    name = newName;
  };

  const printName = function () {
    console.log(name);
  };

  return {
    getName,
    setName,
    name
  };
}

let obj = getObj();
console.log(obj);
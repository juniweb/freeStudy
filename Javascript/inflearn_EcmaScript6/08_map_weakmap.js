window.onload = function () {
  // map & WeakMap
  // Array -> set, WeakSet
  // Object -> map, WeakMap

  let wm = new WeakMap();
  let myFun = function () {};

  // 이 함수가 얼마나 실행되었는지? 알려고 할 때

  wm.set(myFun,0);

  for(let i=0; i<10; i++){
    count = wm.get(myFun);  // get value
    count++;
    wm.set(myFun, count);
  }

  console.log(wm.get(myFun));

  myFun = null;
  console.log(wm.get(myFun));
  console.log(wm.has(myFun));

};
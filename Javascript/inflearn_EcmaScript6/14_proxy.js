const myObj = {name: 'huimori', changedValue: 0};

const proxy = new Proxy(myObj, {
  get: function (target, property, receiver) {
    console.log('get call..');
    return target[property];
  },
  set: function (target, property, value) {
    console.log('set call..');
    target['changedValue']++;
    target[property] = value;
  }
});

console.log(proxy.name);
proxy.name = 'juniweb';
console.log(proxy.name);
console.log(proxy.changedValue);
proxy.name = 'test';
console.log(proxy.changedValue);
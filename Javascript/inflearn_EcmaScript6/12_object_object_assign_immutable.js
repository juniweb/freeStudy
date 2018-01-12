const previousObj = {
  name : 'juniweb',
  lastTime : '12:20'    
};

const myHealth = Object.assign({}, previousObj, {
  lastTime : '13:30',
  name : 'huimori',
  age : 33
});

console.log(myHealth);
const healthObj = {
  showHealth : function () {
    console.log('오늘 운동시간 : ' + this.healthTime);
  }
};

const myHealth = Object.create(healthObj);

myHealth.healthTime = '11:20';
myHealth.name = 'huimori';

console.log('[Object.create]');
console.log(myHealth);

const myHealthAssign = Object.assign(Object.create(healthObj), {
  healthTime : '12:20',
  name : 'juniweb'
});

console.log('[Object.assign]');
console.log(myHealthAssign);
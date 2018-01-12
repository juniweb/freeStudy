const healthObj = {
  showHealth : function () {
    console.log('오늘 운동시간 : ' + this.healthTime);
  },
  setHealth : function (newTime) {
    this.healthTime = newTime;
  }
};

const myHealth = {
  healthTime : '12:20',
  name : 'juniweb'
};

Object.setPrototypeOf(myHealth, healthObj);

console.log(myHealth);
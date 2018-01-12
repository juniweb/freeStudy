// parent
const healthObj = {
  showHealth : function () {
    console.log('오늘 운동시간 : ' + this.healthTime);
  },
  setHealth : function (newTime) {
    this.healthTime = newTime;
  }
};

// child
const healthChildObj = {
  getAge : function () {
    return this.age;
  }
};

const lastHealthObj = Object.setPrototypeOf(healthChildObj, healthObj);

const childObj = Object.setPrototypeOf({
  age : 22
}, healthChildObj);

console.log(childObj);

childObj.setHealth('11:55');
childObj.showHealth();

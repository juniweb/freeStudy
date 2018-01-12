
// ES5 
function Health(name) {
  this.name = name;
}

Health.prototype.showHealth = function () {
  console.log(this.name + '님 안녕하세요');
};

const h = new Health('huimori');
h.showHealth();

// ES6
class Health2 {
  constructor(name, lastTime) {
    this.name = name;
    this.lastTime = lastTime;
  }

  showHealth () {
    console.log('안녕하세요! ' + this.name);
  }
} 

const h2 = new Health2('juniweb');
h2.showHealth();

console.log(toString.call(Health2));
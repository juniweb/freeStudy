// WeakMap 활용

function Area(height, width) {
  this.height = height;
  this.width = width;
}

Area.prototype.getArea = function () {
  return this.height * this.width;
};

let myarea = new Area(10, 20);
console.log('[변수에 직접 접근]');
console.log(myarea.getArea());
console.log(myarea.height);


const wm = new WeakMap();

function Area2(height, width) {
  wm.set(this, {height, width});
}

Area2.prototype.getArea = function () {
  const {height, width} = wm.get(this);
  return height * width;
};

let myarea2 = new Area2(10, 20);
console.log('[변수에 직접 접근 불가]');
console.log(myarea2.getArea());
console.log(myarea2.height);

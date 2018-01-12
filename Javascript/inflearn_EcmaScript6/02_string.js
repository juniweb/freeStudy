// ES2015 string 에 새로운 메소드들

let str = 'hello world! ~~';
let startMatchstr = 'hello';
let endMatchstr = ' ~~';

console.log('start Match : ', str.startsWith(startMatchstr));
console.log('end Match : ', str.endsWith(endMatchstr));
console.log('include test : ', str.includes('^'));

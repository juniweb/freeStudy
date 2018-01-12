import './common.css';
import hello from './hello';
import world from './world';
import codeSqurad from './codeSqurad';

document.write(`${hello}, ${world}!`);

const cs = new codeSqurad();

console.log(`getLectures : ${cs.getLectures()}`);
console.log(`getCurrentHour : ${cs.getCurrentHour()}`);
console.log(`getTime : ${cs.getTime()}`);
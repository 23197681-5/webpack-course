// let name = "Willian";
// console.log(name);
import pi from './modules/singleDefautExports/pi'
import api from './modules/singleDefautExports/api'
import Person from './modules/singleDefautExports/person'

console.log(pi);
console.log(api("Ana"));

var person = new Person();
person.toString();
//console.log();

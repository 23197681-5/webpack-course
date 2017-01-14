// let name = "Willian";
// console.log(name);
import pi from './modules/singleDefautExports/pi'
import api from './modules/singleDefautExports/api'
import Person from './modules/singleDefautExports/person'

import * as Math from './modules/multipleNamedExports/math'

console.log(pi);
console.log(api("Ana"));

var person = new Person();
person.toString();
//console.log();

console.log("---------------");
console.log(Math.cube(53));

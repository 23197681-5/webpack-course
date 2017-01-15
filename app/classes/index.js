import {log, logTitle} from '../WindowLogger';
import Person from './Person';
export default () => {

logTitle('Classes');
const person = new Person('Anna', 52);
person.toString();
const name = person.getName();
log(name);
const age = person.getAge();
log(age);
}

import {log, logTitle} from '../WindowLogger';
import Person from './Person';
import Dog from './dog';
export default () => {

logTitle('Classes');
Person.getObjectType();
const myname = Person.upperCasePersonName("Willian");
log(myname);
const person = new Person('Anna', 52);
person.toString();
const name = person.getName();
log(name);
const age = person.getAge();
log(age);
const dog = new Dog('Rex Acreano','Whoof whoof au au');
dog.displayBarkSound();
}

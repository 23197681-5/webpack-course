import pi from './pi';
import add from './math';
import Person from './person';
import {log, logTittle} from '../../WindowLogger';

export default function(){
  logTittle('SingleDefaultsExports');
  log(pi);
  log(add(10, 90));
  var person = new Person();
   log(person.getName());
}

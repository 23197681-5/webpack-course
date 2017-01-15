import pi from './pi';
import add from './math';
import Person from './person';
import {log, logTitle} from '../../WindowLogger';

export default function(){
  logTitle('SingleDefaultsExports');
  log(pi);
  log(add(10, 90));
  var person = new Person();
   log(person.getName());
}

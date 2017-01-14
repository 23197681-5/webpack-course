import pi from './pi'
import api from './api'
import Person from './person'
import {log, logTittle} from '../WindowLogger'

export default function(){
  logTittle('SingleDefaultsExports');
  log(pi);
  log(api("Ana"));
  var person = new Person();
  person.toString();
  //console.log();
}

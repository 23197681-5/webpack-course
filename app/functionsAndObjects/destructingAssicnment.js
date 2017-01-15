
import {log, logTittle} from '../WindowLogger'
//import {cube, pi as pai}


export default function(){
  logTittle('Destructirg Assicment');
const numbers = [5, 5, 2];
//... for an array
const [first, , th] = numbers;
log(first);
//log(second);
log(th);
}

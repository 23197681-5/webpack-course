
import {log, logTittle} from '../WindowLogger'
//import {cube, pi as pai}


export default function(){
  logTittle('Destructirg Assicment');

const numbers = [5, 5, 2];
//... for an array
const [first, , th] = numbers;
const response = {
    statuscode : 200;
    data : {
      person : {
        name : "Manuel";
        address : {
          city : 'London';
          coutry : 'England';
        }
            }
    }
}

log(first);
//log(second);
log(th);

const {statuscode} = response;
log(statuscode);



}

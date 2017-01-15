
import * as Math from './math'
import {log, logTittle} from '..././WindowLogger'
//import {cube, pi as pai}


export default function(){
  logTittle('multipleNamedExports');
  log(Math.cube(53));
  log(Math.pi);
}

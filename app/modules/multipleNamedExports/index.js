
import * as Math from './math'
import {log, logTitle} from '../../WindowLogger';
//import {cube, pi as pai}


export default function(){
  logTitle('multipleNamedExports');
  log(Math.cube(53));
  log(Math.pi);
}

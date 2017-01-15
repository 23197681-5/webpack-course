// let name = "Willian";
// console.log(name);
import singleDefaultExports from  './modules/singleDefaultExports/index'
import letit from  './newSyntax/let';
import literal from  './newSyntax/literal';

import spread from  './newSyntax/arrow-functions';
import spread from  './newSyntax/spread';
import multipleNamedExports from  './modules/multipleNamedExports/index'
function modules(){
  multipleNamedExports();
  singleDefaultExports();
}
function newSyntax(){
  //letit();
  
}

//modules();
newSyntax();

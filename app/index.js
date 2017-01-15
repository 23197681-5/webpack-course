// let name = "Willian";
// console.log(name);
import singleDefaultExports from  './modules/singleDefaultExports/index'
import letit from  './newSyntax/let';
import multipleNamedExports from  './modules/multipleNamedExports/index'
function modules(){
  multipleNamedExports();
  singleDefaultExports();
}
function newSyntax(){
  letit();
}

//modules();
newSyntax();

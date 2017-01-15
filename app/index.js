import singleDefaultExports from './modules/singleDefaultExports/index';
import multipleNamedExports from './modules/multipleNamedExports/index';

import theLetKeyword from './newSyntax/let';
import constant from './newSyntax/const';
import templatLiteral from './newSyntax/literal';
import spread from './newSyntax/spread';
import arrowFunctions from './newSyntax/arrow-functions';

import enhancedObjectProperties from './functionsAndObjects/enhancedObjectProperties';
import destructuringAssignment from './functionsAndObjects/destructuringAssignment';
import defaultParameters from './functionsAndObjects/defaultParameters';
import thisKeyword from './functionsAndObjects/thisKeyword';

import creatingPromises from './promises/promises';
import promisesAll from './promises/promisesAll';
import jokes from './promises/jokes';

const modules = () => {
  singleDefaultExports();
  multipleNamedExports();
}

const newSyntax = () => {
  theLetKeyword();
  templateLiteral();
  spread();
  arrowFunctions();
}

const functionsAndObjects = () => {
  enhancedObjectProperties();
  destructuringAssignment();
  defaultParameters();
  thisKeyword();
}

const promises = () => {
  // creatingPromises();
  //promisesAll();
  jokes();

}

//modules();
//newSyntax();
//functionsAndObjects();
promises();

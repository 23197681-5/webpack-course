import singleDefaultExports from './modules/singleDefaultExports/index';
import multipleNamedExports from './modules/multipleNamedExports/index';

import theLetKeyword from './newSyntax/let';
import constant from './newSyntax/const';
import templatLiteral from './newSyntax/literal';
import spread from './newSyntax/spread';
import arrowFunctions from './newSyntax/arrow-functions';

import enhancedObjectProperties from './functionsAndObjects/enhancedObjectProperties';
import destructuringAssignment from './functionsAndObjects/destructuringAssignment';

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

modules();
newSyntax();
functionsAndObjects();

/**
 * Exercise 4!
 * Default Shorthand exporting
 *
 *
 * Exercise 3 went into detail about default exports.
 *
 * Reiterating the syntax:
 *
 * export default <expression>;
 *
 * A usual pattern with AMD modules is to return back an object literal
 * with multiple methods, constants, and/or variables.
 *
 * Example:
 *
 * //**** module exampleA.js ****
 *  //pretend getGroups, getUsers, getThreads are functions
 *
 *  export default {
 *    getGroups: getGroups,
 *    getUsers: getUsers,
 *    getThreads: getThreads
 *  };
 *
 * With ES2015, if the value and key of the object literal have the same name,
 * we can then use a shorthand notation and drop the ":" and value variable.
 *
 * Our previous example becomes:
 *
 * //**** module exampleA.js ****
 *  //pretend getGroups, getUsers, getThreads are functions
 *
 *  export default {
 *    getGroups,
 *    getUsers,
 *    getThreads
 *  };
 *
 * Task:
 *  1) We are going to write a module that contains three functions to manipulate over an array.
 *    a) Map function
 *    b) Flatten function
 *    c) every function
 *  2) Get the code below working.
 *
 * Expected Results:
 *  map([1,2,3], function(x){ return x + 2; }); ---> [3,4,5]
 *  flatten([[1],[2],[3]]) ---> [1,2,3]
 *  every([0,1,2,3,4], function(x) { return x > 0;}); ---> false (because 0 is NOT > 0)
 */

import hof from './higherOrderFunctions';
import fillInBox from './fillInBox';

const arrOfNumbers = [[1], [2], [3], [4], [5]];
const map = hof.map;
const flatten = hof.flatten;
const every = hof.every;

const results = map(flatten(arrOfNumbers), x => x + 10);

if (every(results, x => x !== 0)) {
  fillInBox();
}

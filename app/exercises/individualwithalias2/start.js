/**
 * Exercise 8!
 * import / export w/ alias pt. 2
 *
 * Only a few more to go :)
 *
 * As working with ES2015 modules, there might be cases where we want to export / import
 * all of the items. What currently is shown, only way to do this is by "default" keyword.
 *
 * Unfortunately, using the default keyword removes the cherry picking flexibility. Instead,
 * there is a better way. We can use * import's with alias.
 *
 * Syntax:
 *  import * as <name> from '<path>';
 *
 *
 * In this example, we have 3 modules (hof, main, main2). main.js imports the whole module,
 * whereas main2 only imports "select" from hof module.
 *
 * Example:
 *   //***** hof.js ****
 *   function map() {}
 *   function filter() {}
 *   function every() {}
 *   function reduce() {}
 *   function flatten() {}
 *
 *   export {
 *            map, map as collect,
 *            filter, filter as select,
 *            every, every as all,
 *            reduce, reduce as inject
 *            flatten
 *          }
 *
 *
 *   //******* main.js *******
 *   import * as hof from './hof';
 *
 *   console.log(hof.map([1,2,3], x => x + 2)); //3,4,5
 *
 *
 *   //******* main2.js ********
 *   import { select } from './hof';
 *
 *   console.log(hof.select([1,2,3,4], x => x !== 3)); //1,2,4
 *
 *
 * Task:
 *  Write a module that interprets rational numbers.
 *  1) the module will have 4 methods.
 *     - create (accepts 1 or 2 numbers)
 *     - add    (accepts 2 rational numbers)
 *     - subtract (accepts 2 rational numbers)
 *     - toString (accepts 1 rational number)
 *
 *  2) import the rational module to fix the code below.
 */

import ____ from './rational';

var num1 = Rational.create(1, 2);
var num2 = Rational.create(4, 5);

try {
  Rational.create(12, 0);
  console.error("didn't implement divide by zero!!");
}
catch (e) { console.log('cannot divide by zero'); }

var newNum1 = Rational.add(num1, num2);
var newNum2 = Rational.subtract(num1, num2);

console.log('num1:', Rational.toString(num1));
console.log('num2:', Rational.toString(num2));
console.log('newNum1:', Rational.toString(newNum1));
console.log('newNum2:', Rational.toString(newNum2));

if (Rational.toString(newNum1) === '13/10' &&
    Rational.toString(newNum2) === '-3/10') {

  colorInBox($('.eight'));

   }

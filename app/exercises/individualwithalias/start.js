/**
 *
 * Exercise 7!
 * individual imports / exports with alias
 *
 * ES2015 modules provides a way to export items, also gives a way to alias the exported
 * items.  This is great for utility libraries (e.g. underscore, lodash),
 * where multiple methods have different names but the same functionality.
 *
 * Syntax:
 * export { name as otherName }
 *
 * name: the expression written above the export statement.
 * as: keyword indicating aliasing.
 * otherName: the name used by the import.
 *
 * Example:
 *  //***** undy.js *****
 *  function filter(arr, cb) {
 *   //code to filter array
 *  }
 *
 *  export {
 *    filter,
 *    filter as select
 *  }
 *
 *  //***** main.js *****
 *  import { select } from './undy';
 *  const result = select([1,2,3], x => x > 2);
 *
 *
 *  In a previous exercise, it was mentioned that 'default' is a actually shorthand for
 *  { <name> as default }.
 *
 *  The module parser, in this instance webpack, converts any default import / export,
 *  to the blown out version. When coding in practice, please always use the 'default' shorthand.
 *
 *  i.e.
 *   export default <expression>;
 *
 * Task:
 * Back in default with shorthand exercise, we implemented a higher order function module.
 * 1) Copy that module into folder.
 * 2) Instead of using default export, convert it to use named individual exports.
 * 3) Using alias, make the code below work.
 *
 */

import { collect, concat, all } from './higherOrderFunctions';
import $ from 'jquery';
import colorInBox from '../colorInBox';

const arrOfNumbers = [1,2,3,4,5];

const r1 = all( collect([1, 2, 3], x => 3), x => x === 3);
const r2 = all([0, 1, 2, 3, 4], x => x > 0) === false;
const r3 = concat([1],[2,3]).length === 3;

const results = collect(concat(arrOfNumbers, [6]), x => x + 10);

if ( r1 && r2 && r3 && all(results, x => x !== 0) ) {
  colorInBox($('.seven'));
}

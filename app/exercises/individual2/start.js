/**
 *
 * Exercise 6!
 * Named individual imports and exports pt. 2
 *
 * Previous exercise went over exporting multiple items by using 'export' keyword.
 * These items are called named exports.
 *
 * The syntax of exporting individual items might be a bit jarring and different
 * from commonjs / AMD modules. In light of this, there is another way to export individual
 * items and reap all of the benefits.
 *
 * Syntax:
 * export { name, name2, name3, name4, ... };
 *
 *
 *
 * Example:
 * // **** lib.js *****
 *  const pow = Math.pow;
 *
 *  function square(x) {
 *    return pow(x, 2);
 *  }
 *
 *  function cube(x) {
 *    return pow(x, 3);
 *  }
 *
 *  export { square };
 *
 *
 * // **** main.js ****
 * import { square } from './lib';
 * console.log(square(4)); // 16
 *
 *
 * Task:
 * 1) Convert lib.js to export everything at the end of the module.
 * 2) Implement and export an abs function to fix the code issue below.
 */

import ___ from './lib';
import colorInBox from '../colorInBox';
import $ from 'jquery';

if (abs(-13.5) === 13.5) {
  colorInBox($('.six'));
}

/**
 *
 * Exercise 5!
 * Named individual imports / exports
 *
 * A module can export multiple things by prefixing its declaration with the keyword
 * 'export'. These exports are interpreted by their name hence being called "named exports".
 *
 * The benefit of named exports is that we can cherry pick which expressions to use instead of AMD modules
 * that exports all items.
 *
 *
 * Example:
 *  // **** lib.js *****
 *  export const pow = Math.pow;
 *
 *  export function square(x) {
 *    return pow(x, 2);
 *  }
 *
 *  export function cube(x) {
 *    return pow(x, 3);
 *  }
 *
 *  // **** main.js *****
 *  import {square, cube} from './lib';
 *
 *  console.log(square(4)); //16
 *  console.log(cube(3)); //27
 *
 *  Task:
 *  1) Export a function sqrt in lib.js.
 *  2) import the sqrt function here to fix the code issue and color in the box.
 */

import ___ from './lib';
import colorInBox from '../colorInBox';
import $ from 'jquery';

if (sqrt(169) === 13) {
  colorInBox($('.five'));
}

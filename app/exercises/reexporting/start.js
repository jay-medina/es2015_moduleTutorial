/**
 *
 * Exercise 9!
 *
 * Re-exporting modules!
 *
 * There can be a use case where we want to have a single module that contains
 * everything.  This is great for refactoring large modules into smaller chunks.
 *
 * Note: when exporting from a different module, "default" exports are ignored.
 * Also, be careful about using * export. If two methods contain the same name, it will produce
 * an error, 'typeerror: cannot redefine property'. In this case, you would have to use an individual
 * named export and give it an alias. See example syntax below.
 *
 *
 * Syntax:
 *
 *  export * from <path>;
 *  export { name as otherName } from <path>;
 *
 * Example:
 *
 * //**** User.js *****
 *  function fetchUsers() {}
 *  function isAUser() {}
 *  function isAnExternalUser() {}
 *
 * //**** Group.js *****
 *  function fetchGroups() {}
 *  function isAMemberOfGroup() {}
 *
 * //**** Thread.js *****
 *  function threadMembers() {}
 *  function threadsInGroup() {}
 *
 * //***** all.js *****
 *  export * from './user';
 *  export * from './group';
 *  export * from './thread';
 *
 * //***** main.js ******
 *  import * as all from './all';
 *
 *  console.log(all.isAUser({}));
 *
 * Task:
 *  1) Implement three modules with a printX method. X being associated with module. (i.e. printShape).
 *     PrintX is just a simple method that returns the name of the shape.
 *    - Shapes
 *    - Colors
 *    - Numbers
 *
 *  2) implement a paint module that exports shape, color and number.
 *  3) get the code working below.
 */
import * as Paint from './paint';
import $ from 'jquery';
import colorInBox from '../colorInBox';

const shape = Paint.printShape();
const color = Paint.printColor();
const number = Paint.printNumber();

if (shape === 'shape' && color === 'color' && number === 'number') {
  colorInBox($('.nine'));
}

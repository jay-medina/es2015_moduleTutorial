/**
 * Exercise 10!
 *
 * Welcome to the final exercise! Congratulations on making it this far.
 *
 * The last use case we need to cover is importing es2015 modules into existing AMD modules.
 *
 * Let's look at the two export examples: named exports and default.
 *
 * 1) Named Exports. The benefit of importing named exports is that nothing changes!
 *   We lose the flexibility of cherry picking but using these imports should be the same as old.
 *
 * 2) Default Exports. This is very similar to named exports EXCEPT all modules are stored within
 *    a key named 'default'.
 *
 *    We have to use a slightly modified syntax.
 *
 *    var <moduleName> = require(<pathname>).default;
 *
 * You might be wondering. "Why haven't we gone over importing amd into es2015?"
 * Reasoning is because you have already tackled this task.
 *
 * Every exercise imports colorInBox module which is an AMD module!
 * To import AMD modules just use the default import syntax.
 *
 *  import <name> from '<path name>';
 *
 * Task:
 * Fix the code below so that it colors in the tenth box.
 */

define(function (require) {
  var defaultModule = require(___);
  var namedModule = require(___);
  var colorInBox = require(___);

  if (defaultModule.shape() === 'triangle' && namedModule.three() === 'three') {
    colorInBox($('.ten'));
  }

});

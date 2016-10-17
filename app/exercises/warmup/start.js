/**
 * Welcome to the module tutorial.  To start off, lets do a warm up exercise.
 * Create an AMD modules in order to get this code working.
 * Please fix the code to get it working.
 */
define(function (require) {
  var funnyMath = require('./funnyMath');

  if (funnyMath.add(2, 3) === 5) {
    colorInBox('one');
  }
});
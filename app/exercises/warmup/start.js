/**
 * To start off, lets do a warm up exercise.
 * 1) Create an AMD module in order to get funnyMath working.
 * 2) Please import colorInBox module.
 */

define(function (require) {
  var funnyMath = require('./funnyMath');

  if (funnyMath.add(2, 3) === 5) {
    colorInBox($('.one'));
  }
});
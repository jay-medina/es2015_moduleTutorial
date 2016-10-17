define(function (require) {
  var $ = require('jquery');

  return function colorInBox(boxNumber) {
    $(`.${boxNumber}`).addClass('complete');
  };


});

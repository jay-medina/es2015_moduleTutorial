import $ from 'jquery';

export function run($app) {

  var $complete = $('<div class="allcomplete"></div>');
  $complete.html('Complete!!! ');

  $app.append($complete);

  const exercises = ['one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight',
  'nine', 'ten'];


  const intervalInstance = setInterval(function () {
  const allComplete = exercises.every(exercise => $(`.${exercise}`).hasClass('complete'));

  if (allComplete) {
    $complete.addClass('show');
    clearInterval(intervalInstance);
  }
  }, 1000);

}




import $ from 'jquery';

const views = [
  'warm up - one.js',
  'import 3rd party - two.js',
  'export/import default - three.js',
  'export/import default shorthand - four.js',
  'export/import individual - five.js',
  'amd to es6 - six.js',
  'es6 to amd - seven.js',
  'final - eight.js'
];

function createView(text) {
  return $('<div class="lesson_incomplete" />').text(text);
}

function run() {

  var $views = views.map(createView);
  var $board = $('<div class="board" />');

  $board.append($views);
  return $board;
}


export default { run };


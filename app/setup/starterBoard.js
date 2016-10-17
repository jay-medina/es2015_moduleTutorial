import $ from 'jquery';

const views = [
  { text: 'warm up', className: 'one' },
  { text: 'import 3rd party', className: 'two' },
  { text: 'export/import default', className: 'three' },
  { text: 'export/import default shorthand', className: 'four' },
  { text: 'export/import individual', className: 'five' },
  { text: 'amd to es6', className: 'six' },
  { text: 'es6 to amd', className: 'seven' },
  { text: 'final', className: 'eight' }
];

function createView(view) {
  return $(`<div class="lesson_incomplete ${view.className}" />`).text(view.text);
}

function run() {

  var $views = views.map(createView);
  var $board = $('<div class="board" />');

  $board.append($views);
  return $board;
}


export default { run };

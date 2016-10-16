import $ from 'jquery';

var template = `
  Welcome. Please open run.js. and follow these instructions.
  As each file is successfully imported. A new block is colored in.
`;

var $div = $('<div/>');
$div.html(template);

$('#app').append($div);
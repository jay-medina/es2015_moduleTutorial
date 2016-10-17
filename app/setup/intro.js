import $ from 'jquery';
import starterBoard from './starterBoard';
import '../app.css';

var template = `
  <p>Welcome.</p>
  <p>
    Please open run.js. and follow the instructions.
    As each file is successfully imported. A new block is colored in.
  </p>
`;

var $app = $('#app');
var $div = $('<div class="intro"/>');
$div.html(template);

$app.append($div);

$app.append(starterBoard.run());

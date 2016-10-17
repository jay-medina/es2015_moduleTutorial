import $ from 'jquery';

function colorInBox(boxNumber) {
  $(`.${boxNumber}`).addClass('complete');
}

export default colorInBox;
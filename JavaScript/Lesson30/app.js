function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function findMinMax(array) {
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  return { min, max };
}

function checkNumbers(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      result.push(array[i]);
    }
  }
  return result;
}

function generateSymbolHash(rows) {
  let symbolHash = [];
  for (let k = 1; k <= rows; k++) {
    let line = '';
    for (let j = 1; j <= k; j++) {
      line += '#';
    }
    symbolHash.push(line);
  }
  return symbolHash;
}

function Accumulator() {
  this.digit = 0;
  this.initial_digit = 0;
}

Accumulator.prototype.setInitialDigit = function(initialDigit) {
  this.digit = initialDigit;
  this.initial_digit = initialDigit;
}

Accumulator.prototype.getDigit = function() {
  return this.digit;
}

Accumulator.prototype.digit_increment = function() {
  this.digit += 1;
  return this.digit;
}

Accumulator.prototype.digit_decrement = function() {
  this.digit -= 1;
  return this.digit;
}

function CancelableAccumulator(digit, initial_digit) {
  Accumulator.call(this);
  this.setInitialDigit(initial_digit || digit || 0);
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

CancelableAccumulator.prototype.clear = function() {
  this.digit = this.initial_digit;
  return this.digit;
}

function applyZoom(photo, scale) {
  photo.style.transform = `scale(${scale})`;
}

function addZoomAnimation(photo) {
  photo.classList.add('animation_zoom');
}

function removeZoomAnimation(photo) {
  photo.classList.remove('animation_zoom');
}

function zoomClick(photo) {
  if (!photo.classList.contains('animation_zoom')) {
    if (photo.classList.contains('gallery_photo_zoom')) {
      applyZoom(photo, 1.5);
    } else if (photo.classList.contains('home_photo_zoom')) {
      applyZoom(photo, 1.1);
    }
    addZoomAnimation(photo);
  } else {
    applyZoom(photo, 1);
    removeZoomAnimation(photo);
  }
}

module.exports = {
  calculateSum,
  findMinMax,
  checkNumbers,
  generateSymbolHash,
  Accumulator,
  CancelableAccumulator,
  applyZoom,
  addZoomAnimation,
  removeZoomAnimation,
  zoomClick
};

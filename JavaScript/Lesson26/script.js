console.log('hello world!');

function Accumulator() {
  this.digit = parseInt(prompt("Enter initial digit:"));
  this.initial_digit = this.digit;
  console.log('My entered digit: ' + this.digit);
  
}

Accumulator.prototype.digit_increment = function() {
  this.digit += 1;
  console.log('Increment: ' + this.digit);
}

Accumulator.prototype.digit_decrement = function() {
  this.digit -= 1;
  console.log('Decrement: ' + this.digit);
}

function CancelableAccumulator(digit, initial_digit) {
  Accumulator.call(this, digit, initial_digit);
}

CancelableAccumulator.prototype = Accumulator.prototype;

CancelableAccumulator.prototype.clear = function() {
  this.digit = this.initial_digit;
  console.log('___ Accumulator canceled ___ \n\nCleared: ' + this.digit);
}

let startFunction = new CancelableAccumulator();
startFunction.digit_increment();
startFunction.digit_increment();
startFunction.digit_decrement();
startFunction.clear();
startFunction.digit_decrement();

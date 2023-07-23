console.log('hello world!');

console.log('_____Task1_____');

let value1 = {};

function check_fun(parametr) {
  if (Object.keys(parametr).length === 0) {
    console.log('Your object is empty');
  } else {
    console.log('Your object is not empty');
  }
}

check_fun(value1);

console.log('_____Task2_____');

let user = {
  name: "Heorhii",
  age: "25",
  sayHello: function() {
    console.log("Hello, I'm " + this.name + ", I'm " + this.age + " years old");
  },
};

user.sayHello();

console.log('_____Task3_____');

let my_calculator = {
  a: 0,
  b: 0,
  ask: function() {
    this.a = +prompt('Enter first number: ');
    this.b = +prompt('Enter second number: ');
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  },
};

my_calculator.ask();
let sumResult = my_calculator.sum();
let mulResult = my_calculator.mul();

console.log('Sum:', sumResult);
console.log('Multiply:', mulResult);

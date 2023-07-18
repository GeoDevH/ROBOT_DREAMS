console.log('hello world!');

console.log ("__________'Created Array'_________" );

let random_array = [5, 1, 8, 31, 63, 15, 7, 22, 9, 2]; 
console.log (random_array);

let i = 0;
let sum = 0;

while (i < random_array.length) {
  sum += random_array[i];
  i++;
}

console.log("Sum of all element array: " + sum);

let min = random_array[0];
let max = random_array[0];
i = 1;

do {
  if (random_array[i] < min) {
    min = random_array[i];
  }
  if (random_array[i] > max) {
    max = random_array[i];
  }
  i++;
} while (i < random_array.length);

console.log("Min element array: " + min);

console.log("Max element array: " + max);

console.log("___'New elements array with strings'___");

new_array = [8, 'word', 10, 'string', 55, 'element', 132, 'java', 9, true];

console.log(new_array);

console.log("'Only digit'");

for (let a = 0; a < new_array.length; a++) {
    if (typeof new_array[a] === 'number') {
      console.log(new_array[a]);
    }
  }

console.log("__________'#####'____________");

for (let k = 1; k <= 5; k++) {
    let line = '';
    for (let j = 1; j <= k; j++) {
      line += '#';
    }
    console.log(line);
  }

console.log('hello world!');

function task1() {

  console.log('_____Task1_____')
  let a, b;

  function enter() {
    a = prompt('Enter first number: ');
    b = prompt('Enter second number: ');

    if (a === null || b === null) {
      console.log('Operation canceled');
      return;
    }

    if (a === '' || b === '') {
      alert('Error! You entered an empty field, please enter again');
      console.log('Error! You entered an empty field');
      enter();
    } else {
      a = Number(a);
      b = Number(b);
      if (isNaN(a) || isNaN(b)) {
        alert('Error! Entered value is not a number, please enter again');
        console.log('Error! Entered value is not a number');
        enter();
      } else {
        if (a < b) {
          let confirmation = confirm('Are you sure you want to proceed with the operation?');
          if (confirmation) {
            let resultDiff = diff(a, b);
            alert(resultDiff);
            console.log(resultDiff);
          } else {
            console.log('You canceled the operation');
          }
        } else {
          showResults(a, b);
        }
      }
    }
  }

  function sum(a, b) {
    return a + b;
  }

  function diff(a, b) {
    return a - b;
  }

  function add(a, b) {
    return a * b;
  }

  function div(a, b) {
    if (Number(b) === 0) {
      alert('Error! Cannot be divided by zero');
      console.log('Error! Cannot be divided by zero');
      return;
    }
    return a / b;
  }

  function showResults(a, b) {
    let resultSum = sum(a, b);
    let resultDiff = diff(a, b);
    let resultAdd = add(a, b);
    let resultDiv = div(a, b);

    if (typeof resultDiv !== 'undefined') {
      alert(`Sum: ${resultSum}\nDifference: ${resultDiff}\nAddition: ${resultAdd}\nDivision: ${resultDiv}`);
      console.log('Sum: ' + resultSum + '\nDifference: ' + resultDiff + '\nAddition: ' + resultAdd + '\nDivision: ' + resultDiv);
    }
  }

  enter();
}

function task2 () {

  console.log('_____Task2_____')

  let random_array = [5, 1, 8, 31, 63, 15, 7, 22, 9, 2]; 
  console.log(random_array);

  let min = random_array[0]; 
  let max = random_array[0];

  function max_value(random_array) {
    let j = 1;
    while (j < random_array.length) {
      if (random_array[j] > max) {
        max = random_array[j];
      }
      j++;
    }
  }

  function min_value(random_array) {
    for(let k = 0; k < random_array.length; k++) {
      if (random_array[k] < min) {
        min = random_array[k];
      }
    }
  }

  max_value(random_array);
  min_value(random_array);

  console.log('Min value:', min);
  console.log('Max value:', max);
}

function select_home_task () {
  let select_task = prompt("Enter name home_task: \nExample: task(#) \n task1 - 'Arithmetic functions' \n task2 - 'Max&Min number in array'");
  if(select_task === 'task1') {
    task1();
  } else if (select_task === 'task2') {
    task2();
  } else if (select_task === null) {
    console.log('Operation canceled');
  } else {
    alert('Error! Enter correct name task, please enter again');
    console.log('Error! Incorrect name task');
    select_home_task();
  }
  }
  
  select_home_task();
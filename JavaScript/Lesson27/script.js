console.log('hello world!');
function task1() {

  let element = document.getElementById('name-task');
  element.innerText = 'Task 1';
  let a, b;

  function enter() {
    a = prompt('Enter first number: ');
    b = prompt('Enter second number: ');

    if (a === null || b === null) {
      document.getElementById('canceled-operation').innerHTML = 'Operation canceled!';
      return;
    }

    if (a === '' || b === '') {
      alert('Error! You entered an empty field, please enter again');
      enter();
    } else {
      a = Number(a);
      b = Number(b);
      if (isNaN(a) || isNaN(b)) {
        alert('Error! Entered value is not a number, please enter again');
        enter();
      } else {
        if (a < b) {
          let confirmation = confirm('Are you sure you want to proceed with the operation?');
          if (confirmation) {
            let resultDiff = diff(a, b);
            document.getElementById('result-diff').innerHTML = `Diff: <span class = "result-diff-value-vid">${resultDiff}</span>`;
          } else {
            document.getElementById('canceled-operation').innerText = 'You canceled the operation!';
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
      document.getElementById('error-text').innerText = 'Error! Cannot be divided by zero';
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

      function getColorWithOpacity(value) {
        if (value < 0) {
          return 0.3; 
        } else if (value > 10000) {
            return 1; 
        } else if (value > 1000) {
            return 0.7 + (value - 1000) / 9000 * 0.3; 
        } else if (value > 100) {
            return 0.5 + (value - 100) / 900 * 0.2; 
        } else {
            return 0.3 + value / 700 * 0.2; 
        }
      }

      function updateElement(id, label, value) {
        let element = document.getElementById(id);
        let positiveValue;
        if (value >= 0) {
            positiveValue = "";
        } else {
            positiveValue = "-vid";
        }
        //let positiveValue = value >= 0 ? "" : "-vid";
        let opacity = getColorWithOpacity(value);
        element.innerHTML = `${label}: <span class="${id}-value${positiveValue}" style="opacity: ${opacity};">${value}</span>`;
      }
      
      updateElement('result-sum', 'Sum', resultSum);
      updateElement('result-diff', 'Diff', resultDiff);
      updateElement('result-add', 'Add', resultAdd);
      updateElement('result-div', 'Div', resultDiv);

        /*
        if (resultSum >= 0) {
        document.getElementById('result-sum').innerHTML = `Sum: <span class = "result-sum-value">${resultSum}</span>`;
        } else {
          document.getElementById('result-sum').innerHTML = `Sum: <span class = "result-sum-value-vid">${resultSum}</span>`;
        }
        if (resultDiff >= 0) {
        document.getElementById('result-diff').innerHTML = `Diff: <span class = "result-diff-value">${resultDiff}</span>`;
        } else {
          document.getElementById('result-diff').innerHTML = `Diff: <span class = "result-diff-value-vid">${resultDiff}</span>`;
        }
        if (resultAdd >= 0) {
        document.getElementById('result-add').innerHTML = `Add: <span class = "result-add-value">${resultAdd}</span>`;
        } else {
          document.getElementById('result-add').innerHTML = `Add: <span class = "result-add-value-vid">${resultAdd}</span>`;
        }
        if (resultDiv >= 0) {
        document.getElementById('result-div').innerHTML = `Div: <span class = "result-div-value">${resultDiv}</span>`;
        } else {
          document.getElementById('result-div').innerHTML = `Div: <span class = "result-div-value-vid">${resultDiv}</span>`;
        } 
        */
    }
  }
  enter();
}

function task2 () {

  let element = document.getElementById('name-task');
  element.innerText = 'Task 2';

  let random_array = [5, 1, 8, 31, 63, 15, 7, 22, 9, 2]; 
  let outputArray = document.getElementById('out-array');
  outputArray.innerText = 'Array: \n' + '[' + random_array.join(', ') + ']';

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

  document.getElementById('min-text').innerHTML = `Min: <span class = "min-value">${min}</span>`;
  document.getElementById('max-text').innerHTML = `Max: <span class = "max-value" >${max}</span>`;
}

function select_home_task () {
  let select_task = prompt("Enter name home_task: \nExample: task(#) \n task1 - 'Arithmetic functions' \n task2 - 'Max&Min number in array'");
  if(select_task === 'task1') {
    task1();
  } else if (select_task === 'task2') {
    task2();
  } else if (select_task === null) {
    document.getElementById('canceled-operation').innerHTML = 'Operation canceled!';
  } else {
    alert('Error! Enter correct name task, please enter again');
    select_home_task();
  }
  }
  
  select_home_task();
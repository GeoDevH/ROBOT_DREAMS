console.log('hello world!');

/*
let var1 = +prompt('Enter your first digit: ', 0);
let var2 = +prompt('Enter your second digit: ', 0);

alert('Sum = ' + (var1 + var2) + '\nDifference = ' + (var1 - var2) + '\nAddition = ' + (var1 * var2) + '\nDivision = ' + (var1 / var2)); 
*/
  
let var1 = prompt('Enter your first digit:');
let var2 = prompt('Enter your second digit:');

let sum = Number(var1) + Number(var2);
let difference = var1 - var2;
let addition = var1 * var2;
let division = var1 / var2;

if (var1 === '' || var2 === '') {
	alert('Error! You have entered an empty field');
	console.log('Error! You have entered an empty field');
} else if (var2 == 0) {
	division = 'Error! Division by zero is not possible';
	alert('Sum = ' + sum + '\nDifference =  ' + difference + '\nAddition = ' + addition + '\nDivision = ' + division);
	console.log('Sum = ' + sum + '\nDifference =  ' + difference + '\nAddition = ' + addition + '\nDivision = ' + division);
} else if (var1 < var2) {
	if (confirm('Are you sure you want to proceed with the operation?')) {
		alert('Difference = ' + difference);
		console.log('Difference = ' + difference);
	} else {
		console.log('You canceled operation');
	}
} else {
	alert('Sum = ' + sum + '\nDifference =  ' + difference + '\nAddition = ' + addition + '\nDivision = ' + division);
	console.log('Sum = ' + sum + '\nDifference =  ' + difference + '\nAddition = ' + addition + '\nDivision = ' + division);
}
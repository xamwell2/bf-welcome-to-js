'use strict';

/* Numbers

TODO: create a few variables(numbers):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/

const Numb1 = Number(prompt('Enter a number between 0 and 10')); //declaring and asking the user for input.

const Numb2 = Number(prompt('Enter a second number between 0 and 10')); //Declaring and asking the user for input..

if (
  isNaN(Numb1) ||
  isNaN(Numb2) ||
  Numb1 < 0 ||
  Numb1 > 10 ||
  Numb2 < 0 ||
  Numb2 > 10
) {
  console.log('One or both values are not valid'); // If any of the conditions are met, log an error message.}
  alert('Invalid Input! Please enter numbers between 0 and 10.');
} else {
  let result = Numb1 + Numb2;
  console.log(result);
}

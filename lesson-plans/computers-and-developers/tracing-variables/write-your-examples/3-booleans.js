'use strict';

/* Booleans

TODO: create a few variables(boolean):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/

const isStudent = true; // Declaration and initialization of a boolean variable.

let age = Number(prompt('Enter a number'));
// Reading a boolean variable (comparing it with another value)

if (age >= 18 && !isStudent) {
  console.log('You are eligible to vote');
} else {
  console.log("Sorry, you're not eligible to vote");
}

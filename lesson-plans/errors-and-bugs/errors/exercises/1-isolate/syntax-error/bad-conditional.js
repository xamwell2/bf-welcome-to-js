'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name:
  message:

  location:

  life cycle:

  the mistake:

  the fix(es):
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('Too short');
} else if (userName.length < 5) {
  console.log('Just right');
} else {
  console.log('Too long');
}

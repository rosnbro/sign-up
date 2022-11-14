// DOM Objects

const submitButton = document.getElementById('submitButton');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phoneNum = document.getElementById('phoneNum');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmPass');

// Event Listeners

submitButton.addEventListener('click', () => validateAll());
firstName.addEventListener('blur', validate);
lastName.addEventListener('blur', validate);
phoneNum.addEventListener('blur', validate);
email.addEventListener('blur', validate);
password.addEventListener('blur', validate);
confirmPass.addEventListener('blur', matchPassword);

// Functions

function validateAll() {
  validate('firstName');
  validate('lastName');
  validate('phoneNum');
  validate('email');
  validate('password');
  matchPassword();
}

function validate(e) {
  let targetElement;
  if (e.target) {
     targetElement = e.target.id;
  } else targetElement = e;
  
  switch (targetElement) {
    case 'firstName':

      break;
    case 'lastName':

      break;
    case 'phoneNum':

      break;
    case 'email':

      break;
    case 'password':

      break;
  }
}

function matchPassword() {
  if (password.value === confirmPass.value) {
    console.log('ayy they match');
  } else {
    console.log('boooo');
  }
}
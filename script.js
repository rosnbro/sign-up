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
firstName.addEventListener('focus', tryInput);
lastName.addEventListener('focus', tryInput);
phoneNum.addEventListener('focus', tryInput);
email.addEventListener('focus', tryInput);
password.addEventListener('focus', tryInput);
confirmPass.addEventListener('focus', tryInput);

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
  let message = 'Please enter a valid input.';

  if (!e.target) {
    targetElement = document.getElementById(e);
  } else targetElement = e.target;

  switch (targetElement) {
    case 'firstName':
      if (targetElement.validity.patternMismatch) {
        message = 'Please enter a valid name';
      } else if (targetElement.validity.tooLong) {
        message = 'Please enter a shorter name';
      }
      break;
    case 'lastName':
      if (targetElement.validity.patternMismatch) {
        message = 'Please enter a valid name';
      } else if (targetElement.validity.tooLong) {
        message = 'Please enter a shorter name';
      }
      break;
    case 'phoneNum':
      if (targetElement.validity.patternMismatch) {
        message = 'Please enter a valid phone number';
      }
      break;
    case 'email':
      if (targetElement.validity.patternMismatch) {
        message = 'Please enter a valid email address';
      }
      break;
    case 'password':

      break;
  }

  if (targetElement.validity.valid) {
    document.getElementById(targetElement.id + 'Error').textContent = '';
  } else {
    document.getElementById(targetElement.id + 'Error').textContent = message;
  }
  
}

function matchPassword() {
  if (password.value === confirmPass.value) {
    document.getElementById(password.id + 'Error').textContent = '';
    document.getElementById(confirmPass.id + 'Error').textContent = '';
  } else {
    document.getElementById(password.id + 'Error').textContent = 'passwords must match.';
    document.getElementById(confirmPass.id + 'Error').textContent = 'passwords must match.';
  }
}

function tryInput(e) {
  document.getElementById(e.target.id + 'Error').textContent = '';
  if (e.target.id === 'confirmPass' || e.target.id === 'password') {
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPassError').textContent = '';
  }
}
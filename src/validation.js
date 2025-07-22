const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group error';
  formGroup.querySelector('small').innerText = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group success';
  formGroup.querySelector('small').innerText = '';
}

function isEmailValid(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function validateForm() {
  let isValid = true;

  // Username
  if (username.value.trim().length < 3) {
    showError(username, 'Username must be at least 3 characters');
    isValid = false;
  } else {
    showSuccess(username);
  }

  // Email
  if (!isEmailValid(email.value.trim())) {
    showError(email, 'Invalid email');
    isValid = false;
  } else {
    showSuccess(email);
  }

  // Password
  const pwd = password.value.trim();
  if (pwd.length < 6 || !/\d/.test(pwd)) {
    showError(password, 'Password must be 6+ chars and include a number');
    isValid = false;
  } else {
    showSuccess(password);
  }

  // Confirm Password
  if (confirmPassword.value !== password.value) {
    showError(confirmPassword, 'Passwords do not match');
    isValid = false;
  } else {
    showSuccess(confirmPassword);
  }

  submitBtn.disabled = !isValid;
  return isValid;
}

form.addEventListener('input', () => {
  validateForm();
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validateForm()) {
    successMessage.textContent = '✅ Registration Successful!';
    form.reset();
    document.querySelectorAll('.form-group').forEach(group => {
      group.className = 'form-group';
    });
    submitBtn.disabled = true;
  }
});

const mobileInput = document.getElementById('phone');
const mobileValidationDiv = document.getElementById('mobileValidation');
mobileInput.addEventListener('input', validateMobile);

function validateMobile() {
  const mobile = mobileInput.value;
  if (isValidMobile(mobile)) {
    mobileValidationDiv.innerHTML = '';
  } else {
    mobileValidationDiv.innerHTML = 'Please enter a valid mobile number';
    mobileValidationDiv.style.color="red";
    mobileValidationDiv.style.fontSize="15PX";
    // mobileValidationDiv.style.textAlign="center";
  }
}

function isValidMobile(mobile) {
  const mobilePattern = /^[6-9]\d{9}$/;
  return mobilePattern.test(mobile);
}
//Password validation
const passwordInput = document.getElementById('pass');
const confirmPasswordInput = document.getElementById('cpass');
const passwordStrengthDiv = document.getElementById('passwordStrength');
const passwordMatchDiv = document.getElementById('passwordMatch');

passwordInput.addEventListener('input', checkPasswordStrength);
confirmPasswordInput.addEventListener('input', checkPasswordMatch);

function checkPasswordStrength() {
  const password = passwordInput.value;
  const strength = calculatePasswordStrength(password);
  passwordStrengthDiv.innerHTML = `Password Strength: ${strength}`;
}

function calculatePasswordStrength(password) {
  let strength = 0;
  // Check for length
  if (password.length >= 8) {
    strength++;
  }
  // Check for presence of at least one capital letter
  if (/[A-Z]/.test(password)) {
    strength++;
  }
  // Check for presence of at least one small letter
  if (/[a-z]/.test(password)) {
    strength++;
  }
  // Check for presence of at least one digit
  if (/\d/.test(password)) {
    strength++;
  }
  // Check for presence of at least one symbol
  if (/[^A-Za-z0-9]/.test(password)) {
    strength++;
  }
  // Return strength level
  if (strength === 5) {
    return 'Strong';
  } else if (strength >= 3) {
    return 'Medium';
  } else {
    return 'Weak';
  }
}
function checkPasswordMatch() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  if (password !== confirmPassword) {
    passwordMatchDiv.innerHTML = 'Passwords do not match';
    passwordMatchDiv.style.color = "red";
    passwordMatchDiv.style.fontSize = "15px";
    
  } else {
    passwordMatchDiv.innerHTML = 'Password Matched';
    passwordMatchDiv.style.color = "green";
    passwordMatchDiv.style.fontSize = "15px";
  }
}
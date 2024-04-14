const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home1"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

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
  passwordStrengthDiv.style.fontSize="13px";
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
    passwordMatchDiv.style.fontSize = "13px";
    
  } else {
    passwordMatchDiv.innerHTML = 'Password Matched';
    passwordMatchDiv.style.color = "green";
    passwordMatchDiv.style.fontSize = "13px";
  }
}

let slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }
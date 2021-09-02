const contactForm = document.querySelector('#contact-form');

function validateEmail() {
  const emailInput = document.querySelector('#email-input');
  const emailError = document.querySelector('#email-error');
  const emailLowerCase = emailInput.value.toLowerCase();

  if (emailInput.value !== emailLowerCase) {
    emailError.innerHTML = `Your email should be in lower case please use "<span style="color:gray">${emailLowerCase}</span>" instead.`;
    return false;
  }
  return true;
}

contactForm.addEventListener('submit', (sub) => {
  if (!validateEmail()) {
    sub.preventDefault();
  }
});
const userForm = document.getElementById('name-input');
const emailForm = document.getElementById('email-input');
const textForm = document.getElementById('area-contact');

let form = {
  user: userForm.value,
  email: emailForm.value,
  text: textForm.value,
};

function setValuesStorage() {
  form.user = userForm.value;
  form.email = emailForm.value;
  form.text = textForm.value;
  localStorage.setItem('form', JSON.stringify(form));
}

function populateStorage() {
  userForm.onchange = setValuesStorage;
  emailForm.onchange = setValuesStorage;
  textForm.onchange = setValuesStorage;
}

function setText() {
  form = JSON.parse(localStorage.getItem('form'));
  userForm.value = form.user;
  emailForm.value = form.email;
  textForm.value = form.text;
  populateStorage();
}

if (form.user !== ':'
|| form.email !== ':'
|| form.text !== ':') {
  setText();
} else {
  populateStorage();
}

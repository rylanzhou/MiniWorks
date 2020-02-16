function error(color) {
  document.body.style.backgroundColor = color;
}

function validateUser(user) {
  if (user.value.length < 6) {
    error('rgb(189, 87, 87)');
    return false;
  }
  error('rgb(87, 189, 130)');
  return true;
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    error('rgb(87, 189, 130)');
    return true;
  }
  error('rgb(189, 87, 87)');
  return false;
}

function nextSlide(parent, nextForm) {
  parent.classList.add('innactive');
  parent.classList.remove('active');
  nextForm.classList.add('active');
}

function animatedForm() {
  const arrows = document.querySelectorAll('.fa-arrow-down');

  arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      // To get the very pervious elements of each arrow, namely the input box.
      const input = arrow.previousElementSibling;
      // To get the field that wraps this element.
      const parent = arrow.parentElement;
      // To get the next field.
      const nextForm = parent.nextElementSibling;

      // Check for validation
      if (input.type === 'text' && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === 'email' && validateEmail(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === 'password' && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = 'shake .5s';
      }

      parent.addEventListener('animationend', () => {
        parent.style.animation = '';
      });
    });
  });
}

animatedForm();

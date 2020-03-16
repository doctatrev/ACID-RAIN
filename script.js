document.querySelector('.ham').addEventListener('click', navToggle);

document.querySelector('.exit').addEventListener('click', navToggle);


function navToggle() {
  document.getElementById('ham').classList.toggle('hide');
  document.getElementById('exit').classList.toggle('hide');
  document.getElementById('dropmenu').classList.toggle('hide');
};

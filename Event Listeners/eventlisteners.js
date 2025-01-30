// Event Listeners

// -----element.addEventListener('click', function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
  alert('This is js for button-2');
}
buttonTwo.addEventListener('click', alertBtn);

//----Mouseover

const newBackgroundColor = document.querySelector('.btn-3');

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = 'black';
}

newBackgroundColor.addEventListener('mouseover', changeBgColor);

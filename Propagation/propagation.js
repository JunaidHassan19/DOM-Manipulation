//----------Event Probagation------------

window.addEventListener('click', function() {
  console.log('Window');
}, true);

document.addEventListener('click', function() {
  console.log('Document');
}, true);

document.querySelector('.div2').addEventListener('click', function() {
  // e.stopPropagation();
  console.log('DIV 2');
}, {once: false});

document.querySelector('.div1').addEventListener('click', function() {
  console.log('DIV 1');
}, true)

document.querySelector('button').addEventListener('click', function(e) {
  console.log(e.target.innerText = 'clicked!');
}, true)
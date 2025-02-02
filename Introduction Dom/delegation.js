//-------Event Delegation----------
/*It allows users to append a SINGLE event llistener to a
parent element that adds it to all of its parent AND future
descendants that match a selector*/

// document.querySelector('#football').addEventListener('click', function(e) {
//   console.log('Football is clicked');

//   const target = e.target;
//   if(target.matches('li')) {
//     target.style.backgroundColor = 'lightblue'
//   }
// })

// document.querySelector('#basketball').addEventListener('click', function(e) {
//   console.log('basketball is clicked');

//   const target = e.target;
//   if(target.matches('li')) {
//     target.style.backgroundColor = 'lightblue'
//   }
// })

// document.querySelector('#boxing').addEventListener('click', function(e) {
//   console.log('boxing is clicked');

//   const target = e.target;
//   if(target.matches('li')) {
//     target.style.backgroundColor = 'lightblue'
//   }
// })

// document.querySelector('#tennis').addEventListener('click', function(e) {
//   console.log('Tennis is clicked');

//   const target = e.target;
//   if(target.matches('li')) {
//     target.style.backgroundColor = 'lightblue'
//   }
// })

// document.querySelector('#golf').addEventListener('click', function(e) {
//   console.log('Golf is clicked');

//   const target = e.target;
//   if(target.matches('li')) {
//     target.style.backgroundColor = 'lightblue'
//   }
// })

document.querySelector('#sports').addEventListener('click', function(e) {
  console.log(e.target.getAttribute('id') + ' is clicked');

  const target = e.target;

  if(target.matches('li')) {
    target.style.backgroundColor = 'lightblue';
  }
})


//---appendChild---
const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport .innerText = 'Rugby';
newSport.setAttribute('id', 'regby');

sports.appendChild(newSport);
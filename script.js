let button = document.querySelector('button');

button.style.backgroundColor = 'black'
button.style.color = 'white';
button.style.cursor = 'pointer';



// declear a varible for condition checking

let color = 'white';

button.addEventListener('click', () => {

  if (color === 'white') {
    document.body.style.backgroundColor = 'black';
    button.style.backgroundColor = 'white'
    button.style.color = 'black';
    // if the global varible value is black the conditon must be false and will execute the else part
    color = 'black'
  }
  else {
    document.body.style.backgroundColor = 'white';
    // if background color white the button background must be updated to black and text to white
    button.style.backgroundColor = 'black'
    button.style.color = 'white';
    color = 'white'

  }
})
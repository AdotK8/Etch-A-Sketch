const arrayVariable = [];
let temp;
let userSize = 16; 
let square = 200 / userSize; //calculating the size of each div on canvas based on user input 
arrayVariable.length= userSize * userSize; 
const pix = document.getElementsByClassName('grid');



for (i = 0; i < arrayVariable.length; i++) { //created grid based on size the user has input 
  temp = document.createElement('div');
  temp.className = 'grid';
  temp.style.height= square+'px';
  temp.style.width= square+'px';//setting dimensions of divs to relate to user input size 
  document.getElementsByClassName('container')[0].appendChild(temp); 
  
}



for ( let j = 0; j<pix.length; j++) {
    pix[j].addEventListener('mouseenter', function (){
        pix[j].classList.add('clicked');
    });
}






















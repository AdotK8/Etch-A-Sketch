document.addEventListener('DOMContentLoaded', function ( ){
});

var board = document.querySelector('.container');
let boardLength;
let pixelNumber;
let pixelSize;
let boardLengthInt;
let sizeChoice = document.querySelector('.sizeChoice')



sizeChoice.addEventListener('click', function () {
    boardLength = prompt("pick a size");
    boardLengthInt = parseInt(boardLength); 
    pixelNumber = boardLengthInt * boardLengthInt;
   
    makeGrid (pixelNumber, boardLengthInt);
})

function makeGrid (pixelNumber, boardLengthInt) {
    removeBoard ();
    
    for (let i = 0; i<=pixelNumber; i++ ) {
        pixelSize = 200/boardLengthInt + 'px';
        var newDiv = document.createElement("div");
        newDiv.classList.add('.pixel');
        board.appendChild(newDiv);
        newDiv.style.height = pixelSize;
        newDiv.style.width = pixelSize;
    } 

}
function removeBoard (){
    while (board.firstChild){
        board.removeChild(board.firstChild);
    }
}





  

//want to get a boardLength , then find the number of boxes in the board





// const arrayVariable = [];
// let temp;
// var userSize;
// const container = document.getElementsByClassName('container');
// const size = document.querySelector('.sizer');
// const pix = document.getElementsByClassName('grid'); //setting a const for all divs created
// const clearButton = document.querySelector('.clear');//setting clear button

// size.onclick = function () {

//     userSize = prompt("test");
//     makeGrid (arrayVariable, userSize);
//     hover();
// }


// function makeGrid (arrayVariable, userSize) {
//     square = 200 / userSize;
//     arrayVariable.length= userSize * userSize;

//         for (i = 0; i < arrayVariable.length; i++) { //created grid based on size the user has input 
//             temp = document.createElement('div');
//             temp.className = 'grid';
//             container[0].appendChild(temp);
//             temp.style.height= square+'px';
//             temp.style.width= square+'px';//setting dimensions of divs to relate to user input size   
// }
// }

// hover();
// function hover () {
// for ( let j = 0; j<pix.length; j++) { 
//     pix[j].addEventListener('mouseenter', function (){// adds new calss to all divs which are hovered over 
//         pix[j].classList.add('painted');
//     })
//     clearButton.addEventListener('click', function() { //adds clear button which removes the painted class and resets colour 
//         pix[j].classList.remove('painted');
//     })
// }
// }











// const slider = document.querySelector("input");
// const value = document.querySelector(".value");

// value.textContent = slider.value;

// // slider.oninput = function(userSize) {
// //     value.textContent = this.value; 
// //     userSize = this.value; 
// //     console.log (userSize);
// //     }


























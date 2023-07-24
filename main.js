
var board = document.querySelector('.container'); 
let boardLength;
let pixelNumber;
let pixelSize;
let boardLengthInt;
let colour;  
let sizeChoice = document.querySelector('.sizeChoice')
let clear = document.querySelector('.clear')



sizeChoice.addEventListener('click', function () {//function which takes user input and passes onto make grid function to crate board. 
    boardLength = prompt("pick a size");
    
    if (boardLength>100) {
        alert("please pick a size between 1 and 100");
    } else if (boardLength == 0 ) {
        alert("please pick a size between 1 and 100");
    } else {

    boardLengthInt = parseInt(boardLength); 
    pixelNumber = boardLengthInt * boardLengthInt;
   
    makeGrid (pixelNumber, boardLengthInt);
    }
    
})

function makeGrid (pixelNumber, boardLengthInt) {
    removeBoard ();//clears previous board before making a new one 

    for (let i = 0; i<pixelNumber; i++ ) {//iterates through amount of divs required to create board. 
        pixelSize = 600/boardLengthInt + 'px';//calculating width of each pizel based on board size and number of pixels. 
        var box = document.createElement("div");
        board.appendChild(box);//appends all  newly created divs to board. 
        box.style.height = pixelSize;
        box.style.width = pixelSize;
        hover(box);
        
    } 

}
function removeBoard (){ // removes all elementd from board in the DOM
    while (board.firstChild){
        board.removeChild(board.firstChild); 
    }
}



function hover (box) {
    box.addEventListener('mouseenter', colourDiv) //when user hovers over board, pass to colourDiv function 
    

    clear.addEventListener('click', function (){ //paints the entire board white when user clicks on clear. 
    box.style.backgroundColor = 'White'; 
    })
}

function colourDiv () { //takes user's colour choice which is set in the HTML, applies this colour to the color variable 
    if (colour == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; //if random is selected, each hovered div will be assigned a new background colour 
 
    } else {
        this.style.backgroundColor = 'black'; //default is black 
    }
}

function setColour (colourChoice) {
    colour = colourChoice;  //function which is called in the HTML, which will set colour variable to user choice, and then to be passed through the colourDiv function 
}





// red.addEventListener('click', () => {
//     let dataColor = red.getAttribute('data-color');
//     document.querySelector(':root').style.setProperty('--main-color', dataColor)
// })

// green.addEventListener('click', () => {
//     let dataColor = green.getAttribute('data-color');
//     document.querySelector(':root').style.setProperty('--main-color', dataColor)
// })

// document.addEventListener('DOMContentLoaded', function ( ){
// });



















  

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




































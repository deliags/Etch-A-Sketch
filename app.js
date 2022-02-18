const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear-grid");

//creates a grid with the given amount of rows/columns
const createGrid = (amount) => {
  
  for (let i = 0; i < amount; i++){
    for (let j = 0; j < amount; j++) {
      const gridRow = document.createElement('div');
      gridRow.classList.add('grid');
      gridRow.setAttribute('onmouseover', 'changeColor(this)');
      container.appendChild(gridRow);
    };
  };
};

//changes color of div when mouse hovers on it 
const changeColor = (square) => {
  square.style.backgroundColor = "black";
};
  
//Refreshes page
const clearGrid = () => {
  location.reload();
};

// //When button is clicked, page is refreshed
// clearButton.addEventListener('click', clearGrid);

// createGrid(16);

const startGame = () => {
  //When button is clicked, page is refreshed
  clearButton.addEventListener('click', clearGrid);
  createGrid(16)
}

startGame();
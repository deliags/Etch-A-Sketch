const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear-grid");
const smallButton = document.querySelector(".small");
const mediumButton = document.querySelector(".medium");
const bigButton = document.querySelector(".big");
const eraserButton = document.querySelector(".eraser");
const DEFAULT = 16;

//Refreshes page
const clearGrid = () => {
  // location.reload();

  let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
};

//creates a grid with the given amount of rows/columns
const createGrid = (size) => {
  for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++) {
      const gridRow = document.createElement('div');
      gridRow.setAttribute('onmouseover', 'changeColor(this)');

      if (size === 16) {
        gridRow.classList.add('big-grid', 'grid');
      }
      if (size === 32) {
        gridRow.classList.add('medium-grid', 'grid');
      }
      if(size === 64){
        gridRow.classList.add('small-grid', 'grid');
      }
      // gridRow.classList.add('.grid')
      container.appendChild(gridRow);
    };
  };
};

//changes color of div when mouse hovers on it 
const changeColor = (square) => {
  square.style.backgroundColor = "black";
};

const eraseColor = () => {
  const gridSquares = document.querySelectorAll('.grid');
  gridSquares.forEach(gridSquare => gridSquare.setAttribute('onmouseover', 'eraser(this)'));
  
};
const eraser = (square) => {
  square.style.backgroundColor = '#eeeeee';
};

const startGame = () => {
  //When button is clicked, page is refreshed
  clearButton.addEventListener('click', () => { clearGrid(), createGrid(DEFAULT) });

  //On launch
  createGrid(DEFAULT);

  //On click, board is cleared and new size is selected
  smallButton.addEventListener('click', () => { clearGrid(), createGrid(64) });
  mediumButton.addEventListener('click', () => { clearGrid(), createGrid(32) });
  bigButton.addEventListener('click', () => { clearGrid(), createGrid(16); });
  eraserButton.addEventListener('click', eraseColor);
}

startGame();
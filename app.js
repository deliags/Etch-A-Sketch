const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear-grid");
const smallButton = document.querySelector(".small");
const mediumButton = document.querySelector(".medium");
const bigButton = document.querySelector(".big");

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
  


const startGame = () => {
  //When button is clicked, page is refreshed
  clearButton.addEventListener('click', clearGrid);
  smallButton.addEventListener('click', () => { clearGrid(), createGrid(64) });
  mediumButton.addEventListener('click', () => { clearGrid(), createGrid(32) });
  bigButton.addEventListener('click', () => { clearGrid(), createGrid(16) });
}

startGame();
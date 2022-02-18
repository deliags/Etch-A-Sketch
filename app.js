const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear-grid");
const smallButton = document.querySelector(".small");
const mediumButton = document.querySelector(".medium");
const bigButton = document.querySelector(".big");

//creates a grid with the given amount of rows/columns
const createGrid = (size) => {
  
  for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++) {
      const gridRow = document.createElement('div');
      gridRow.setAttribute('onmouseover', 'changeColor(this)');

      if (size === 16) {
        gridRow.classList.add('big-grid');
      }
      if (size === 32) {
        gridRow.classList.add('medium-grid');
      }
      if(size === 64){
        gridRow.classList.add('small-grid');
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
  
//Refreshes page
const clearGrid = () => {
  location.reload();
};

const startGame = () => {
  //When button is clicked, page is refreshed
  clearButton.addEventListener('click', clearGrid);
  smallButton.addEventListener('click', () => { createGrid(16) });
  mediumButton.addEventListener('click', () => { createGrid(32) });
  bigButton.addEventListener('click', () => { createGrid(64) });
}

startGame();
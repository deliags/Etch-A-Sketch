const container = document.querySelector(".container");

const clearBtn = document.querySelector(".clear-grid");
const smallBtn = document.querySelector(".small");
const mediumBtn = document.querySelector(".medium");
const bigBtn = document.querySelector(".big");
const eraserBtn = document.querySelector(".eraser");
const bwModeBtn = document.querySelector(".bw");
const rainbowModeBtn = document.querySelector(".rainbow");
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
      // gridRow.setAttribute('onmouseover', 'changeColor(this)');

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

//Activates black & white mode
const bwMode = () => {
  const gridSquares = document.querySelectorAll('.grid');
  gridSquares.forEach(gridSquare => gridSquare.setAttribute('onmouseover', 'bwColor(this)'));
}

//changes color to black 
const bwColor = (square) => {
  square.style.backgroundColor = "black";
};

//Activates rainbow mode
const rainbowMode = () => {
  const gridSquares = document.querySelectorAll('.grid');
  gridSquares.forEach(gridSquare => gridSquare.setAttribute('onmouseover', 'rainbowColor(this)'));
}

//changes color to rainbow (random color)
const rainbowColor = (square) => {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
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
  clearBtn.addEventListener('click', () => { clearGrid(), createGrid(DEFAULT) });

  //On launch
  createGrid(DEFAULT);

  //On click, board is cleared and new size is selected
  smallBtn.addEventListener('click', () => { clearGrid(), createGrid(64) });
  mediumBtn.addEventListener('click', () => { clearGrid(), createGrid(32) });
  bigBtn.addEventListener('click', () => { clearGrid(), createGrid(16); });
  eraserBtn.addEventListener('click', eraseColor);
  bwModeBtn.addEventListener('click', bwMode);
  rainbowModeBtn.addEventListener('click', rainbowMode)
}

startGame();
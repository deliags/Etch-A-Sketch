const container = document.querySelector(".container");

function createGrid (amount) {
  for (let i = 0; i < amount; i++){
    for (let j = 0; j < amount; j++) {
      const gridRow = document.createElement('div');
      gridRow.classList.add('grid');
      container.appendChild(gridRow);
    }
  }
};
createGrid(16);
//make and style one box pixel
let mouse_down = false;
let numOfColumns = 0;

const handleClick = () => {
  const gridContainer = document.querySelector('#container');
  gridContainer.innerHTML = '';
  numOfColumns = parseInt(prompt('how many boxes do you want across?'));
  let gridSize = numOfColumns ** 2;
  gridContainer.setAttribute(
    'style',
    `grid-template-columns: repeat(${numOfColumns}, 1fr);`
  );

  console.log(gridSize);
  for (let i = 0; i < gridSize; i++) {
    createBox();
  }
};

const createBox = () => {
  const gridContainer = document.querySelector('#container');

  const box = document.createElement('div');
  box.classList.add('box');
  box.setAttribute('style', 'border: 1px solid black;');

  box.addEventListener('mouseover', function () {
    box.setAttribute('style', ' background-color: blue;');
  });
  gridContainer.appendChild(box);
};

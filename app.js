//make and style one box pixel
const createBox = () => {
  const body = document.querySelector('body');
  const box = document.createElement('div');
  box.textContent = 'hi';
  box.setAttribute('style', 'border: 1px solid black; ');
  body.appendChild(box);
};

//
for (let i = 0; i < 1000; i++) {
  createBox();
}

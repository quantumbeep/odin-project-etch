//make and style one box pixel
let mouse_down = false;

const createBox = () => {
  const body = document.querySelector('body');
  const box = document.createElement('div');
  box.textContent = '';
  box.setAttribute(
    'style',
    'border: 1px solid black; width: 10px; height: 10px  '
  );

  box.addEventListener('mouseover', function () {
    box.setAttribute(
      'style',
      'width: 10px; height: 10px; background-color: blue;'
    );
  });

  body.appendChild(box);
};

//
for (let i = 0; i < 10000; i++) {
  createBox();
}

// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
// Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
// There are multiple ways to change the color of the divs, including:
// adding a new class to the div.
// changing the div’s background color using JavaScript.


// This function creates a set of 11 divs for each div passed into it
function makeGrid(gridName) {
    let gridWidth = "";
    for (let i = 0; i < 11; i++) {
        const div = document.createElement('div');
        div.style.border = 'solid';
        div.classList.add('color');
        gridName.appendChild(div);
    }
    for (let i = 0; i < 11; i++) {
        gridWidth += 'auto ';
    }
    gridName.style.gridTemplateColumns=gridWidth;
}

const shades = document.querySelector('#vary-shade')
const reds = document.querySelector('#vary-red');
const greens = document.querySelector('#vary-green');
const blues = document.querySelector('#vary-blue');
makeGrid(shades);
makeGrid(reds);
makeGrid(greens);
makeGrid(blues);


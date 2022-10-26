const reds = document.querySelector('#vary-red');
const greens = document.querySelector('#vary-green');
const blues = document.querySelector('#vary-blue');

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

makeGrid(reds);
makeGrid(greens);
makeGrid(blues);


const reds = document.querySelector('.vary-red');

function makeGrid() {
    let gridWidth = "";
    for (let i = 0; i < 11; i++) {
        const div = document.createElement('div');
        div.style.border = 'solid';
        reds.appendChild(div);
    }
    for (let i = 0; i < 11; i++) {
        gridWidth += 'auto ';
    }
    reds.style.gridTemplateColumns=gridWidth;
}

makeGrid();


const grid = document.querySelector('.grid');
const buttonChangeSize = document.querySelector('.button_change_size');
let size = 30;

buttonChangeSize.addEventListener("click", function changeGridSize() {
    let sizeChoise = prompt("Please enter grid size: ", "32");
    if (sizeChoise <= 100 && sizeChoise > 0) {
        size = sizeChoise;
    } else {
        alert("The value has to be between 0 and 100. Try again.");
    }
    removeAllChildNodes();
    createGrid();
});

function removeAllChildNodes(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

function createGrid() {
    cube = size * size;
    for (let i = 0; i < cube; i++) {
        const cell = document.createElement('div');
        cell.className = "cell";
        cell.addEventListener('mouseover', (event) => {
            cell.style.backgroundColor = 'black';
        });
        grid.appendChild(cell);
    }
    grid.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
};

createGrid();
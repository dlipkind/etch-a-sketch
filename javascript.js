const grid = document.querySelector('.grid');
let btnSize = document.getElementById('button');
let size = 50;

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
}

console.log(createGrid())

// btnSize.onclick = function changeGridSize() {
//     let sizeChoise = prompt("Please enter grid size: ", "32");
//     if (size <= 100 && size > 0):
//         return sizeChoise = size;
//     else 
//         prompt("The value has to be between 0 and 100. Try again: ");
//         return sizeChoise = size
// }



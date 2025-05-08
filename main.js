

const containerSize = 600
let col = 18;
let row = 18;
let gridSize = row * col;

const container  = document.querySelector(".container");
const root = document.documentElement; //get de root pseudo-class
root.style.setProperty(`--cellWidth`, `${(containerSize / col)}px`);
root.style.setProperty(`--cellHeigth`, `${(containerSize / row)}px`);

function createGrid(size){

    for ( let i = 0; i < size; i++ ) {  
        const div = document.createElement("div");
        container.appendChild(div);
    }
    
}

createGrid(gridSize);
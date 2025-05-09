

const containerSize = 500
let col = 18;
let row = 18;

const container  = document.querySelector(".container");
const root = document.documentElement; //get de root pseudo-class
root.style.setProperty(`--cellWidth`, `${(containerSize / col)}px`);
root.style.setProperty(`--cellHeigth`, `${(containerSize / row)}px`);

function createGrid(){
    let gridSize = row * col;
    for ( let i = 0; i < gridSize; i++ ) {  
        const div = document.createElement("div");
        container.appendChild(div);
        div.addEventListener( "mouseover", ()=>{
            div.setAttribute("class", "cell");
        })
        
    }
    
}

createGrid();

function eraseGrid(){
    while ( container.firstChild ){
        container.removeChild(container.lastChild);
    }
}

const gridBtn = document.querySelector("#change-grid")
let newGrid;
gridBtn.addEventListener( "click", ()=>{
    newGrid = +prompt("Enter the new grid size (Max 100)");
    if ( newGrid < 100 ){
        col = newGrid;
        row = newGrid;
        root.style.setProperty(`--cellWidth`, `${(containerSize / col)}px`);
        root.style.setProperty(`--cellHeigth`, `${(containerSize / row)}px`);
        eraseGrid();
        createGrid();
    } else {
        alert("Enter a number below 100");
    }
    
} )
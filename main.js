const container  = document.querySelector(".container");


//for (let i = 0; i < gridSize; i++) {
  //  const div = document.createElement("div")
    //div.setAttribute("class", "vertical")
    //container.appendChild(div);
//}

function createGrid(size){
    let gridSize = size * size;

    for ( let i = 0; i < gridSize; i++ ) {  
        const div = document.createElement("div");
        container.appendChild(div);
    }
    
}

createGrid(8);
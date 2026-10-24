squarePerSide = 16
let gridSize = 16**2
const container = document.querySelector(".container");
flexBasis = 100/squarePerSide

for (let i=0; i<gridSize; i++){
    let square = document.createElement("div");
    square.className = "square"
    square.setAttribute("style", `border:1.5px solid black; flex:${flexBasis}%`);
    container.appendChild(square);
}

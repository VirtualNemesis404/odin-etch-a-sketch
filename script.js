
function colorChange(event){
    event.target.style.backgroundColor = "red";
}

function hover(event){
    event.target.style.backgroundColor = "green";
}

function makeGrid(squarePerSide=16){

    let squares = document.querySelectorAll(".square")

    if (squares) {
        for (const square of squares){
            container.removeChild(square)        
        }
    }
    
    let gridSize = squarePerSide**2
    let flexBasis = 100/squarePerSide
    for (let i=0; i<gridSize; i++){
        let square = document.createElement("div");
        square.className = "square"
        square.setAttribute("style", `border:1px solid black; flex:${flexBasis}%`);
        container.appendChild(square);
    }

    squares = document.querySelectorAll(".square")

    for (const square of squares){
        square.addEventListener("mouseenter", hover)
        square.addEventListener("mouseleave", colorChange)
    }
}

function input(){
    let userInput = parseInt(prompt("Enter the number of squares per side (min:16, max:100):"))
    if (userInput <= 100 && userInput >=16){
        makeGrid(userInput)
    }
    else{
        alert("Number should be from 16 to 100")
    }
}

const container = document.querySelector(".container");

makeGrid()


let btn = document.querySelector(".btn")
btn.addEventListener("click",input)
let field = 16 * 16;

const parent = document.getElementById('container');

let btnReset = document.getElementById('reset');
btnReset.addEventListener("click",reset);

let btnSize = document.getElementById('size');
btnSize.addEventListener("click",getSize);

for(let i = 0;i<field;i++){
    let div = document.createElement('div');
    div.classList.add('square');
    parent.appendChild(div);
    div.addEventListener("mouseover",function(){
        div.style.backgroundColor = "black";
        
    })
    
}

function reset(){
    let square = document.querySelectorAll(".square");
    square.forEach(element => {
        element.style.backgroundColor = "white";
    });
}

function getSize(){
    let input = prompt("Size of the grid: ");
    return input * input;
}






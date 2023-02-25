
const parent = document.getElementById('container');

let btnReset = document.getElementById('reset');
btnReset.addEventListener("click",reset);

let btnSize = document.getElementById('size');
btnSize.addEventListener("click",getSize);



function createField(size){
    for(let i = 0;i<size * size;i++){
        let div = document.createElement('div');
        div.classList.add('square');
        parent.appendChild(div);
        div.addEventListener("mouseover",function(){
            div.style.backgroundColor = "black";
            
        })
    }
}

function reset(){
    let square = document.querySelectorAll(".square");
    square.forEach(element => {
        element.style.backgroundColor = "white";
    });
}

function getSize(){
    let input = prompt("Size of the grid: ");
    let square = document.querySelectorAll(".square");
    square.forEach(element => {
        element.remove();
    })
    createField(input);
    calcBasis(input);

}

function calcBasis(input){
    let root = document.documentElement;
    let y = 100/input;
    let x = Math.round(100/input)
    if(x-y <= 0.5){
        x = Math.floor(100/input);
    }

    root.style.setProperty('--flex',x.toString()+'%');
}





let field = 16*16;

const parent = document.getElementById('container');


for(let i = 0;i<field;i++){
    let div = document.createElement('div');
    div.classList.add('square');
    parent.appendChild(div);

}
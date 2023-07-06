function createGrid(dimension){
    let sketch_grid = document.querySelector('.sketch-grid');
    for (let i = 0; i < dimension; i++){
        let div_row = document.createElement('div');
        sketch_grid.appendChild(div_row);
        for (let j = 0; j < dimension; j++){
            let div_column = document.createElement('div');
            div_column.setAttribute('id',`box-${i},${j}`);
            div_row.appendChild(div_column);
            div_column.style.cssText = ('flex : 1; margin : 0px; transition: width 0.05s, height 0.05s;');
            div_column.style.background = 'red';
        }
        div_row.style.cssText = ('display: flex; flex: 1;');
    }
}

function OverBoxComplete(e){
    let id_box = e.target.id;
    let colors = ["rgb(238, 238, 238)", "rgb(204, 204, 204)", "rgb(170, 170, 170)", "rgb(153, 153, 153)", "rgb(119, 119, 119)", "rgb(85, 85, 85)", "rgb(51, 51, 51)", "rgb(34, 34, 34)", "rgb(17, 17, 17)", "#000000"]
    if (id_box && mouseIsDown){
        let elementID = document.getElementById(id_box);
        let currentColor = elementID.style.background;
        if (currentColor === 'red'){
            elementID.style.background = colors[0];
        }
        else{
            for (let i = 0; i<9 ; i++){
                if (currentColor == colors[i]){
                    elementID.style.background = colors[i+1];
                }
            }
        }
            
    }
}

var mouseIsDown = false;
game();
function game(){
    createGrid (16);
    addEventListener('mousedown', (e) => {mouseIsDown = true;});
    addEventListener('mouseup', (e) => {mouseIsDown = false;});
    addEventListener('mouseover', OverBoxComplete);
}


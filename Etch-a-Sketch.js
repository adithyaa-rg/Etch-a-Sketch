function createGrid(dimension){
    let sketch_grid = document.querySelector('.sketch-grid');
    for (let i = 0; i < dimension; i++){
        let div_row = document.createElement('div');
        div_row.setAttribute('id',`box-${i}`);
        sketch_grid.appendChild(div_row);
        for (let j = 0; j < dimension; j++){
            let div_column = document.createElement('div');
            div_column.setAttribute('id',`box-${i},${j}`);
            div_row.appendChild(div_column);
            div_column.style.cssText = ('flex : 1; margin : 0px; transition: width 0.05s, height 0.05s;');
            div_column.style.background = 'rgba(225, 250, 255)';
        }
        div_row.style.cssText = ('display: flex; flex: 1;');
    }
}

function deleteGrid(dimension){
    console.log("hi");
    let sketch_grid = document.querySelector('.sketch-grid');
    sketch_grid.innerHTML = '';
}

function OverBoxComplete(e){

    let id_box = e.target.id;
    let colors = ["rgb(238, 238, 238)", "rgb(204, 204, 204)", "rgb(170, 170, 170)", "rgb(153, 153, 153)", "rgb(119, 119, 119)", "rgb(85, 85, 85)", "rgb(51, 51, 51)", "rgb(34, 34, 34)", "rgb(17, 17, 17)", "#000000"]
    if (id_box && mouseIsDown){
        let elementID = document.getElementById(id_box);
        let currentColor = elementID.style.background;
        console.log(colourMode);
        if (colourMode === 'Grayscale'){
            if (currentColor == 'rgb(225, 250, 255)'){
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
        else if (colourMode === 'RGB'){
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            elementID.style.background = "#" + randomColor;
        }
    }
}
function changeSlideValue(initialValue){
    sliderValue = slider.value;
    let sliderDiv = document.getElementById('slideValue');
    sliderDiv.textContent = sliderValue;
    colourMode = colourElement.value;
    if (sliderValue != initialValue)
    {
        deleteGrid(parseInt(initialValue));
        createGrid(parseInt(sliderValue));
    }
}

function resetOption(){
    sliderValue = slider.value;
    deleteGrid(parseInt(sliderValue));
    createGrid(parseInt(sliderValue));
}
var slider = document.getElementById("myRange");
var colourElement = document.getElementById("colourSelect");
var mouseIsDown = false;
var sliderValue = slider.value;
var colourMode = colourElement.value;

changeSlideValue(sliderValue)
game();
function game(){
    createGrid (parseInt(sliderValue));
    addEventListener('mouseover', OverBoxComplete);
    addEventListener('mousedown', (e) => {
        mouseIsDown = true;
    });

    addEventListener('mouseup', (e) => {
        mouseIsDown = false;
        changeSlideValue(sliderValue);
    });
    
    let resetButton = document.querySelector('.gameplay');
    resetButton.addEventListener('click', resetOption);
}




function initialize_grid(size){

    containerLocation.style.setProperty('--size',size)
   
    const grid_container = document.createElement('div');
    grid_container.classList.add("grid_container");

        for(let idx = 0; idx <= size*size; idx++){
            const item = document.createElement('div');
            item.classList.add('pixel');
            // add Hover effect to change color
            item.addEventListener('mouseenter', changeColor,false);
            grid_container.appendChild(item);
        }

   
        containerLocation.appendChild(grid_container)


}

function changeColor(event){

        event.target.style.backgroundColor = "white";
        // optional to leave the following in:
    /*    setTimeout(() => {
            event.target.style.backgroundColor= "";
          }, 15000);    */
}

function clearBoard(event){

    //revert button back to original color
    event.target.style.backgroundColor="#EA4C89";
    // grab boxes and recert back to original color
    const boxes = document.getElementsByClassName('pixel')
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor="pink";
    } 

}

function updatePixel(event){


    //revert button back to original color
    event.target.style.backgroundColor="#EA4C89";

    const container= document.getElementsByClassName('grid_container');
    const items = document.getElementsByClassName('pixel');

    var newPixel = event.target.value
    //prompt("enter size: ")

   //default number of pixels
    if (!newPixel){
        newPixel = 6;
    }

    console.log(container.clientHeight)
    console.log(items.clientwidth)

    // remove nested divs and the canvas.
    for(let j = container.length-1; j >= 0; j--){

        for(let i = items.length-1; i >= 0 ; i--){
            console.log(items[i])
            items[i].remove();
        } 
        container[j].remove();
    }

    

   // initialPixels = newContainerCount;
   initialize_grid(newPixel)

}


// create the board
const toLoad = document.getElementById('chooseSize');
const containerLocation = document.querySelector('.content_display');
//pixel globally accessible for creating board


var size = 12


initialize_grid(size)

//clear board function
const toClear = document.getElementById('clear');
toClear.addEventListener('click',clearBoard);

//change pixel
const changePixel= document.getElementById('sizeRange');
changePixel.addEventListener('change', updatePixel);


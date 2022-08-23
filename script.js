
function initialize(e){
    
    const canvas = document.createElement('div');
   // canvas.classList.add('my-canvas');
    canvas.id="my-canvas";
    
        for(let idx = 1; idx <= initialPixels; idx++){
            
            const flexcontainer = document.createElement('div');    
            flexcontainer.classList.add('flexbox-container');

                for(let i = 0; i<= initialPixels; i++) {
                const square = document.createElement('div');
                square.classList.add("flexbox-item");
                //add my hover effect
                square.addEventListener('mouseenter', changeColor, false);
                flexcontainer.appendChild(square);
                }

            canvas.appendChild(flexcontainer);
        }
    containerLocation.appendChild(canvas);
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
    const boxes = document.getElementsByClassName('flexbox-item')
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor="pink";
    } 

}

function updatePixel(event){


    const mycanvas = document.getElementById('my-canvas');
    const containers= document.getElementsByClassName('flexbox-container');
    const items = document.getElementsByClassName('flexbox-item');
    const canvasStyle = getComputedStyle(mycanvas);
    const containerStyle = getComputedStyle(mycanvas);
    const boxStyle = getComputedStyle(mycanvas);
    
    
    var newPixel = prompt("enter size: ")
    var oldPixel = canvasStyle.
    var newContainerCount =  containers.clientHeight/newPixel
    var newItemCount = items.clientwidth/newPixel
    
    console.log(containers.clientHeight)
    console.log(items.clientwidth)

    // remove nested divs and the canvas.
    for(let j = containers.length-1; j >= 0; j--){

        for(let i = items.length-1; i >= 0 ; i--){
            console.log(items[i])
            items[i].remove();
        } 
        containers[j].remove();
    }

    mycanvas.remove()

   // initialPixels = newContainerCount;
    initialize();

}


// create the board
const toLoad = document.getElementById('chooseSize');
const containerLocation = document.querySelector('body');
//pixel globally accessible for creating board

var initialPixels = 18

initialize()

//clear board function
const toClear = document.getElementById('clear');
toClear.addEventListener('click',clearBoard);

//change pixel
const changePixel= document.getElementById('pixel');
changePixel.addEventListener('click', updatePixel);

/* -- my canvas
Largest width - 400
largest height - 400

--flexbox container - height 22
-- flexbox container - width 400

- smallest item 
max width


*/
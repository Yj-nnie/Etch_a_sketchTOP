
function initialize(e){
    
    const canvas = document.createElement('div');
   // canvas.classList.add('my-canvas');
    canvas.id="my-canvas";
    
        for(let idx = 1; idx <= 18; idx++){
            
            const flexcontainer = document.createElement('div');    
            flexcontainer.classList.add('flexbox-container');

                for(let i = 0; i<=18; i++) {
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
    /*    setTimeout(() => {
            event.target.style.backgroundColor= "";
          }, 15000);    */
    
}

function clearBoard(){
    console.log('hi')

    const boxes = document.getElementsByClassName('flexbox-item')
    for(let i = 0; i < boxes.length; i++){
        console.log(boxes[i]);
        boxes[i].style.backgroundColor="pink";
    }
    
}

// create the board
const toLoad = document.getElementById('chooseSize');
const containerLocation = document.querySelector('body');
//toLoad.addEventListener('click', initialize)

initialize()
const toClear = document.getElementById('clear');
toClear.addEventListener('click',clearBoard);



//size = window.prompt("how big do you want your board to be?");

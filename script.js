
function initiate(e){
    const canvas = document.createElement('div');
   // canvas.classList.add('my-canvas');
    canvas.id="my-canvas";
        for(let idx = 1; idx <= 16; idx++){
            
            const flexcontainer = document.createElement('div');    
            flexcontainer.classList.add('flexbox-container');

                for(let i = 0; i<=16; i++) {
                const square = document.createElement('div');
                square.classList.add("flexbox-item");

                //add my hover effect
                square.addEventListener('mouseenter', function(event){
                    event.target.style.backgroundColor = "purple";

                    setTimeout(() => {
                        event.target.style.backgroundColor= "";
                      }, 1000);    
                }, false);

                flexcontainer.appendChild(square);
                }
            canvas.appendChild(flexcontainer);
        }
    containerLocation.appendChild(canvas);
}

function changeColor(e){
    const item = e.target;
    item.style.color = "white";
}


// create the board
const toLoad = document.querySelector('button');
const containerLocation = document.querySelector('body');
toLoad.addEventListener('click', initiate)
/*
    var re = new RegExp ('flexbox-item flexbox-item-[0-9]')
    const hoveritems = document.getElementById('my-canvas').getElementsByClassName('flexbox-container').getElementsByClassName('flexbox-item"');
    console.log(hoveritems)
    console.log(hoveritems.namedItem)
//hoveritems.addEventListener('mouseover', changeColor) */
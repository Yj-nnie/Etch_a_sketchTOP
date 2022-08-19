
function initiate(e){
    const canvas = document.createElement('div');
    canvas.classList.add('my-canvas');

        for(let idx = 1; idx <= 16; idx++){
            
            const flexcontainer = document.createElement('div');    
            flexcontainer.classList.add('flexbox-container');

                for(let i = 0; i<=16; i++) {
                const square = document.createElement('div');
                square.classList.add("flexbox-item", "flexbox-item-"+i);
                flexcontainer.appendChild(square);
                }
            canvas.appendChild(flexcontainer);
        }
    containerLocation.appendChild(canvas);
}

function changeColor(e){
    const item = e.currentTarget;
    item.style.color = "white";
}


// create the board
const toLoad = document.querySelector('button');
const containerLocation = document.querySelector('body');
toLoad.addEventListener('click', initiate)

const hoveritems = document.querySelectorAll('.flex*')
hoveritems.addEventListener('mouseenter', changeColor)

function initiate(e){

    for(let idx = 1; idx <= 16; idx++){
        
        const container = document.createElement('div');    
        container.classList.add('flexbox-container');

            for(let i = 0; i<=16; i++) {
            const square = document.createElement('div');
            square.classList.add("flexbox-item", "flexbox-item-"+i);
            container.appendChild(square);
            }
        containerLocation.appendChild(container);
    }
}


// create the board
const toLoad = document.querySelector('button');
const containerLocation = document.querySelector('body');
toLoad.addEventListener('click', initiate)


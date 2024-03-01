// Costanti
const grid = document.querySelector('.grid');
const btnStart = document.querySelector('.btn-start');

// Funzione reset con il button
btnStart.addEventListener('click',init);



// Aggiungo la funzione che genera 100 quadrati
function init(){
    reset();
    for(let i = 1; i <= 100; i++){
        const square = getSquare(i);
        let bombs = bombGenerator[i];
        grid.append(square);
    }
}
function getSquare(indice){
    const square = document.createElement('div');
    square.className = 'square';
    // Metto in evidenza i numeri dei quadrati, se tolto vengono nascosti fino al click
    // square.innerHTML = indice;
    square.sqID = indice;
    // Funzione che mi restituirà l'elemento che clicco
    square.addEventListener('click', function(){
        // Elemento che fa apparire visivamente i numeri delle celle che premo
        // this.innerHTML = this.sqID;
        console.log(this.sqID);
        // Al click cambia colore, prendendo la classe creata in precedenza (clicked)
        this.classList.toggle('clicked');
    })

    return square;
}

// Create a function that generates 16 random numbers

function bombGenerator (){
    let arrBombs = [];
    for(let i = 0; i < 16; i++ ){
        let numBomba  = Math.floor(Math.random() * 100) + 1;
        arrBombs.push(numBomba);
    }
    return arrBombs;
}



// Funzione reset
function reset(){
    grid.innerHTML = '';
}
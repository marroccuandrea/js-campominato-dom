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
        grid.append(square);
    }
}
function getSquare(indice){
    const square = document.createElement('div');
    square.className = 'square';
    // Metto in evidenza i numeri dei quadrati, se tolto vengono nascosti fino al click
    square.innerHTML = indice;
    square.sqID = indice;
    // Funzione che mi restituirà l'elemento che clicco
    square.addEventListener('click', function(){
        this.innerHTML = this.sqID;
        console.log(this.sqID);
        // Al click cambia colore, prendendo la classe creata in precedenza (clicked)
        this.classList.toggle('clicked');
    })

    return square;
}

// Funzione reset
function reset(){
    grid.innerHTML = '';
}
// Costanti
const grid = document.querySelector('.grid');
const btnStart = document.querySelector('.btn-start');
const bombs = document.querySelector('.bombs');
// const gridBlock = document.querySelector('.gridblock')
let arrBombs = [];
let punteggio = 0;
// Funzione reset con il button
btnStart.addEventListener('click',init);

function bombGenerator(){
    
    while(arrBombs.length < 16){
       const randomNumber = Math.floor(Math.random() * 100) + 1;
        if(!arrBombs.includes(randomNumber)){
            arrBombs.push(randomNumber);
        }
    }
return arrBombs;
}

// Aggiungo la funzione che genera 100 quadrati
function init(){
    reset();
    bombGenerator();
    punteggio = 0;
    for(let i = 1; i <= 100; i++){
        const square = getSquare(i);
        grid.append(square);
    }
}
function getSquare(indice){
    const square = document.createElement('div');
    square.className = 'square';
    // Metto in evidenza i numeri dei quadrati, se tolto vengono nascosti fino al click
    // square.innerHTML = indice;
    square.sqID = indice;
    // Funzione che aumenta il punteggio e aggiunge la classe bombs
    // quando clicco su una casella in cui è presente la bomba
    square.addEventListener('click', function(){
        if (arrBombs.includes(indice)){
            square.classList.add('bombs');
            const endGame = document.createElement('div');
            endGame.className = 'gridblock';
            grid.append(endGame);
            alert(`Hai perso !  Hai fatto: ${punteggio} punti`);
        }else{
            punteggio++;
        }

        console.log(this.sqID);
        // Al click cambia colore, prendendo la classe creata in precedenza (clicked)
        this.classList.add('clicked');
        
        console.log(punteggio);
    })

    return square;
}

// Funzione reset
function reset(){
    grid.innerHTML = '';
}
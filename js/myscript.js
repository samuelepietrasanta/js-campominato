/**
     *  Il computer deve generare 16 numeri casuali tra 1 e 100.
        I numeri non possono essere duplicati.

        In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
        sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.

        Se il numero è presente nella lista dei numeri generati, la partita termina, 
        altrimenti si continua chiedendo all’utente un altro numero.  
        La partita termina quando il giocatore 
        inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

        Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
        l’utente ha inserito un numero consentito.
    * 
    */

    //  # PREPARATION
    //  1 - Creiamo un bell'array all'interno del quale inserire (poi) le bombe
    //  2 - Genero un numero randomico e lo inserisco all'interno dell'array di cui sopra ^, 
    //       FINCHE' non arrivo a 16

    //  3 - Crea un array per ricordare i numeri (scelti) dall'utente
    // **** Creo una variable di appoggio per il punteggio

    // # GAMEPLAY
    // 1) Chiedere un numero all'utente
    // 2) Controllare che il numero non sia presente nell'array di bombe !!! ALTRIMENTI KABOOM
    // 3) Controllo se per caso lo aveva già scelto (è già presente nell'array dei numeri scelti dall'utente)
    // 4) Se il numero non è esplosivo e non è stato scelto, lo aggiungo nell'array dei numeri scelti
    //  

    // # ENDGAME
    // a. Stampiamo il messaggio di alert del gioco (se hai vinto o perso)
    // b. Stampiamo il punteggio del giocatore



let bombe = arrayBombe(15);

// alert("le bombe sono " + bombe)  usato per barare e vedere quali sono le bombe


let numeriUtente = [];

let sconfitta = false;

let play = document.getElementById("bottone-play");

play.addEventListener('click', 
function(){
    while (sconfitta == false && numeriUtente.length < (5)){
        let punteggio = numeriUtente.length;
        let numeroScelto = parseInt(prompt("scegli un numero tra 1 e 100"));
        if (numeriUtente.includes(numeroScelto)) {
            alert("Questo numero è già stato scelto");
        }else if(bombe.includes(numeroScelto)){
            sconfitta = true;
            document.write("hai perso. " + numeroScelto + " era una bomba. Il tuo punteggio finale è:  " + punteggio)
        }else{
            numeriUtente.push(numeroScelto);
        }
    }
    
    if (numeriUtente.length == (5)){
        document.write("complimenti hai vinto!");
    }
})



console.log(bombe);
console.log(numeriUtente);



//  FUNZIONI
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function arrayBombe(lunghezza){
    let mioArray = [];
    while (mioArray.length <= lunghezza){
        let numeroGenerato = getRandomInt(1 , 100);
        if (! mioArray.includes(numeroGenerato)){
            mioArray.push(numeroGenerato);
        }
    }
    return mioArray
}

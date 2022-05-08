/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let scelta = prompt("scegliere pari o dispari");
let even = "pari"
const odd = "dispari"
while(scelta != odd && scelta != even){
    scelta = prompt("scegliere pari o dispari");
} // controllo sulla variabile scelta 
console.log("la tua scelta è :",scelta) // stampo la scelta

let numGuest = Number(prompt("scegli un un numero tra 1 e 5"));
while(numGuest < 1 || numGuest > 5){
    numGuest = Number(prompt("scegli un un numero tra 1 e 5"));
} 
console.log("numero guest:",numGuest); // stampo numero guest

let numCpu = randomNumber(1,5); // invoca funzione randomNumber
console.log("numero cpu:",numCpu);

const sum = numGuest + numCpu ;
evenOrOdd (sum,even,scelta); // verifico se la somma è pari e stampo il risultato

console.log("somma numeri:",sum);

// funzione numero random
function randomNumber (min,max) {
    return Math.floor((Math.random() * max) + min);
}

//funzione somma pari o dispari e verifica vincitore
// ad x passiamo il valore pari , ad y la scelta
function evenOrOdd (total,x,y){
    if (total % 2 === 0 ){
        x = 'pari';
        console.log("la somma è pari")
    } else {
        x = 'dispari';
        console.log("la somma è dispari")
    }

    if (y === x ){
        console.log ("il giocatore ha vinto")
    } else {
        console.log("ha vinto la cpu")
    }

}




/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

let word = prompt("inserire una parola");
//metodo 1 con funzioni javascript
palindrome(word);
//metodo 2 con funzione_custom
palindrome_2(word);

// metodo 1 
function palindrome (string) {
    const stringArray = string.split('');//converte la parola in array
    const stringArrayReverse = stringArray.reverse('') // legge l'array al contrario
const stringReverse = stringArrayReverse.join('');//rende un array una stringa 

// confronto della parola originale con quella inverita 
if ( string === stringReverse){
    console.log("la parola", string , "è palindroma");
} else {
    console.log("la parola", string , "non è palindroma");
}
}

// metodo 2

function palindrome_2 (string){
    let i = string.length - 1; // passo la lunghezza della parola ad i per utilizzarlo come contatore dell'array, -1 per prendere anche la posizione 0 dell'array
   let char; // variabile che utilizzo per prendere i caratteri al contrario
   let stringReverse = ''; // dichiaro una parola vuota da utilizzare come contenitore della parola invertita 
   

   //while per scorrere la parola 
   while (i >= 0){
        char = string[i]; //passo l'ultima lettera a char e la ricmopongo in stringReverse 
        stringReverse += char; // ricompongo la parola al contrario
        i--; // decremento il contatore per scorrere la parola al contrario 
   }
    console.log(stringReverse);

    if ( string === stringReverse){
        console.log("la parola", string , "è palindroma");
    } else {
        console.log("la parola", string , "non è palindroma");
    }
}




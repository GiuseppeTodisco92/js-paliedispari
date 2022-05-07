/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

let word = prompt("inserire una parola");
//metodo 1 con funzioni javascript
palindrome(word);


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




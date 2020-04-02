/**
 * ESERCIZIO PALINDROMO
 * DESCRIZIONE ESERCIZIO:
 * - ACQUISIRE DALL'UTENTE LA PAROLA
 * - CREARE LA FUNZIONE CHE CALCOLI SE LA PAROLA E' PALINDROMA O MENO
 */

// ACQUISISCO LA PAROLA E LA MANTENGO IN UNA VARIABILE
/*
var parola = prompt('Inserisci la parola');
console.log(parola);
console.log(typeof(parola));


// CREO LA MIA FUNZIONE PER INVERTIRE I CARATTERI
function invertiCaratteri () {
  // INIZIALIZZO UNA VARIABILE CHE CONTERRA' LA MIA PAROLA INVERTITA
  var reverse = '';
  // INIZIALIZZO UN CICLO FOR PER LEGGERE I CARATTERI SINGOLARMENTE PARTENDO DALLA FINE DELL'INDICE
  for(var i = parola.length -1; i >= 0; i--) {
    // MEMORIZZO PER SINGOLO CICLO LA LETTERA ALL'ENNESIMO INDEX
    reverse += parola[i];
    console.log(reverse);
    
  }
  // RITORNO IL VALORE DI TUTTA LA STRINGA OTTENUTA
  return reverse;
} 

//INVOCO LA FUNZIONE
var parolaInvertita = invertiCaratteri(parola);
//console.log(parolaInvertita);

if (parola == '') {
  console.error('ERRORE');
  
} else if (parola == parolaInvertita) {
  console.log("La tua parola E' palindroma");
  
} else {
  console.log("La tua parola NON è PALINDROMA");
}

*/
/**
 * L’utente sceglie pari o dispari e un numero da 1 a 5.
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.
 */

// INIZIALIZZO LA VARIABILE PER LA SCELTA DEL PARI O DISPARI
var scelta = prompt('Stabilisci se essre pari o dispari');
console.log(scelta);
/*if (scelta !== 'pari' || 'dispari') {
  console.error('ERRORE RIPETERE LA SCELTA');
  scelta = '';

}*/

// INIZIALIZZAZIONE DELLA VARIABILE NUMERO UTENTE
var userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(userNumber);

// DICHIARO LA VARIABILE DEL PC CHE CONTERRA' IL RICHIAMO ALLA FUNZIONE CON DEFINITI I VALORI
var numberPc = numeroCasuale(1, 5);


// CREO LA FUNZIONE PER GENERARE UN NUMERO CASUALE DA ASSEGNARE AL PC CHE RISPETTI I VALORI DI MIN E MAX DEFINITI

function numeroCasuale (min , max) {
  var numberRandom = Math.floor(Math.random()* (max - min + 1) ) + min;
  console.log("QUESTA E' LA STAMPA DELLA FUNZIONE " + numberRandom); 
  return numberRandom;
}

var totSomma = userNumber.value + numberPc.value;
console.log(totSomma);


/**
 * ESERCIZIO PALINDROMO
 * DESCRIZIONE ESERCIZIO:
 * - ACQUISIRE DALL'UTENTE LA PAROLA
 * - CREARE LA FUNZIONE CHE CALCOLI SE LA PAROLA E' PALINDROMA O MENO
 */

// ACQUISISCO LA PAROLA E LA MANTENGO IN UNA VARIABILE
var parola = prompt('Inserisci la parola');
parola = parola.toLowerCase;
console.log(parola);
console.log(typeof(parola));


// CREO LA MIA FUNZIONE PER INVERTIRE I CARATTERI
function invertiCaratteri (stringa) {
  // INIZIALIZZO UNA VARIABILE CHE CONTERRA' LA MIA PAROLA INVERTITA
  var reverse = '';
  // INIZIALIZZO UN CICLO FOR PER LEGGERE I CARATTERI SINGOLARMENTE PARTENDO DALLA FINE DELL'INDICE
  for(var i = parola.length -1; i >= 0; i--) {
    // MEMORIZZO PER SINGOLO CICLO LA LETTERA ALL'ENNESIMO INDEX
    reverse += parola[i];
  }
  // RITORNO IL VALORE DI TUTTA LA STRINGA OTTENUTA
  return reverse;
} 

//INVOCO LA FUNZIONE
var ParolaInvertita = invertiCaratteri(parola);
console.log(ParolaInvertita);

if (parola == ParolaInvertita) {
  console.log('La tua parola è PALINDROMA');
  
} else {
  console.log('La tua parola non è PALINDROMA');
  
}
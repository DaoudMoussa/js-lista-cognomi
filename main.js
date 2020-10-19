// lista cognomi
// Creare un array contenente dei cognomi in ordine casuale.
// Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
// Stampare la lista dei cognomi in ordine alfabetico e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).

// Creazione array contenente cognomi in ordne sparso
var lastNameList = ['Moussa', 'Esposito', 'Russo', 'Abate', 'Torchia', 'Barone', 'Sardo', 'Conte'];

// Creazione array che conterrá la lista dei cognom ordinata
var sortedLastNameList = [];
// Inserimento cognome dell'utente finché línput non sia valido (deve essere una stringa che cominci con una lettera)
var userLastName;
do {
    // Inserimento cognome utente
    userLastName = prompt('Inserisci il tuo cognome');

    // Alert nel caso l'input sia un numero
    if(!isNaN(userLastName)) {
        alert('Input inserito non valido');
    }
} while(!isNaN(userLastName))

// Conversione in maiuscola della prima lettera del cognome
userLastName = userLastName.charAt(0).toUpperCase() + userLastName.slice(1);
// Inserimento cognome dell'utente nell'array
lastNameList.push(userLastName);

// CON FUNZIONI JS //
lastNameList.sort();
var userLastNamePosition = lastNameList.indexOf(userLastName);

console.log('lista cognomi in ordine alfabetico: ' + lastNameList);
console.log('posizione cognome utente numero: ' + userLastNamePosition);

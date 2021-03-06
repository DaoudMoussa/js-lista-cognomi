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

// SENZA FUNZIONI JS //
// variabile che conta quante volte il nome inserito dallútente é presente nell'array
var equalLastNames = 0;
// conteggio delle volte che si ripete il cognome inserito dall'utente
for (var i = 0; i < lastNameList.length; i++) {
    if(userLastName == lastNameList[i]) {
        equalLastNames++;
    }
}

console.log('equalLastNames ' + equalLastNames);
var userLastNamePosition;
while(lastNameList.length > sortedLastNameList.length) {
    //Creazione variabile stringa con all'interno un carattere maggiore di tutte le lettere dell'alfabeto
    var currentString = '{';

    // ciclo che compara la currentString con tutte le stringe della lista e prende la piú piccola che non é gia presente nell'array ordinato
    for (var i = 0; i < lastNameList.length; i++) {
        if (lastNameList[i] == userLastName){
            // se lélemento nell'array in posizione i: é i cognome dell'utente, é minore di currentString e il contatore di nomi uguali é piú grande di 0 allora currentString = lastName[i]
            if(lastNameList[i] < currentString && equalLastNames > 0) {
                currentString = lastNameList[i];
            }
        } else {
            // Se l'elemento dell'array in posizione i: non é il cognome dell'utente, é piú piccolo di currentString e non é presente nell'array ordinato allora currentString diventa quell'elemento
            if(lastNameList[i] < currentString && !sortedLastNameList.includes(lastNameList[i])) {
                currentString = lastNameList[i];
            }
        }
    }
    console.log(currentString);
    sortedLastNameList.push(currentString);
    // Se currentString é il cognome dell'utente allora il cognome dellútente l'ultimo elemento Inserito
    if(currentString == userLastName) {
        userLastNamePosition = sortedLastNameList.length - 1;
        equalLastNames--;
    }
}

// Stampa array ordinato
console.log(sortedLastNameList);

//Stampa posizione del cognome dellútente nell'array
console.log('Il cognome dell\'utente é nella posizione: ' + userLastNamePosition);

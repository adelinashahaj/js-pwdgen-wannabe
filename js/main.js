//nome
let myName = prompt("Dimmi come ti chiami");
console.log( myName);
document.getElementById('nome').innerHTML = `Nome: ${myName}`; 

//cognome
let myUsername = prompt("Dimmi il tuo cognome");
document.getElementById('cognome').innerHTML = `Cognome: ${myUsername}`;
console.log( myUsername);

//colore preferito
let myColor = prompt("Dimmi il tuo colore preferito");
document.getElementById('colore').innerHTML = ` Colore preferito: ${myColor}`;
console.log( myColor);

//titti i dati insieme
let dati = myName + myUsername + myColor + "23";
document.getElementById('datiL').innerHTML = `${dati}`;
console.log( dati);
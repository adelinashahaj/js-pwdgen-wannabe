let myName = prompt("Dimmi come ti chiami");

console.log( myName);

document.getElementById('hello').innerHTML = `Nome: ${myName}`; 


let myusername = prompt("Dimmi il tuo cognome");
document.getElementById('cognome').innerHTML = `Cognome: ${myusername}`


let mycolor = prompt("Dimmi il tuo colore preferito");
document.getElementById('colore').innerHTML = ` Colore preferito: ${mycolor}`
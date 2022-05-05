alert("Sono Javascript e sono lieto di servirti");

var nomeGioctore = window.prompt("Ciao, inserisci il tuo nome");

document.getElementById("titolo").innerHTML = "Benvenuto " + nomeGioctore;

var sceltaUtente;

function cliccatoCarta() {
  sceltaUtente = "carta";
  alert(nomeGioctore + " hai scelto " + sceltaUtente);
}

function cliccatoSasso() {
  sceltaUtente = "sasso";
  alert(nomeGioctore + " hai scelto " + sceltaUtente);
}

function cliccatoForbici() {
  sceltaUtente = "forbici";
  alert(nomeGioctore + " hai scelto " + sceltaUtente);
}

function verdetto() {
  document.getElementById("carta").style.display = "none";
  document.getElementById("forbici").style.display = "none";
  document.getElementById("sasso").style.display = "none";
  document.getElementById("pulsante").style.display = "none";
  var sceltaComputer;
  if (sceltaUtente == "carta") {
    sceltaComputer = "forbici";
  }
  if (sceltaUtente == "forbici") {
    sceltaComputer = "sasso";
  }
  if (sceltaUtente == "sasso") {
    sceltaComputer = "carta";
  }
  document.getElementById("titolo").innerHTML =
      nomeGioctore + " HAI PERSO MUHAHAHAHAHA";
    
  document.getElementById("informazioni").innerHTML =
    nomeGioctore +
    " Il computer ha scelto " +
    sceltaComputer +
    ". Tu, stupido, hai scelto " +
    sceltaUtente;
}

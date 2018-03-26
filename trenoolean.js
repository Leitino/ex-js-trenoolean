var treniRoma= [];
var treniMilano= [];

for (var i = 0; i < 10; i++) {
  var nuovo_treno = {
    'numTreno' : randomNum(),
    'stazionePartenza' : 'Roma',
    'stazioneArrivo' : 'Firenze',
    'durataViaggioMin' : casuale(200, 250),
    'orarioPartenza' : randomPartenza(),
    'postiLiberi' : postiLiberi(),
  }

  console.log(nuovo_treno)
}

  function randomNum() {
    var numTreno = "";
    for (var i = 0; i < 4; i++) {
      numTreno +=casuale(0,9)
    }
    return numTreno
  }

  function randomPartenza() {
    var orarioPartenza = "";
    for (var i = 0; i < 1; i++) {
      orarioPartenza =casuale(8,20)
    }
    return orarioPartenza
  }

  function postiLiberi() {
    for (var i = 0; i < 1; i++) {
      var postiTotali = casuale(200, 250);
      var postiPrenotati = casuale(0, postiTotali);
      var postiDisponibili = postiTotali-postiPrenotati;
    }
    return postiDisponibili
  }



  function casuale(inizio,fine) {
    return Math.floor(Math.random() * (inizio + fine +1)) + inizio;
  }

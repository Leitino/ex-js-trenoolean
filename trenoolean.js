var treniRoma= [];
var treniMilano= [];

for (var i = 0; i < 10; i++) {
  var nuovo_treno = {
    'numTreno' : randomNum(),
    'stazionePartenza' : 'Roma',
    'stazioneArrivo' : 'Firenze',
    'durataViaggioMin' : casuale(200, 220),
    'orarioPartenza' : casuale(5, 19),
    'postiLiberi' : postiLiberi(),
  }
  treniRoma.push(nuovo_treno)
}
  console.log(treniRoma)

  for (var i = 0; i < 10; i++) {
    var nuovo_treno = {
      'numTreno' : randomNum(),
      'stazionePartenza' : 'Milano',
      'stazioneArrivo' : 'Roma',
      'durataViaggioMin' : casuale(200, 220),
      'orarioPartenza' : casuale(5, 19),
      'postiLiberi' : postiLiberi(),
    }
    treniMilano.push(nuovo_treno)
  }
    console.log(treniMilano)

  function randomNum() {
    var numTreno = "";
    for (var i = 0; i < 4; i++) {
      numTreno +=casuale(0,9)
    }
    return numTreno
  }

  function postiLiberi() {
      var postiTotali = casuale(0, 250);
      var postiPrenotati = casuale(0, postiTotali);
      var postiDisponibili = postiTotali - postiPrenotati
    return postiDisponibili
  }



  function casuale(inizio,fine) {
    return Math.floor(Math.random() * (inizio + fine )) + inizio;
  }

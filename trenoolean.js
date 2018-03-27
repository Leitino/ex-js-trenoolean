var treniRoma= [];
var treniMilano= [];

for (var i = 0; i < 10; i++) {
  var nuovo_treno = {
    'numTreno' : randomNum(),
    'stazionePartenza' : 'Roma',
    'stazioneArrivo' : 'Firenze',
    'durataViaggioMin' : Math.floor(Math.random()*240)+150)
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
      'durataViaggioMin' : Math.floor(Math.random()*240)+150)
      'orarioPartenza' : casuale(5, 19),
      'postiLiberi' : postiLiberi(),
    }
    treniMilano.push(nuovo_treno)
  }
    console.log(treniMilano)

for (var i = 0; i < treniRoma.length; i++) {
  var partePrima = treniRoma[i].orarioPartenza;
  if (treniRoma[i].orarioPartenza<partePrima) {
    partePrima=treniRoma[i].orarioPartenza

  }
  console.log(partePrima)
}
console.log(partePrima)




  function randomNum() {
    var numTreno = "";
    for (var i = 0; i < 4; i++) {
      numTreno += Math.floor(Math.random()*9)
    }
    return numTreno
  }

  function postiLiberi() {
      var postiTotali = Math.floor(Math.random()*500)+300)
      var postiPrenotati = Math.floor(Math.random()*postiTotali)+1)
      var postiDisponibili = postiTotali - postiPrenotati
    return postiDisponibili
  }

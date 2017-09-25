document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
});

///objects for each speech///

var churchhillSpeech={
    author:'Winston Churchill',
    year:   1940,
    BCE:    false,
}

var ghandiSpeech={
    author:'Ghandi',
    year:   1942,
    BCE:    false,
}

var demosthenesSpeech={
    author:'Demosthenes',
    year:   342,
    BCE:    true,
}

///an array for the speeches///
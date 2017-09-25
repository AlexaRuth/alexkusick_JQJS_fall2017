////event listeners////

document.getElementById('BtnDonate').addEventListener('click', function(){
  console.log(" There are " 
  	+allSpeeches.length+" speeches on this page. ");
	});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  console.log(" This speech was written by "
	+allSpeeches[0].author+" in " 
	+allSpeeches[0].year+" . It is " 
	+allSpeeches[0].BCE+" that this year is B.C.E. ");
	});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  console.log(" This speech was written by " 
  	+allSpeeches[1].author+" in " 
  	+allSpeeches[1].year+". It is " 
  	+allSpeeches[1].BCE+" that this year is B.C.E. ");
	});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  console.log(" This speech was written by " 
  	+allSpeeches[2].author+" in " 
  	+allSpeeches[2].year+" . It is " 
  	+allSpeeches[2].BCE+" that this year is B.C.E. ");
	});


////objects for each speech////

var churchillSpeech ={
    author:'Winston Churchill',
    year:   1940,
    BCE:    false,
    }

var ghandiSpeech ={
    author:'Ghandi',
    year:   1942,
    BCE:    false,
    }

var demosthenesSpeech ={
    author:'Demosthenes',
    year:   342,
    BCE:    true,
    }

////an array for the speeches////

var allSpeeches =[
    churchillSpeech,
    ghandiSpeech,
    demosthenesSpeech
    ];

////variable calculation////

var difference = 
    ghandiSpeech.year - 
    churchillSpeech.year;

///Console log statment////
console.log(" Ghandi's & Churchill's speeches are "
	+difference+ " years apart. ");





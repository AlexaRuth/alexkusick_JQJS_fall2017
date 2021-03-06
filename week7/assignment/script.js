//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt,
    ConsoleDisplay = document.getElementById('ConsoleDisplay'),
    oldest = speechesArray[0].year,
	newest = speechesArray[0].year;


//"Donate" button.
document.getElementById('BtnDonate').addEventListener('click', function(){
  
    var newDonation = window.prompt('How much would you like to donate?'),
        title = document.createElement('h2'),
		articles = document.getElementsByTagName('article');
    
    if (donation <100){
        var newDonation = document.createTextNode("Thank you for your donation of $" + donation +);
        }
     } else if(donation >= 100) {
        var newDonation = document.createTextNode("Thank you! for your very generous donation.");
        }   
    
    title.appendChild (textNode);
    document.getElementById('SideNav').appendChild(title);
    
    for (var i=0; i<articles.length; i++){
        articles[i].className = 'generous-donation';
    }
    
});


//"Churchill" button.

document.getElementById('BtnChurchill').addEventListener('click', function(){
  
  consoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    consoleDisplay.innerHTML += '<br> "This speech took place before the common era."';
  }else{
   consoleDisplay.innerHTML += '<br> "This speech took place during the common era."';
  }

  if(speechesArray[0].year === oldest){
    consoleDisplay.innerHTML += '<br>  "This is the oldest speech on the page."';
  }
  if(speechesArray[0].year === newest){
    consoleDisplay.innerHTML += '<br>  "This is the most recent speech on the page."';
  }
});

//"Ghandi" button.
document.getElementById('BtnGhandi').addEventListener('click', function(){
  
  consoleDisplay.innerHTML = 'This speech was written by' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    consoleDisplay.innerHTML +=  '<br> "This speech took place before the common era."';
  }else{
    consoleDisplay.innerHTML += '<br>  "This speech took place during the common era."';
  }

  if(speechesArray[1].year === oldest){
    consoleDisplay.innerHTML += '<br>  "This is the oldest speech on the page."';
  }
  if(speechesArray[1].year === newest){
    consoleDisplay.innerHTML += '<br>  "This is the most recent speech on the page."';
  }
});


//"Demosthenes" button.
document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  
  consoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    consoleDisplay.innerHTML += '<br> "This speech took place before the common era."';
  }else{
    consoleDispaly.innerHTML += '<br> "This speech took place during the common era."';
  }

  if(speechesArray[2].year === oldest){
    consoleDisplay.innerHTML = '<br> "This is the oldest speech on the page."';
  }
  if(speechesArray[2].year === newest){
    consoleDisplay.innerHTML = '<br> "This is the most recent speech on the page."';
  }
});
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
    
speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];


//PROMPT//

var User = window.prompt("What's your name?");

//CONSOLE RESPONSE//

if(User.length >= 1) 
{ console.log("Hi "+User+"!"); } 

else 
{ console.log("Ok, I'll just call you User."); }




//AUTHOR AGES//

document.getElementById('BtnDonate').addEventListener('click', function(){
//Code in here executes when the user clicks the "Donate" button.//
    
var favAuthor = window.prompt("Who is your favorite author");

switch (favAuthor){

case "Churchill":
  console.log(speechesArray[0].author + " was " + speechesArray[0].authorAge + " during this speech.");
  break;

case "Ghandi":
  console.log(speechesArray[1].author + " was " + speechesArray[1].authorAge + " during this speech.");
  break;

case "Demosthenes":
  console.log(speechesArray[2].author + " was " + speechesArray[2].authorAge + " during this speech.");
  break;

default:
  console.log("Sorry, you either misspelled the authors name, or not entered one. Please try again!");
  break;
  }     
});



//CHURCHHILL INFO//
document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.

 
 


});




//GHANDI INFO//
document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.





});



//DEMOSTHENES INFO//
document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
});
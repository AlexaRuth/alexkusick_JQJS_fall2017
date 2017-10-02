//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible


//VARIABLES//

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

//**can an array that is organizing variables also be kept with the variables? just wondeirng**//

var User = window.prompt("What's your name?");
if (typeof User === 'string' && User !== ""){
    console.log("Hi " + User + "!");}
else{
    console.log("Ok, I'll just call  you User");
}

//AUTHOR AGES//

document.getElementById('BtnDonate').addEventListener('click', function(){
//Code in here executes when the user clicks the "Donate" button.//
    
var favAuthor = window.prompt("Who is your favorite author");

var answer;
    
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
        console.log("Sorry, you either misspelled the authors name, or you did not entered one. Please try again!");
        break;
  }     
});

////NOTES FROM W3 EXPLANATIONS ON IF/ELSE STATEMENTS    

//    apparently you can string these if then statments together...

//    if (condition1) {
//    block of code to be executed if condition1 is true
//    } else if (condition2) { block of code to be executed if the condition1 is false and condition2 is true
//    } else { block of code to be executed if the condition1 is false and condition2 is false}


//CHURCHHILL INFO//
document.getElementById('BtnChurchill').addEventListener('click', function(){
    console.log("This speech was written by" + speechesArray[0].author + " in " + speechesArray[0].year + ".");
    
speechesArray[0].yearIsBCE == true 
    console.log ('This speech was written during the common era.');

if (speechesArray[0].year > speechesArray[1].year && speechesArray[2].year){  
     console.log ('This is the most recent speech on the page.');

} else if (speechesArray[0].year < speechesArray[1].year && speechesArray[0].year < speechesArray[2].year){
     console.log ('This is the oldest speech on the page.');  
}
});


//GHANDI INFO//
document.getElementById('BtnGhandi').addEventListener('click', function(){
    console.log("This speech was written by" + speechesArray[1].author + " in " + speechesArray[1].year + ".");
    
speechesArray[1].yearIsBCE == true
    console.log ('This speech was written during the common era.');
    
if (speechesArray[1].year > speechesArray[0].year && speechesArray[2].year){  
    console.log ('This is the most recent speech on the page.');

}else if (speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year){
    console.log ('This is the oldest speech on the page.');         
}
});


//DEMOSTHENES INFO//
document.getElementById('BtnDemosthenes').addEventListener('click', function(){
    console.log("This speech was written by" + speechesArray[0].author + " in " + speechesArray[0].year + ".");
    
speechesArray[2].yearIsBCE == true
    console.log ('This speech was written during the common era.');

if (speechesArray[2].year > speechesArray[0].year && speechesArray[1].year){  
    console.log ('This is the most recent speech on the page.');

}else if (speechesArray[2].year < speechesArray[0].year && speechesArray[2].year < speechesArray[1].year){
    console.log ('This is the oldest speech on the page.');       
}
});
    
    
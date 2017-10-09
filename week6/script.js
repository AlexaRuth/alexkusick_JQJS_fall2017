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
    userNamePrompt,
    favoriteSpeechPrompt,
    oldestYear = speechesArray[1],
    recentYear = speechesArray[1]
    i=0;

//CODE HERE HAS BEEN DELETED AND UPDATED WITH THE FOLLOWING
  
/// WHILE LOOP   
while (i < speechesArray.length){
    console.log ("this speech is written by" + speechesArray[i].author); i+=1;
    };
    
/// FOR LOOP RECENT AND OLDEST SPEECHES 
for(i = 0; i < speechesArray.length; i++) {
if(speechesArray[i].year < oldestYear) 
    { oldestYear = speechesArray[i].year;
} else if (speechesArray[i].year > recentYear) 
    { recentYear = speechesArray[i].year;
    };
};


/// FOR LOOP REGULAR BUTTON
document.getElementById('BtnDonate').addEventListener('click', function(){

//Code in here executes when the user clicks the "Donate" button.
favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');

///NOT SURE WHERE TO PLACE MY BREAK STATEMENT     
    
for(i = 0; i < speechesArray.length; i++){
if(favoriteSpeechPrompt === speechesArray[i].author){ break; }{
console.log (
    speechesArray[i].author + " was " +
    speechesArray[i].authorAge + " during this speech "); 
};
};
});


/// WHERE DO I PUT THE NEW CODE IN? 





/// BUTTON CHURCHILL 
document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[0].year < speechesArray[1].year && speechesArray[0].year < speechesArray[2].year){
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[0].year > speechesArray[1].year && speechesArray[0].year > speechesArray[2].year){
    console.log('This is the most recent speech on the page.');
  }
});
        

/// BUTTON GHANDI
document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year){
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[1].year > speechesArray[0].year && speechesArray[1].year > speechesArray[2].year){
    console.log('This is the most recent speech on the page.');
  }
});

        
/// BUTTON DEMOS
document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[2].year < speechesArray[0].year && speechesArray[2].year < speechesArray[1].year){
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[2].year > speechesArray[0].year && speechesArray[2].year > speechesArray[1].year){
    console.log('This is the most recent speech on the page.');
  }
});



//GET RID OF THE USER PROMPT WHEN YOU OPEN THE SITE? //
//I DIDNT DELETE THIS JUST HID IT FROM THE BROWE=SER.//

//  userNamePrompt = window.prompt('Hello, what is your name?');
//  if(typeof userNamePrompt === 'string' && userNamePrompt !== ''){
//      console.log('Hi ' + userNamePrompt + '!');
//          }else{
//      console.log('Ok, I\'ll just call you User.');
//      userNamePrompt = 'User';
//      }
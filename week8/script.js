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
donatePrompt;



/// DONATE BUTTON ///

document.getElementById('BtnDonate').addEventListener('click', function(){
    
var donationDisplay = document.createElement('h3'),
    donationText,
    articleElements;
    donatePrompt = window.prompt('How much would you like to donate?');

if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');
    articleElements = document.getElementsByTagName('article');
      
for(var i = 0; i < articleElements.length; i++){
    articleElements[i].className = 'generous-donation';}}
    
else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
    }

    donationDisplay.appendChild(donationText);
    document.getElementById('SideNav').appendChild(donationDisplay);
});



/// FUNCTION displayBCEString()
/* boolean test on yearIsBCE
- via .inner HTML command the dtring is/ isnt shown on the ConsoleDisplay
- to accept speecharray info */

function displayBCEString(speechInfo){ 

    if(speechesArray[speechInfo].yearIsBCE === true){ 
    return "This speech took place before the common era.<br>";}
else{
    return "This speech took place during the common era.<br>";}
  }



/// FUNCTION getAuthorAndYearString()
/* accept speecharray info 
- consolde display via innerHTML recieves author name and speech year*/

function getAuthorAndYearString(speechInfo) {
     return "This speech was written by " + speechesArray[speechInfo].author + " in " + speechesArray[speechInfo].year + ".<br>"
 }



/// FUNCTION getOldestOrYoungestString()

function getOldestOrYoungestString(speechInfo){
    var oldest = speechesArray[0].year, 
        newest = speechesArray[0].year;

for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest) {
        oldest = speechesArray[i].year;}

if(speechesArray[i].year > newest){ newest = speechesArray[i].year;} 
}

if(speechesArray[speechInfo].year === oldest){ 
    return "This is the oldest speech on the page.<br>";} 
    
else if(speechesArray[speechInfo].year === newest){ 
    return "This is the most recent speech on the page.<br>";} 
    
else{ 
    return "This is neither the most recent nor the oldest speech on the page.<br>";}
}




/// CHURCHILL BUTTON WITH FUNCTION APLIED
///This seems odd to me... are we really only getting rid of the speech arrays??? .... it does clean up the code a lot so this make sense but just shocked by how much it frees up space.///

document.getElementById('BtnChurchill').addEventListener('click', function(){
document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(0); 
document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(0); 
document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(0); 
});

/// GHANDI BUTTON ///

document.getElementById('BtnGhandi').addEventListener('click', function(){
document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(1); 
document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(1); 
document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(1); 
});



/// DEMOSTHENES BUTTON ///

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(2); 
document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(2); 
document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(2); 
});
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
    }
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];



var isBCE = {
    'statement' : "This speech took place before the common era."
    },
    isNotBCE = {
    'statement' : "This speech took place during the common era."
    }
    eraArray = [isBCE, isNotBCE];




var name = window.prompt('What is your name?');

if (typeof name === 'string' && typeof name !== ""){
    console.log("Hi " + name + "!");
} else {
    console.log("Ok. I'll just call you User.");
}


document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
    var favAuthor = window.prompt("Which is your favorite author?");
    var answer;

    switch (favAuthor) {
        case "Churchill":
            answer = alert(speechesArray[0].author + "was " + speechesArray[0].authorAge + " during this speech.");
            break;

        case "Ghandi":
            answer = alert(speechesArray[1].author + "was " + speechesArray[1].authorAge + " during this speech.");
            break;

        case "Demosthenes":
            answer = alert(speechesArray[2].author + "was " + speechesArray[2].authorAge + " during this speech.");
            break;

        default:
            answer = alert("Oooops. Looks like you may have misspelled the name of your favorite author. We won't let that hold things up, however.");
            break;
    }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
    alert("This speech was written by " + speechesArray[0].author + " in " + speechesArray[0].year + " .");

    if(speechesArray[0].yearIsBCE === true) {
        console.log(eraArray[0].statement);
    } else {
        console.log(eraArray[1].statement);
    }

    if(speechesArray[0].year < speechesArray[1].year && speechesArray[0].year < speechesArray[2].year){
        alert("This is the oldest speech on the page.");
    } else if(speechesArray[0].year > speechesArray[1].year && speechesArray[0].year > speechesArray[2].year){
        alert("This is the most recent speech on the page.");
    }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
    alert("This speech was written by " + speechesArray[1].author + " in " + speechesArray[1].year + " .");

    if(speechesArray[1].yearIsBCE === true) {
        console.log(eraArray[0].statement);
    } else {
        console.log(eraArray[1].statement);
    }

    if(speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year){
        alert("This is the oldest speech on the page.");
    } else if(speechesArray[1].year > speechesArray[0].year && speechesArray[1].year > speechesArray[2].year){
        alert("This is the most recent speech on the page.");
    }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
    alert("This speech was written by " + speechesArray[2].author + " in " + speechesArray[2].year + " .");

    if(speechesArray[2].yearIsBCE === true) {
        console.log(eraArray[0].statement);
    } else {
        console.log(eraArray[1].statement);
    }

    if(speechesArray[2].year < speechesArray[0].year && speechesArray[2].year < speechesArray[1].year){
        alert("This is the oldest speech on the page.");
    } else if(speechesArray[2].year > speechesArray[0].year && speechesArray[2].year > speechesArray[1].year){
        alert("This is the most recent speech on the page.");
    }
});
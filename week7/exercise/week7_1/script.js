//<div id="textbody"> (this is my element grabber)
//Var myNewElement = document.createElement (“p”); 
//var myText = document.createTextNode("NEw list item text");
//myNewElement.appendChild(MYTEXT);

var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");


var h1Text = document.createTextNode("Welcome to week 7 its not DOS");
var paraText = document.createTextNode("Learning what Document Object Model is.");

newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

//newHeading.innerHTML = "Did You know?";
//newParagraph.innerHTML = "California procuces";

document.getElementById("textbody").appendChild(newHeading);
document.getElementById("textbody").appendChild(newParagraph);

document.getElementById("textbody").style.textAlign = "center";


//
//function changeClass(elementID, newClass){
//  var element = document.getElementById(elementID);
//  element. setAttribute("class", newClass); 
    

//document.getElementById("sad").onmouseover = function (){
//  changeClass("sad", "happypumpkin");
//}

//document.getElementById("dance").addEventListener ("mouseover", //function (){
//  changeClass("dance", "dohpumpkin");
//}
 //                                                  
                                                   
                                                                                                     
                                                   
function changeClass(elementID, newClass){
  var element = document.getElementById(elementID);
  element. setAttribute("class", newClass);
}


document.getElementById("sad")
.onclick, function(){changeClass("sad", "sadpumpkin");
}

document.getElementById("dance") 
.addEventListener("mouseover",function(){changeClass("dance", "dohpumpkin");
});
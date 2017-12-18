//********** ON CONSOLE ITEMS **************//

console.log('Welcome to my final Javascript and Jquery site. To date this class has been the most challenging, but im not discouraged. I hope to continue my skills as the next semesters come along. Can we reach out to you for additional help on these topics?')


// ALERT BOX//
// I think this could have been a much more condesed version.

function myFunction() {
    alert("Both Units are Available! June 2018");
}  

function myFunction1() {
    alert("Not Available!");
}

function myFunction2() {
    alert("Not Available!");
} 


//NAVIGATION CONTROL//

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



//********** jQUERY ITEMS **************//



// ALWAYS WRAP JQUERY IN THIS DOC READY FUNCTION //   
$(document).ready(function() {
    
//ICON PLACEMENT//
$("#soon h3").prepend("<img src='img/home.png' alt='icon'>");
    

//COLOR BOX PLUGIN - GROUP IMAGES//    
$(".group3").colorbox({rel:'group3', transition:"slow", width:"100%", height:"100%"});
    
    
//HEADER COLOR CHANGE//
$('#available h2').click(function (){
$("#available").css("background","aquamarine",);
});
                          

//EAST SIDE - TOGGLE INFO//
$("h5.title1").click(function() {
$(".entry1" ).toggle("slow");
});                            

    
//BAYVIEW - TOGGLE INFO// 
$("h5.title2").click(function() {
$(".entry2" ).toggle("slow");
});                            

    
//CUDAHY - TOGGLE INFO//
$("h5.title3").click(function() {
$(".entry3" ).toggle("slow");
});

    
}); //THIS IS THE END OF THE CURLY BRACKET FOR ONREADY FUNCTION CODE   
    
    
//**********NOTES **************//

// TRIED TO FIGURE OUT THE FUNCTION BELOW BUT COULDNT GET THIS TO WORK 
// THIS IS A TOGGLE ON AND OFF

// var flip = 0;
// $( "h2 .title #" ).click(function() {
// $( ".entry p" ).toggle( flip++ % 2 === 0 );
// });
    
 


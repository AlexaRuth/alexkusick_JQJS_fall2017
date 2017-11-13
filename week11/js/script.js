    
// ALWAYS WRAP JQUERY IN THIS DOC READY FUNCTION //   
$(document).ready(function() {

// 1. ICON PLACEMENT
$("#menu li a").prepend("<img src='img/icon.png' alt='icon'>");


// 2. HEADER COLOR CHANGE 
$('#header h1').click(function (){
    $("#header").css("background","aquamarine");
});

// 3. CHANGE THE COLOR OF A LIST ITEM 
$('#sidebar_content_1 li a:first').css('color', 'magenta');
    

// 4. MOVE LIST ITEM TO THE RIGHT 
$('#sidebar_content_1 ul li:nth-child(2n)').css('padding-left', '5px');


//5. REPLACE CONTENT - MADE THIS WORK WITH ONE OF THE TWO CONTENT PARAGRAPHS IN ORDER FOR NUMBER 6 TO WORK CORRECTLY

$("#content h2.title2").click(function () {
    $("#content").html("<div><h1>CHA CHA CHA CHAAA AIN GEES</h1></div>");
});
 
//6. TOGGLE h2 ELEMENT IN SIDEBAR  - MADE THIS ONLY WORK FOR ONE OF THE TWO PARAGRAPHS WHOOP!                           
                             
$( "h2.title" ).click(function() {
    $( ".entry" ).toggle( "slow" );
});                            

    
}); //THIS IS THE END OF THE CURLY BRACKET FOR ONREADY FUNCTION CODE
                             

    

//ASSIGNMENT BREAKDOWN 

// 1. Add the attached icon image before the text in each LI element in the main navigation

// 2. Clicking on the H1 element in the header changes the background color of the header DIV

// 3. Change the text color of the first LI element in one of the sub-lists in the sidebar

// 4. Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels

// 5. Clicking on one of the post titles in the main content area replaces the content of the content DIV (with the ID of “content”) with content you specify

// 6. Clicking on one of the H2 elements in the sidebar toggles visibility of the list below it

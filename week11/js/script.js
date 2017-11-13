    
// ALWAYS WRAP JQUERY IN THIS DOC READY FUNCTION //   
$(document).ready(function() {
// all custom jQuery will go here
    
//I THOUGHT THE PARAGRAPH WORKS BETTER FOR THIS THAN THE TITLE - I READ SOMEWHERE IN THE ASSIGNMENT... SOMETHING ABOUT A RECEPIE CARD? MAYBE THIS SECTION WOULD POTENTIALLY BE A RECIEPE? IF SO THEN EACH HEADER WOULD HAVE A SEPRATE TOGGLE EVENT RIGHT?... HMM CURRENTLY WHEN YOU CLICK THIS BOTH SECTIONS HIDE.
    
    $( "h2.title" ).click(function() {
        $( ".entry" ).toggle( "slow" );
        });    

//I THINK THIS COULD ALSO WORK AS A TOGGLE FUNCTION? BUT FOR SAKE OF COMPELTING THE ASSIGNMENT THE BEST WAY I CAN ILL LEAVE THE CLICK FUNCTION FOR IT//
    
    $("a").click(function(){
        $(this).css("background", "aqua");
        });       
});



// 1. ICON PLACEMENT
 $("#menu li a").prepend("<img src='img/icon.png' alt='icon'>");










//ASSIGNMENT NEEDS 

// 1. Add the attached icon image before the text in each LI element in the main navigation

// 2. Clicking on the H1 element in the header changes the background color of the header DIV

// 3. Change the text color of the first LI element in one of the sub-lists in the sidebar

// 4. Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels

// 5. Clicking on one of the post titles in the main content area replaces the content of the content DIV (with the ID of “content”) with content you specify

// 6. Clicking on one of the H2 elements in the sidebar toggles visibility of the list below it

    
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
    
// ALWAYS WRAP JQUERY IN THIS DOC READY FUNCTION //   
$(document).ready(function() {
// all custom jQuery will go here
    
    $( "h2.title" ).click(function() {
        $( ".entry" ).toggle( "slow" );
        });    

    $("a").click(function(){
        $(this).css("background", "aqua");
        });       
});
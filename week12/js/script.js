    
// ALWAYS WRAP JQUERY IN THIS DOC READY FUNCTION //   
$(document).ready(function() {

$('#menu a').click(function(e){
     hideContentDivs();
     var tmp_div = $(this).parent().index();
     $('.main div').eq(tmp_div).show();
  });

function hideContentDivs(){
    $('.main div').each(function(){
    $(this).hide();});
}
hideContentDivs();

    
}); //THIS IS THE END OF THE CURLY BRACKET FOR ONREADY FUNCTION CODE
                             

//6. TOGGLE h2 ELEMENT IN SIDEBAR  - MADE THIS ONLY WORK FOR ONE OF THE TWO PARAGRAPHS WHOOP!                            
//$( "h2.title" ).click(function() {
//   $( ".entry" ).toggle( "slow" );
//});                            
    

//ASSIGNMENT BREAKDOWN 


    
// ALWAYS WRAP JQUERY IN THIS DOC READY FUNCTION //   
$(document).ready(function() {

$(document).ready(function(){
    $('#menu a').click(function(){
        $('div').hide();
        var tmp_div = $(this).parent().index();
        $('div').eq(tmp_div).show(500, "swing");
    });

function hideContentDivs(){
    $('.main div').each(function(){
    $(this).hide();});
}
hideContentDivs();
    
}); 

//THIS IS THE END OF THE CURLY BRACKET FOR ONREADY FUNCTION CODE
                             

//6. TOGGLE h2 ELEMENT IN SIDEBAR  - MADE THIS ONLY WORK FOR ONE OF THE TWO PARAGRAPHS WHOOP!                            
//$( "h2.title" ).click(function() {
//   $( ".entry" ).toggle( "slow" );
//});                            
    


//leveraged from: http://jsfiddle.net/hQ7y5/
//uses indexing to link button to equivalent index with .article class.
//.eq function: Reduces the set of matched elements to the one at the specified index.
//.eq(index)... takes an index.


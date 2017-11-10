//NOTICED I DIDNT HAVE ADOCUMENT READY FUNCTION IN MY CODE BEFORE _ I PLACED ONE HERE AT THE TOP AND IT WORKED!!

$(document).ready(function () {
    
$(function () { 
//THIS CHANGES THE COLOR PER EACH SELECTED PRODUCT PER TYPE
    $("#products h2.product-name[data-type='mineralwater']").css("background-color", "#2982D0");
    $("#products h2.product-name[data-type='vitamin']").css("background-color", "#12500F");
    $("#products h2.product-name[data-type='proteinbar']").css("background-color", "#4E0F50");

    
// FOR THIS NEXT PART IM NOT SURE WHY THE CODE LIVES INSIDE THIS MAIN FUNCTIONS BRACKETS? 
//THESE ARE THE CHECK BOX SELECTORS// 
//YOU ARE CALLING THE TAG FOR THE PRODUCT AND THEN ADDING THE FUNCTION THAT WILL HAPPEN.
    
    document.querySelector('#cbVitamins').addEventListener('change',function (evt) {
        updateProductView("vitamins", evt.target.checked);
    });
    
    
    document.querySelector('#cbMineralWater').addEventListener('change',function (evt) {
        updateProductView("mineralwater", evt.target.checked);
    });
    
    
    document.querySelector('#cbProtein').addEventListener('change',function (evt) {
        updateProductView("proteinbar", evt.target.checked);
    });
    

    $(".product-item").each(function () {
        var prodName = encodeURIComponent($(this).children("h2").text());
        var prodID = encodeURIComponent($(this).data("prod_id"));

        var link = $("<a href='product.html?prodName=" + prodName + "&prodID=" + prodID + "'/>");
        $(this).children("img").wrap(link);
    })           
})
    
//OTHER PORTION OF THE SITE SOLUTION 

function updateProductView(categoryName, bVisible) {
    var dataSelectorVal = "";
    switch (categoryName) { //CLASSIC JAVASCRIPT SWITCH HAPPENING HERE?
    case "vitamins":
        dataSelectorVal = "h2[data-type='vitamin']";
        break; //BREAKS THE CODE
            
    case "mineralwater":
        dataSelectorVal = "h2[data-type='mineralwater']";
        break; //BREAKS THE CODE 
            
    case "proteinbar":
        dataSelectorVal = "h2[data-type='proteinbar']";
        break;//BREAKS THE CODE 
    }
   
    $(".product-item").has(dataSelectorVal).css('display', bVisible ? "" : "none");
// USE THE HAS() FUNCTION TO SELECT LI TAGS FOR THE PRODUCT THAT HAVE A H2 TAG AND MATCHING ATTRIBUTE VALUE  
    
}  

//NEW CODE FOR WEEK 11 - LEVERAGED FROM THE SOURCE /SOLUTION 


$(".product-item").each(function () {
    var prodName = encodeURIComponent($(this).children("h2").text());
    var prodID = encodeURIComponent($(this).data("prod_id"));
    var link = $("<a href='product.html?prodName=" + prodName + "&prodID=" + prodID + "'/>");
    $(this).children("img").wrap(link);
})

function updateProductView(categoryName, Visibility) {
var dataSelectorValue = ""; 
    switch (categoryName) {
        case "vitamins":
            dataSelectorValue = "h2[data-type='vitamin']";
            break;
        case "mineralwater":
            dataSelectorValue = "h2[data-type='mineralwater']";
            break;
        case "proteinbar":
            dataSelectorValue = "h2[data-type='proteinbar']";
            break;
    }
    $(".product-item").has(dataSelectorValue).css("display", Visibility ? "" : "none");
}

});

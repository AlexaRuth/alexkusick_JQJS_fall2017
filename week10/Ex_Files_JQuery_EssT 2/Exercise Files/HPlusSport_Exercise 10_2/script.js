

$(function () { 
//THIS CHANGES THE COLOR PER EACH SELECTOR
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
    
    



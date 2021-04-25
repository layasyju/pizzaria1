menu_list_array= [
                    "chicken_tandoor_pizza",
                    "veg supreme pizza",
                    "Paneer tikka pizza",
                    "deluxe veggie pizza",
                    "veg_extravaganza_pizza",
]

function getmenu(){
    var htmldata;
    htmldata="<ol class=menulist>"
    menu_list_array.sort();
    for(var i=0;i<menue_list_array.length;i++) {
        htmldata=htmldata+'<li>' +menu_list_array[i] + '</li>'
    }
    htmldata=htmldata+"<ol>"
    document.getElementById(dislay_menu).innerHTML=htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById(add_item).value;
    menue_list_array.push(item);
    menue_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menue_list_array.length;i++) {
        htmldata=htmldata+"<dic class='card'>"+ "<img src="pizza.png" />" + menue_list_array[i]+'</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}
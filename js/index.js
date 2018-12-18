$(function(){
    renderIndex();
    function renderIndex(){
         var navHTML = "";
         $.each(this.globalParams.nav,function(n,m){
             navHTML += "<li class='ui-li-static ui-body-inherit'><a href='" + m.url + "' data-transition='fade' class='li-a-style'>" + m.name + '</a></li>'
         })
        $("#nav").html(navHTML)
    }






})
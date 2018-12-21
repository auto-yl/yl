$(function(){
    renderIndex(this.globalParams.nav);
    function renderIndex(data){
         var navHTML = "";
         $.each(data,function(n,m){
             navHTML += "<li class='ui-li-static ui-body-inherit'><a href='" + m.url + "' data-transition='fade' class='li-a-style  ui-icon-heart ui-btn-icon-left' target='_top'>" + m.name + '</a></li>'
         })
        $("#nav").html(navHTML)
    }
})
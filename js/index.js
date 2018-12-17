$(function(){
    var nav = [
        {id:0,name:'4T评分'},
    ]


    renderNav();
    function renderNav(){
         var navHTML = "";
         $.each(nav,function(n,m){
             navHTML += "<li>" + m.name + '</li>'
         })
        $("#nav").html(navHTML)
    }

})
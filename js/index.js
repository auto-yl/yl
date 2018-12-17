$(function(){


   // renderIndex();

    function renderIndex(){
         var navHTML = "";
         $.each(this.globalParams.nav,function(n,m){
             navHTML += "<li class='ui-li-static ui-body-inherit'><a href='" + m.url + "' data-transition='fade' class='li-a-style'>" + m.name + '</a></li>'
         })
        $("#nav").html(navHTML)
    }


    render4T();
    function render4T(){
        var HTML = "" ;
        $.each(this.globalParams.data4T,function(n,m){
            HTML+='<h2>'+ m.title +'</h2>' ;
            var li = "";
            $.each(m.data,function(y,x){
               li+='<div class=""><div class="t-list"><p class="t-p">'+x.text+'</p><input type="number" placeholder="请输入数值"  class="t-input"></div>'
            })
            HTML = HTML + li ;
        })
        $("#4T-content").html(HTML)
    }



})
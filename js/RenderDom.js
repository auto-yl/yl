$(function(){
    render4T();
    function render4T(){
        var HTML = "" ;
        $.each(this.globalParams.data4T,function(n,m){
            HTML+='<h2>'+ m.title +'</h2>' ;
            var li = "";
            $.each(m.data,function(y,x){
                var index = "input"+ n +"_"+ y ;
                li += '<fieldset data-role="controlgroup">' +
                    '            <label for='+index+'>'+x.text+'</label>' +
                    '            <input type="checkbox" name="favcolor"data-id="'+index+'" class="checkEvent" data-value="'+ x.value+'" id='+ index +' value="red">' +
                    '</fieldset>'
                /*
                 li+='<div class=""><div class="t-list"><label class="t-p">'+x.text+'</label>' +
                     '<input type="checkbox" placeholder="请输入数值"  class="t-input" data-id="'+index+'" ></div>'*/
            })
            HTML = HTML + li ;
        })
        $("#4T-content").html(HTML);
        $("#4T-content").trigger('create');

    }
})
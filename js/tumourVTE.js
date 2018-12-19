$(function(){
    var valueObj ={a:0};
    render4T();
    function render4T(){
        var HTML = "" ;
        $.each(this.globalParams.tumourVTE,function(n,m){
            HTML+='<h2>'+ m.title +'</h2>' ;
            var li = "";
            $.each(m.data,function(y,x){
                var index = "input"+ n +"_"+ y ;
                li+='<div class=""><div class="t-list"><p class="t-p">'+x.text+'</p>' +
                    '<input type="number" placeholder="请输入数值"  class="t-input" data-id="'+index+'" data-value="'+ x.value+'"></div>'
            })
            HTML = HTML + li ;
        })
        $("#4T-content").html(HTML);
    }

    $(".t-input").on("change",function(e){
        // e.stopPropagation();
        var el = $(e.currentTarget);
        var key = el.attr("data-id") , val = el.attr("data-value") , value = el.val();
        valueObj[key] = val * value ;
    })

    $("#preview").on("click",function(e){
        // e.stopPropagation();
        var value = 0 ;
        for(var i in valueObj){
            value += valueObj[i] ;
        }
        $("#score").html(value);
        // =IF(B7=0,"低危",IF(B7=1,"中危",IF(B7=2,"中危","高危")))
        var grade = "" , suggest ="";
        if(value == 0 ) {
            suggest ="低危";
        }else if(value == 1 || value == 2 ){
            suggest ="中危"
        }else{
            suggest ="<span style='color:red'>高危</span>";
        }
        $("#grade").html(grade);
        $("#suggest").html(suggest);

        //=IF(B15="低度可能","发生HIT可能性为低度可能",IF(B15="中度可能","发生HIT可能性为中度可能","发生HIT可能性为高度可能"))
    })
})
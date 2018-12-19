$(function(){
    var valueObj ={a:0};
    render4T();
    function render4T(){

        var HTML = "" ;
        $.each(this.globalParams.HASBLED,function(n,m){
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
        valueObj[key] = parseInt(val) * value ;
    })

    $("#preview").on("click",function(e){
        // e.stopPropagation();
        var value = 0 ;
        for(var i in valueObj){
            value += valueObj[i] ;
        }
        $("#score").html(value);
        //=IF(B8<3,"低危","高危")
        var grade = "" , suggest ="";
        if(value < 3) {
            grade = "低危";
            suggest ="出血风险较低";
        }else{
            grade = "<span style='color:red'>高危</span>";
            suggest ="<span style='color:red'>出血风险较高</span>"
        }
        $("#grade").html(grade);
        $("#suggest").html(suggest);

        //=IF(B9="低危","出血风险较低","出血风险较高")
    })
})
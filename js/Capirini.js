$(function(){
    var valueObj ={a:0};
    render4T();
    function render4T(){

        var HTML = "" ;
        $.each(this.globalParams.Capirini,function(n,m){
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
        var grade = "" , suggest ="";
        if(value == 0){
            grade = "非常低危";
            suggest ="无需预防";
        }else if(value == 1 || value ==2 ){
            grade="低危";
            suggest ="机械预防措施，推荐间歇充气压缩泵";
        }else if(value == 3 || value == 4){
            grade = "中危";
            suggest = "低分子肝素，低剂量普通肝素或机械性血栓预防措施（推荐间歇充气压缩泵）；出血风险高者可机械性血栓预防措施，推荐间歇充气压缩泵"
        }else{
            grade = "<span style='color:red'>高危</span>";
            suggest ="低分子肝素或低剂量普通肝素，联用机械性血栓预防措施，弹力袜或间歇充气压缩泵；出血风险高者推荐机械性血栓预防措施，推荐间歇充气压缩泵，直至出血停止且可以加用抗凝药物为止"
        }
        $("#grade").html(grade);
        $("#suggest").html(suggest);

    })
})
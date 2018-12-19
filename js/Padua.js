$(function(){
    var valueObj ={a:0};
    var valueObj2 ={a:0};
    render4T();
    function render4T(){

        var HTML = "" ;
        $.each(this.globalParams.Padua,function(n,m){
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
        if(key.indexOf("0_") > -1){
            valueObj[key] = val * value ;
        }else{
            valueObj2[key] = val * value ;
        }

    })

    $("#preview").on("click",function(e){
        // e.stopPropagation();
        var value = 0 , value2 =0  ;
        for(var i in valueObj){
            value += valueObj[i] ;
        }
        var value2 = 0 ;
        for(var k in valueObj2){
            value2 += valueObj2[k];
        }

        $("#score").html(value);

        var grade = "" ,grade2 = "" , suggest ="暂无建议~";
        if(value < 4) {
            grade = "低危";
        }else{
            grade = "<span style='color:red'>高危</span>";
        }
        if(value2 < 1) {
            grade2 = "低危";
        }else{
            grade2 = "<span style='color:red'>高危</span>";
        }

        if(value < 4 && value2 < 1){
            suggest = "不使用机械及药物预防措施";
        }
        if(value > 4 && value2 < 1){
            suggest = "低分子肝素";
        }

        $("#grade").html(grade);
        $("#grade2").html(grade2);
        $("#suggest").html(suggest);

    })
})
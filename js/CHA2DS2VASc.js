$(function(){
    var valueObj ={a:0};
    render4T();
    function render4T(){

        var HTML = "" ;
        $.each(this.globalParams.CHA2DS2,function(n,m){
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

        //=IF(B10=0,"低危",IF(AND(B10=1,D9=""),"中危",IF(AND(B10=2,D9=1),"中危","高危")))
        //=IF(B10=0,"可选择阿司匹林或不用抗栓治疗，推荐不抗栓治疗（1/A）",IF(AND(B10=1,D9=""),"可选择华法林或阿司匹林抗凝，但是推荐口服抗凝药治疗（1/A）",IF(AND(B10=2,D9=1),"可选择华法林或阿司匹林抗凝，但是推荐口服抗凝药治疗（1/A）","推荐口服抗凝药治疗（如华法林等）（1/A）")))
        var grade = "" , suggest ="";
        var D9 = valueObj["input0_8"] ? valueObj["input0_8"] :'';
        if(value == 0) {
            grade = "低危";
            suggest ="可选择阿司匹林或不用抗栓治疗，推荐不抗栓治疗（1/A）";
        }else if( (value == 1 && D9 == "") || ( value == 2 && D9 == 1)){
            grade = "中危";
            suggest ="可选择华法林或阿司匹林抗凝，但是推荐口服抗凝药治疗（1/A）"
        }else{
            grade =  "<span style='color:red'>高危</span>";
            suggest ="<span style='color:red'>推荐口服抗凝药治疗（如华法林等）（1/A）</span>";
        }
        $("#grade").html(grade);
        $("#suggest").html(suggest);

    })
})
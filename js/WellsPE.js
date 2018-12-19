$(function(){
    var valueObj ={a:0};
    render4T();
    function render4T(){

        var HTML = "" ;
        $.each(this.globalParams.WellsDVT,function(n,m){
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
        if(value < 4.1) {
            grade ="肺栓塞不大可能";
            suggest = "若D-二聚体阴性，可排除肺栓塞；若D-二聚体阳性，可行CTA检查。"
        }else{
            grade ="<span style='color:red'>肺栓塞可能</span>" ;
            suggest = "<span style='color:red'>不建议检测D-二聚体，行CTA检查</span>"
        }
        $("#grade").html(grade);
        $("#suggest").html(suggest);

    })
})
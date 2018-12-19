$(function(){
    var valueObj ={a:0};
    render4T();
    function render4T(){
        var HTML = "" ;
        $.each(this.globalParams.data4T,function(n,m){
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

       //  =IF(AND(B30>3,D28=1,D29=""),"应考虑自早孕期起开始预防血栓",IF(AND(B30=3,D28=1,D29=""),"应考虑自孕28周起预防血栓形成",IF(AND(B30>1,D28="",D29=1),"应考虑产后至少10 d内预防血栓","血栓风险较低，可密切观察")))


        var grade = "" , suggest ="";
        if(value < 4) {
            grade = "低度可能";
            suggest ="发生HIT可能性为低度可能";
        }else if(value >5){
            grade = "<span style='color:red'>高度可能</span>";
            suggest ="发生HIT可能性为高度可能"
        }else{
            grade = "中度可能";
            suggest ="发生HIT可能性为中度可能";
        }
        $("#suggest").html(suggest);

    })
})
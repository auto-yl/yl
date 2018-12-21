$(function(){
    var valueObj ={a:0};
    $(".checkEvent").on("click",function(e){
        var el = $(e.currentTarget);
        var key = el.attr("data-id") , val = el.attr("data-value") ;
        var isChecked = el.is(':checked');
        valueObj[key] = isChecked ? val : 0;
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
            grade ="低危";
            suggest = "低危患者术后尽早下床活动" ;
        }else if(value == 1){
            grade ="中危";
            suggest ="患者术后采取LMWH或LDUH药物预防或机械性预防（GCS或IPC）"
        }else if(value == 2){
            grade = "<span style='color:red'>高危</span>";
            suggest = "<span style='color:red'>高危患者，术后无大出血风险者，采取药物预防（LMWH或LDUH）；术后有大出血风险者，采取机械性、药物序贯预防，先机械性预防（IPC 为佳），待出血风险降低后改为药物预防</span>"
        }else{
            grade = "<span style='color:red'>极高危</span>";
            suggest = "<span style='color:red'>极高危患者，术后无大出血风险者，采取机械性与药物联合预防；术后大出血风险较高者，建议采取机械性、药物序贯预防，先机械性预防（IPC为佳），待出血风险降低后改为机械性与药物联合预防</span>";

        }
        $("#grade").html(grade);
        $("#suggest").html(suggest);

    })
})
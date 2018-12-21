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
$(function(){
    var valueObj ={a:0};
    var valueObj2 ={a:0};
    $(".checkEvent").on("click",function(e){
        var el = $(e.currentTarget);
        var key = el.attr("data-id") , val = el.attr("data-value") ;
        var isChecked = el.is(':checked');
        valueObj[key] = isChecked ? val : 0;
    })

    $("#preview").on("click",function(e){
        // e.stopPropagation();
        var value = 0 , value2 =0  ;
        for(var i in valueObj){
            value += parseFloat(valueObj[i]) ;
        }
        var value2 = 0 ;
        for(var k in valueObj2){
            value2 +=parseFloat(valueObj2[k]);
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
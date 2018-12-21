$(function(){
    this.renderDom(this.globalParams.data4T);
    var valueObj ={};
    $(".checkEvent").on("click",function(e){
        var el = $(e.currentTarget);
        var key = el.attr("data-id") , val = el.attr("data-value") ;
        var isChecked = el.is(':checked');
        valueObj[key] = isChecked ? val : 0;
    })

    $("#preview").on("click",function(e){
        var value = 0 ;
        for(var i in valueObj){
            value += parseFloat(valueObj[i]) ;
        }
        $("#score").html(value);
        // =IF(B14<4,"低度可能",IF(B14>5,"高度可能","中度可能"))
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
        $("#grade").html(grade);
        $("#suggest").html(suggest);

        //=IF(B15="低度可能","发生HIT可能性为低度可能",IF(B15="中度可能","发生HIT可能性为中度可能","发生HIT可能性为高度可能"))
    })
})
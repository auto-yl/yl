$(function(){
    var valueObj ={a:0};
    this.renderDom(this.globalParams.tumourVTE);
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
            value += parseFloat(valueObj[i]) ;
        }
        $("#score").html(value);
        // =IF(B7=0,"低危",IF(B7=1,"中危",IF(B7=2,"中危","高危")))
        var grade = "" , suggest ="";
        if(value == 0 ) {
            suggest ="低危";
        }else if(value == 1 || value == 2 ){
            suggest ="中危"
        }else{
            suggest ="<span style='color:red'>高危</span>";
        }
        $("#grade").html(grade);
        $("#suggest").html(suggest);

        //=IF(B15="低度可能","发生HIT可能性为低度可能",IF(B15="中度可能","发生HIT可能性为中度可能","发生HIT可能性为高度可能"))
    })
})
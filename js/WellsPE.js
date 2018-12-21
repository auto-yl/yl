$(function(){
    var valueObj ={a:0};
    this.renderDom(this.globalParams.WellsPE);
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
            value +=parseFloat( valueObj[i]) ;
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
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
        if(value < 2) {
            suggest ="不大可能存在DVT（可能性6%），若D-二聚体阴性，可排除DVT；若D-二聚体阳性，可行超声检查。";
        }else{
            suggest ="<span style='color:red'>可能存在DVT（可能性28%），建议行超声检查</span>"
        }

        $("#suggest").html(suggest);

    })
})
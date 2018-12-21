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
            value += parseFloat (valueObj[i] );
        }
        $("#score").html(value);

       //  =IF(AND(B30>3,D28=1,D29=""),"应考虑自早孕期起开始预防血栓",IF(AND(B30=3,D28=1,D29=""),"应考虑自孕28周起预防血栓形成",IF(AND(B30>1,D28="",D29=1),"应考虑产后至少10 d内预防血栓","血栓风险较低，可密切观察")))
        var D28 =  valueObj["input3_0"]  ? valueObj["input3_0"] : 1 ;
        var D29 =  valueObj["input3_1"]  ? valueObj["input3_1"] : "" ;

        var grade = "" , suggest ="";
        if(value > 3 && D28 == 1 && D29 ==""){
            suggest ="应考虑自早孕期起开始预防血栓";
        }else if(value == 3 && D28 == 1 && D29 ==""){
            suggest ="应考虑自孕28周起预防血栓形成";
        }else if(value > 1&& D28 == "" && D29 ==1 ){
            suggest ="应考虑产后至少10 d内预防血栓";
        }else{
            suggest = "血栓风险较低，可密切观察";
        }
        $("#suggest").html(suggest);

    })
})
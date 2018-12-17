var params = {
     nav : [
        {id:0,name:'4T评分',url:'./page/4T.html'},
        {id:0,name:'4T评分',url:'./page/4T.html'},
        {id:0,name:'4T评分',url:'./page/4T.html'}
    ],

    data4T : [
        {
            title:'血小板减少',
            data:[
                {text:'相对值降低>50%或绝对值下降20-100×10^9/L',value:2},
                {text:'相对值降低30-50%或绝对值下降10-19×10^9/L',value:1},
                {text:'相对值降低<30%或绝对值下降<10×10^9L',value:0}
            ]
        },
        {
            title:'肝素治疗与血小板减少的时间差',
            data:[
                {text:'5-10d或≤1d（在过去30d内接触过肝素）',value:2},
                {text:'>10d或≤1d（在过去30-100d内接触过肝素）',value:1},
                {text:'≤1d（但无近期肝素接触史）',value:0}
            ]
        },
        {
            title:'血栓形成',
            data:[
                {text:'新发血栓、皮肤坏疽、静注后急性全身反应',value:2},
                {text:'血栓再发或加重，非坏死性皮肤损伤、可疑血栓',value:1},
                {text:'无血栓形成',value:0}
            ]
        },
        {
            title:'其他致血小板减少原因',
            data:[
                {text:'无',value:2},
                {text:'疑诊',value:1},
                {text:'确定',value:0}
            ]
        }
    ]

};
this.globalParams = params;
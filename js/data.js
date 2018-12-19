var params = {
     nav : [
        {id:0,name:'4T评分',url:'./page/4T.html'},
        {id:1,name:'Capirini',url:'./page/Capirini.html'},
        {id:2,name:'Padua',url:'./page/Padua.html'},
        {id:3,name:'WellsDVT',url:'./page/WellsDVT.html'},
        {id:4,name:'WellsPE',url:'./page/WellsPE.html'},
        {id:5,name:'GCapirini',url:'./page/GCapirini.html'},
        {id:6,name:'产期VTE',url:'./page/confinementVTE.html'},
        {id:7,name:'肿瘤VTE',url:'./page/tumourVTE.html'},
        {id:8,name:'CHA2DS2',url:'./page/CHA2DS2VASc.html'},
        {id:9,name:'HASBLED',url:'./page/HASBLED.html'}
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
    ],

    Capirini:[
        {
            title:'Capirini评分',
            data:[
                {text:'年龄41~60岁',value:1},
                {text:'小手术',value:1},
                {text:'体质指数>25kg/m2',value:1},
                {text:'下肢肿胀',value:1},
                {text:'静脉曲张',value:1},
                {text:'妊娠或产后',value:1},
                {text:'有不明原因或者习惯性流产史',value:1},
                {text:'口服避孕药或激素替代疗法',value:1},
                {text:'脓毒症（<1个月）',value:1},
                {text:'严重肺病，包括肺炎（<1个月）',value:1},
                {text:'肺功能异常',value:1},
                {text:'急性心肌梗死',value:1},
                {text:'充血性心力衰竭（<1个月）',value:1},
                {text:'炎性肠病史',value:1},
                {text:'卧床患者',value:1},
                {text:'年龄61-74岁',value:2},
                {text:'关节镜手术',value:2},
                {text:'大型开放手术（>45min）',value:2},
                {text:'腹腔镜手术（>45min）',value:2},
                {text:'恶性肿瘤',value:2},
                {text:'卧床（>72h）',value:2},
                {text:'石膏固定',value:2},
                {text:'中央静脉通路',value:2},
                {text:'年龄≥75岁',value:3},
                {text:'VTE史',value:3},
                {text:'VTE家族史',value:3},
                {text:'凝血因子VLeiden 突变',value:3},
                {text:'凝血酶原G20210A突变',value:3},
                {text:'狼疮抗凝物阳性',value:3},
                {text:'抗心磷脂抗体阳性',value:3},
                {text:'血清同型半胱氨酸升高',value:3},
                {text:'肝素诱导的血小板减少症',value:3},
                {text:'其他先天性或获得性血栓形成倾向',value:3},
                {text:'脑卒中（<1个月）',value:5},
                {text:'择期关节置换术',value:5},
                {text:'硫、骨盆或下肢骨折',value:5},
                {text:'急性脊髓损伤（<1个月）',value:5}
            ]
        }
    ],
    Padua:[
        {
            title:'padua评分',
            data:[
                {text:'活动性恶性肿瘤，病人先前局部或远端转移和（或）6个月内接受过化疗和放疗',value:3},
                {text:'既往VTE',value:3},
                {text:'制动，病人身体原因或遵医嘱需卧床休息至少3天',value:3},
                {text:'有血栓形成倾向，抗凝血酶缺陷症，PC或S缺乏，LeidenV因子、凝血酶原',value:3},
                {text:'G202104突变，抗磷脂抗体综合征',value:3},
                {text:'近期（≤1个月）创伤或外科手术',value:1},
                {text:'年龄≥70岁',value:1},
                {text:'心脏和（或）呼吸衰竭',value:1},
                {text:'急性心肌梗死（AMl）和（或）缺血性脑卒中',value:1},
                {text:'急性感染和（或）风湿性疾病',value:1},
                {text:'肥胖（体质指数≥30kg/m2）',value:1},
                {text:'正在进行激素治疗',value:1}
            ]
        },
        {
            title:'ACCP9出血风险',
            data:[
                {text:'活动性胃十二指肠溃疡',value:1},
                {text:'入院前3个月内有出血事件发生',value:0.5},
                {text:'血小板计数<50×10^9/L',value:0.5},
                {text:'年龄≥85岁',value:0.5},
                {text:'肝衰竭（INR>1.5）',value:0.5},
                {text:'严重肾衰竭（GFR< 30mL/min/m2）',value:0.5},
                {text:'入住ICU或CCU',value:0.5},
                {text:'中心静脉导管',value:0.5},
                {text:'风湿性疾病',value:0.5},
                {text:'癌症患者',value:0.5},
                {text:'男性',value:0.5}
            ]
        }
    ],
    WellsDVT:[
        {
            title:'Wells评分',
            data:[
                {text:'活动性癌症（患者在6个月内接受过癌症治疗或近期接受过姑息治疗）',value:1},
                {text:'下肢瘫痪，轻瘫或下肢石膏固定',value:1},
                {text:'近期卧床≥3天或12周内接受过全麻或局麻的大手术',value:1},
                {text:'沿深静脉分布区的局限性触痛',value:1},
                {text:'整个下肢水肿',value:1},
                {text:'小腿肿胀，周径超过无症状一侧3cm（测量位置：胫骨粗隆下10cm）',value:1},
                {text:'局限于患侧下肢的凹陷性水肿',value:1},
                {text:'侧支浅表静脉形成（非静脉曲张）',value:1},
                {text:'DVT病史',value:1},
                {text:'与DVT诊断可能性相当或更有可能的其他诊断',value:-2}
            ]
        }
    ],
    WellsPE:[
        {
            title:'Wells评分',
            data:[
                {text:'DVT的临床症状体征（最少下肢肿胀和深静脉触痛）',value:3},
                {text:'其他诊断可能性小于PE',value:3},
                {text:'心率超过100次/min',value:1.5},
                {text:'四周内制动或接受过手术',value:1.5},
                {text:'DVT/PE病史',value:1.5},
                {text:'咯血',value:1},
                {text:'恶性肿瘤（正在治疗，过去六个月内接受过治疗或姑息治疗）',value:1}
            ]
        }
    ],
    GCapirini:[
        {
            title:'G-capirini评分',
            data:[
                {text:'年龄≥50岁',value:1},
                {text:'高血压',value:1},
                {text:'静脉曲张',value:1},
                {text:'手术时间≥3 h',value:1},
                {text:'术后卧床时间≥48 h',value:1},
                {text:'开腹手术',value:1}
            ]
        }
    ],

    confinementVTE:[
        {
            title:'已有的危险因素',
            data:[
                {text:'既往VTE史(单次大手术相关VTE除外)',value:4},
                {text:'既往与大手术相关的VTE',value:3},
                {text:'已知的高危易栓倾向',value:3},
                {text:'合并症如肿瘤，心衰；活动性系统性红斑狼疮，炎性多关节病或炎症性肠病；肾病综合征；伴有肾脏疾病的I型糖尿病；镰刀细胞贫血；长期静脉注射药物者',value:3},
                {text:'一级亲属有无诱因或雌激素相关的VTE家族史',value:1},
                {text:'已知的低危易栓倾向（无VTE）',value:1},
                {text:'年龄（＞35岁）',value:1},
                {text:'肥胖（BMI≥30kg/m2）',value:1},
                {text:'肥胖（BMI≥40kg/m2）',value:2},
                {text:'分娩≥3次',value:1},
                {text:'吸烟',value:1},
                {text:'大静脉曲张',value:1},
            ]
        },
        {
            title:'产科危险因素',
            data:[
                {text:'孕期出现子痫前期',value:1},
                {text:'ART/IVF辅助生殖技术/体外受精（仅产前）',value:1},
                {text:'多胎妊娠',value:1},
                {text:'分娩时剖腹产',value:2},
                {text:'择期剖腹产',value:1},
                {text:'中腔或旋转手术分娩',value:1},
                {text:'产程延长（＞24h）',value:1},
                {text:'产后出血（＞1L或有输血）',value:1},
                {text:'早产＜37+6周',value:1},
                {text:'死产',value:1}
            ]
        },
        {
            title:'一过性危险因素',
            data:[
                {text:'在孕期、产褥期的任何外科手术（除了可很快恢复会阴，如阑尾切除术、产后绝育）',value:1},
                {text:'剧吐',value:1},
                {text:'OHSS 卵巢过度刺激症（仅第一孕期）',value:1},
                {text:'系统感染',value:1},
                {text:'卧床，脱水',value:1}
            ]
        },
        {
            title:'',
            data:[
                {text:'产前阶段',value:""},
                {text:'产后阶段',value:1}
            ]
        }
    ],

    tumourVTE:[
        {
            title:'肿瘤VTE评分',
            data:[
                {text:'肿瘤的位置（胃癌，胰腺癌）',value:2},
                {text:'肿瘤的位置（肺癌，淋巴瘤，妇科肿瘤，膀胱癌，睾丸癌）',value:1},
                {text:'化疗前血小板计数＞350×10^9/L',value:1},
                {text:'血红蛋白＜10g/dL或使用促红细胞生长因子',value:1},
                {text:'化疗前粒细胞白细胞计数＞11×10^9/L',value:1},
                {text:'BMI≥35kg/m2',value:1}
            ]
        }
    ],

    CHA2DS2:[
        {
            title:'CHA2DS2-VASc评分',
            data:[
                {text:'年龄41~60岁',value:1},
                {text:'心力衰竭LVEF<40%（C）',value:1},
                {text:'高血压（H）',value:1},
                {text:'年龄>75岁（A）',value:2},
                {text:'糖尿病（D）',value:1},
                {text:'卒中/血栓形成（S）',value:2},
                {text:'血管性疾病（V）',value:1},
                {text:'年龄65~74岁（A）',value:1},
                {text:'女性（Sc）',value:1}
            ]
        }
    ],

    HASBLED:[
        {
            title:'HAS-BLED评分',
            data:[
                {text:'高血压',value:1},
                {text:'肝肾功能不全',value:1},
                {text:'卒中',value:1},
                {text:'出血',value:1},
                {text:'异常INR值',value:1},
                {text:'年龄>65岁',value:1},
                {text:'药物或饮酒',value:1}
            ]
        }
    ]


};
this.globalParams = params;
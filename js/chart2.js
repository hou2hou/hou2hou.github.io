var chart_c1 = echarts.init(document.getElementById('chart2'));//指定的id要有高度和宽度
    
 
    option = {
    title: {
        text: "客户群特征分析图"
    },
    tooltip: {
        trigger: "axis"
    },
    legend: {
        orient: "vertical",
        x: "right",
        y: "bottom",
        data: ["第一类", "第二类", "第三类", "第四类", "第五类"]
    },
    toolbox: {
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    polar: [
        {
            indicator: [
                {
                    text: "入会时间",
                    min: 0,
                    max: 0.9
                },
                {
                    text: "飞行次数",
                    min: 0,
                    max: 0.2
                },
                {
                    text: "平均每公里票价",
                    min: 0,
                    max: 0.2
                },
                {
                    text: "总里程",
                    min: 0,
                    max: 0.1
                },
                {
                    text: "时间间隔差值",
                    min: 0,
                    max: 0.4
                },
                {
                    text: "平均折扣率",
                    min: 0,
                    max: 0.6
                }
            ]
        }
    ],
    calculable: true,
    series: [
        {
            name: "",
            type: "radar",
            data: [
                {
                    value: [0.741795364, 0.109022366, 0.128849086, 0.05807435, 0.213891187, 0.518620118],
                    name: "第一类"
                }
            ]
        },
        {
            name: "",
            type: "radar",
            data: [
                {
                    value: [0.244762134, 0.01459751, 0.12398845, 0.006948188, 0.059624019, 0.445428468],
                    name: "第二类"
                }
            ]
        },
        {
            type: "radar",
            name: "",
            data: [
                {
                    value: [0.286398534, 0.100417576, 0.126349821, 0.056103076, 0.178380018, 0.512439727],
                    name: "第三类"
                }
            ]
        },
        {
            type: "radar",
            name: "",
            data: [
                {
                    value: [0.703296888, 0.020069216, 0.122350626, 0.009588205, 0.138119483, 0.462656778],
                    name: "第四类"
                }
            ]
        },
        {
            type: "radar",
            name: "",
            data: [
                {
                    value: [0.296863898, 0.035358418, 0.119652873, 0.017393078, 0.317486304, 0.46907099],
                    name: "第五类"
                }
            ]
        }
    ]
};
    chart_c1.setOption(option);

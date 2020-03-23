// 基于准备好的容器(这里的容器是id为chart1的div)，初始化echarts实例
var chart1 = echarts.init(document.getElementById("chart1"));
	
// 圆环图各环节的颜色
var color = ['#a5b7fd', '#597bfc', '#0035fb'];

// 圆环图各环节的名称和值(系列中各数据项的名称和值)
// 指定图表的配置项和数据
var option = {
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
                    max: 0.741795364
                },
                {
                    text: "飞行次数",
                    min: 0,
                    max: 0.109022366
                },
                {
                    text: "平均每公里票价",
                    min: 0,
                    max: 0.128849086
                },
                {
                    text: "总里程",
                    min: 0,
                    max: 0.05807435
                },
                {
                    text: "时间间隔差值",
                    min: 0,
                    max: 0.317486304
                },
                {
                    text: "平均折扣率",
                    min: 0,
                    max: 0.518620118
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

// 使用刚指定的配置项和数据显示图表
chart1.setOption(option)

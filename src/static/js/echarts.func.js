
function getEchart (dom) {
  return echarts.init(dom);
  // return echarts.init(dom, '', {renderer: 'svg'});
}

function getOptions (opt) {
  let options = {}
  if (opt.type === 'line-mixs' || opt.type === 'line-mixs-l') {
    options = {
      legend: {
        show: true,
        data: ['平均得分率', '最高得分率', '考生得分率'],
        bottom: 20,
        textStyle: {
          color: '#8c8c9e',
          fontSize: 14
        }
      },
      grid: {
        bottom: '35%'
      },
      xAxis: {
        type: 'category',
        data: opt.data.xaxis,
        axisLine: {
          lineStyle: {
            color: '#8d8d9e'
          }
        },
        axisLabel: {
          interval: 0,
          formatter: function (value, index) {
            var len = value.length;
            var vals = [value]
            if (len > 5) {
              var pos = Math.ceil(len / 2)
              vals = [value.slice(0, pos), value.slice(pos, len)];
            }
            return '{xlabel|' + vals.join('\n') + '}'
          },
          rich: {
            xlabel: {
              fontSize: 13,
              color: '#6b6b7e',
              width: 80,
              lineHeight: 15
            }
          }
        },
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [
        {
          name: '平均得分率',
          data: opt.data.ave,
          type: 'line',
          hoverAnimation: false,
          lineStyle: {
            color: '#b04245',
            type: 'dashed'
          },
          label: {
            show: true,
            color: '#b04245',
            position: 'bottom',
            formatter: function (param) {
              return (param.value * 100).toFixed(2) + '%'
            }
          },
          itemStyle: {
            color: '#b04245',
            borderColor: '#b04245'
          }
        },
        {
          name: '最高得分率',
          data: opt.data.max,
          type: 'line',
          hoverAnimation: false,
          lineStyle: {
            color: '#fe8259'
          },
          label: {
            show: true,
            color: '#fe8259',
            position: 'top',
            formatter: function (param) {
              return (param.value * 100).toFixed(2) + '%'
            }
          },
          itemStyle: {
            color: '#fe8259',
            borderColor: '#fe8259'
          }
        },
        {
          name: '考生得分率',
          data: opt.data.user,
          type: 'scatter',
          hoverAnimation: false,
          label: {
            show: true,
            color: '#6f79c4',
            position: ['-50px', '0'],
            formatter: function (param) {
              return (param.value * 100).toFixed(2) + '%'
            }
          },
          itemStyle: {
            color: '#6f79c4',
            borderColor: '#fff',
            borderWidth: 2,
            shadowBlur: 5,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOffsetY: 2
          }
        }
      ]
    }

    if (opt.type === 'line-mixs-l') {
      options.grid = {
        bottom: '30%',
        left: '5%',
        right: '5%'
      }
    }
  } else if (opt.type === 'bar-mixs' || opt.type === 'bar-mixs-l') {
    var barWidth = Math.floor(20 * 6 / opt.data.yaxis.length)
    options = {
      legend: {
        show: true,
        data: ['考生得分率', '同水平', 'A等考生'],
        bottom: 20,
        textStyle: {
          color: '#8c8c9e',
          fontSize: 14
        }
      },
      grid: {
        bottom: '30%',
        left: '30%'
      },
      xAxis: {
        type: 'value',
        position: 'top',
        min: 0,
        max: 1,
        splitNumber: 5,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          color: '#8c8c9e',
          fontSize: 14,
          margin: 20,
          formatter: function (value) {
            return (value * 100) + '%'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: opt.data.yaxis,
        axisLine: {
          lineStyle: {
            color: '#8d8d9e'
          }
        },
        axisLabel: {
          color: '#6b6b7e',
          padding: [0, 10, 0, 0]
        },
        axisTick: {
          show: false
        }
      },
      series: [
        {
          name: '考生得分率',
          type: 'bar',
          data: opt.data.user,
          barWidth: barWidth,
          itemStyle: {
            color: '#b04245'
          }
        },
        {
          name: '同水平',
          type: 'scatter',
          data: opt.data.equ,
          hoverAnimation: false,
          itemStyle: {
            color: '#6f79c4',
            borderColor: '#fff',
            borderWidth: 2,
            shadowBlur: 5,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOffsetY: 2
          }
        },
        {
          name: 'A等考生',
          type: 'scatter',
          data: opt.data.max,
          hoverAnimation: false,
          itemStyle: {
            color: '#fe8259',
            borderColor: '#fff',
            borderWidth: 2,
            shadowBlur: 5,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOffsetY: 2
          }
        }
      ]
    }

    if (opt.type === 'bar-mixs-l') {
      options.grid = {
        bottom: '15%',
        left: '20%'
      }
      options.xAxis.splitNumber = 10
      options.yAxis.axisLabel['fontSize'] = 15
    }

  } else if (opt.type === 'bar') {
    options = {
      title: {
        text: opt.data.title,
        textStyle: {
          color: '#a6a5b4',
          fontSize: 18,
          fontWeight: 'normal'
        },
        top: 31,
        left: 31
      },
      grid: {
        top: '30%',
        bottom: '10%',
        left: '35%'
      },
      xAxis: {
        show: false
      },
      yAxis: {
        type: 'category',
        data: ['考生', '全体平均', '全体同等考生', '全体A等考生'],
        axisLine: {
          lineStyle: {
            color: '#8d8d9e'
          }
        },
        axisLabel: {
          color: '#6b6b7e',
          fontSize: 16,
          padding: [0, 20, 0, 0]
        },
        axisTick: {
          show: false
        }
      },
      series: [
        {
          name: opt.data.dataType,
          type: 'bar',
          data: opt.data.nums,
          barWidth: 20,
          label: {
            show: true,
            color: '#6b6b7e',
            position: 'right',
            formatter: function (params) {
              var val = params.value * 100
              var prec = val.toFixed(2) + '%'
              return val >= 18 ? '{tinyLabel|'+ prec +'}' : prec
            },
            rich: {
              tinyLabel: {
                padding: [0,0,0,-50],
                color: '#fff'
              }
            }
          },
          itemStyle: {
            color: function (params) {
              var opa = params.dataIndex === 0 ? 7 : 0.5
              if (params.seriesName === 'hard') {
                return 'rgba(179, 71, 74, '+ opa +')'
              } else if (params.seriesName === 'mid') {
                return 'rgba(255, 126, 83, '+ opa +')'
              } else {
                return 'rgba(114, 124, 197, '+ opa +')'
              }
            }
          }
        }
      ]
    }
  } else {
    options = {
      title: {
        text: opt.data.title,
        textStyle: {
          color: '#a5a5b3',
          fontSize: 18,
          fontWeight: 'normal'
        },
        top: 20,
        left: 31
      },
      grid: {
        top: '20%',
        left: '10%',
        right: '5%',
        bottom: '12%'
      },
      xAxis: {
        type: 'category',
        data: opt.data.xaxis,
        interval: 0,
        axisLine: {
          lineStyle: {
            color: '#a6a5b4'
          }
        },
        axisLabel: {
          color: '#6b6b7e',
          fontSize: 14,
          padding: [10, 0, 0, 0]
        },
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        name: '题目难度',
        nameLocation: 'middle',
        nameGap: 60,
        nameTextStyle: {
          fontSize: 16,
        },
        type: 'value',
        min: 0,
        max: 1,
        splitNumber: 10,
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#8d8d9e'
          }
        },
        axisLabel: {
          fontSize: 14,
          padding: [0, 10, 0, 0]
        }
      },
      series: [
        {
          name: '难度',
          data: opt.data.nums,
          type: 'scatter',
          hoverAnimation: false,
          label: {
            show: true,
            color: '#fff',
            position: 'top',
            formatter: function (params) {
              var labels = params.data.labels
              var len = labels.length
              var newLen = Math.ceil(len / 2)
              var newLables = []
              var labelCont = labels.join('\n')

              var format = ['{icon|×}']
              if (len > 6) {
                for (var i = 0; i < newLen - 1; i++) {
                  var newSplit = [labels[2 * i], labels[2 * i + 1]]
                  newLables.push(newSplit.join(' '))
                }
                labelCont = newLables.join('\n')
                format.unshift('{twoCol|'+ labelCont +'}\n')
              } else {
                format.unshift('{oneCol|'+ labelCont +'}\n')
              }
              return format
            },
            rich: {
              twoCol: {
                backgroundColor: opt.data.labelBack,
                color: '#fff',
                align: 'center',
                padding: 3,
                fontSize: 12,
                width: 40
              },
              oneCol: {
                backgroundColor: opt.data.labelBack,
                color: '#fff',
                align: 'center',
                padding: [2, 5, 2, 5],
                fontSize: 12,
                width: 14
              },
              icon: {
                fontSize: 18,
                color: opt.data.labelBack,
                align: 'center'
              }
            }
          },
          itemStyle: {
            color: '#fff',
            borderColor: '#fff'
          }
        }
      ]
    }
  }
  // 禁止载入动画
  options['animation'] = false
  return options
}

function getOpt (opt) {
  let options = {}
  if (opt.type === 'bar-step' || opt.type === 'bars-step') {
    var legend = []
    var series = []
    opt.data.series.map(function (item) {
      legend.push(item.name)
      let sers = {
        name: item.name,
        type: 'bar',
        stack: '百分比',
        barWidth: 20,
        data: item.nums
      }
      if (opt.type === 'bars-step') sers.label = {
        show: true,
        position: 'bottom',
        color: '#a5a5b2',
        fontSize: 12,
        formatter: function (params) {
          return (params.value * 100) + '%'
        }
      }
      series.push(sers)
    })

    options = {
      color: ['#4fb2d5', '#6f79c4', '#ff7b4f', '#c0504d'],
      legend: {
        data: legend,
        bottom: 20,
        itemWidth: 15,
        itemGap: 20,
        textStyle: {
          color: '#8c8c9e',
          fontSize: 14
        }
      },
      grid: {
        top: '20%',
        left: '5%',
        right: '10%',
        bottom: '45%',
        containLabel: true
      },
      xAxis:  {
        type: 'value',
        min: 0,
        max: 1,
        splitNumber: 5,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true
        },
        axisLabel: {
          color: '#a5a5b2',
          fontSize: 14,
          formatter: function (value) {
            return (value * 100) + '%'
          }
        }
      },
      yAxis: {
        type: 'category'
      },
      series: series
    }

    if (opt.type === 'bars-step') {
      var isTiny = opt.data.yaxis[0].length <=3
      options.xAxis.splitLine.show = false
      options.xAxis.axisLabel.show = false
      options.yAxis = {
        type: 'category',
        data: opt.data.yaxis,
        offset: isTiny ? -430 : -450,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          fontSize: 17,
          fontWeight: 600,
          color: '#46464c',
          padding: [0, 0, 70, 0]
        }
      }
      options.grid = {
        top: '5%',
        left: isTiny ? '5%' : '0',
        right: '10%',
        bottom: '10%',
        containLabel: true
      }
    }
  } else if (opt.type === 'bars') {
    var yaxis = []
    var sdata = []
    opt.data.nums.map(function (item) {
      yaxis.push(item.name)
      sdata.push(item.nums)
    })
    options = {
      title: {
        text: opt.data.title,
        left: 'center',
        top: 30,
        textStyle: {
            fontSize: 18,
            color: '#46464c'
        }
      },
      grid: {
        top: '30%',
        left: '5%',
        right: '8%',
        bottom: '10%',
        containLabel: true
      },
      xAxis:  {
        type: 'value',
        position: 'top',
        min: 0,
        max: 1,
        splitNumber: 10,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          color: '#a5a5b2',
          fontSize: 12,
          formatter: function (value) {
            return (value * 100) + '%'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: yaxis,
        axisLine: {
          lineStyle: {
            color: '#8d8d9e'
          }
        },
        axisLabel: {
          color: '#6b6b7e',
          fontSize: 16,
          padding: [0, 20, 0, 0]
        },
        axisTick: {
          show: false
        }
      },
      series: [
        {
          type: 'bar',
          stack: '总量',
          label: {
            show: true,
            position: 'right',
            color: '#8d8d9e',
            fontSize: 14,
            formatter: function (params) {
              return (params.value * 100) + '%'
            }
          },
          barWidth: 20,
          itemStyle: {
            color: function (params) {
              var colors = ['#6f79c4', '#ff7b4f', '#c0504d'];
              var len = colors.length;
              return colors[len - params.dataIndex - 1]
            }
          },
          data: sdata
        }
      ]
    }
  } else if (opt.type === 'line-mix') {

    options = {
      legend: {
        show: true,
        data: ['本校平均得分率', '全体平均得分率', 'TOP10平均得分率'],
        bottom: 20,
        itemGap: 20,
        textStyle: {
          color: '#8c8c9e',
          fontSize: 14
        }
      },
      grid: {
        bottom: '30%',
        left: '5%',
        right: '5%'
      },
      xAxis: {
        type: 'category',
        data: opt.data.xaxis,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#6b6b7e',
            width: 2
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          formatter: function (value, index) {
            var len = value.length;
            var vals = [value]
            if (len > 5) {
              var pos = Math.ceil(len / 2)
              vals = [value.slice(0, pos), value.slice(pos, len)];
            }
            return '{xlabel|' + vals.join('\n') + '}'
          },
          rich: {
            xlabel: {
              fontSize: 13,
              color: '#6b6b7e',
              width: 80,
              fontWeight: 600,
              lineHeight: 15
            }
          }
        },
        splitLine: {
          show: true
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#d1d6e0'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
          lineStyle: {
              color: '#d1d6e0'
          }
        }
      },
      series: [
        {
          name: '全体平均得分率',
          data: opt.data.ave,
          type: 'line',
          hoverAnimation: false,
          lineStyle: {
            color: '#b04245'
          },
          label: {
            show: true,
            color: '#b04245',
            position: 'bottom',
            formatter: function (param) {
              return (param.value * 100).toFixed(2) + '%'
            }
          },
          itemStyle: {
            color: '#b04245',
            borderColor: '#b04245'
          }
        },
        {
          name: 'TOP10平均得分率',
          data: opt.data.max,
          type: 'line',
          hoverAnimation: false,
          lineStyle: {
            color: '#fe8259'
          },
          label: {
            show: true,
            color: '#fe8259',
            position: 'top',
            formatter: function (param) {
              return (param.value * 100).toFixed(2) + '%'
            }
          },
          itemStyle: {
            color: '#fe8259',
            borderColor: '#fe8259'
          }
        },
        {
          name: '本校平均得分率',
          data: opt.data.user,
          type: 'scatter',
          hoverAnimation: false,
          label: {
            show: true,
            color: '#6f79c4',
            position: ['-50px', '0'],
            formatter: function (param) {
              return (param.value * 100).toFixed(2) + '%'
            }
          },
          itemStyle: {
            color: '#6f79c4',
            borderColor: '#fff',
            borderWidth: 2,
            shadowBlur: 5,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOffsetY: 2
          }
        }
      ]
    }
  } else if(opt.type === 'bar-mix') {
    var barWidth = Math.floor(20 * 6 / opt.data.yaxis.length)

    options = {
      legend: {
        show: true,
        data: ['本校平均得分率', '高分段平均得分率'],
        itemGap: 20,
        bottom: 20,
        textStyle: {
          color: '#8c8c9e',
          fontSize: 14
        }
      },
      grid: {
        top: '15%',
        bottom: '18%',
        left: '20%',
        right: '10%'
      },
      xAxis: {
        type: 'value',
        position: 'top',
        min: 0,
        max: 1,
        splitNumber: 5,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#d1d6e0'
          }
        },
        axisLabel: {
          color: '#8c8c9e',
          fontSize: 14,
          formatter: function (value) {
            return (value * 100).toFixed(2) + '%'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: opt.data.yaxis,
        axisLine: {
          lineStyle: {
            color: '#6b6b7e',
            width: 2
          }
        },
        axisLabel: {
          color: '#6b6b7e',
          fontWeight: 600,
          fontSize: 14,
          padding: [0, 10, 0, 0]
        },
        axisTick: {
          show: false
        }
      },
      series: [
        {
          name: '本校平均得分率',
          type: 'bar',
          data: opt.data.user,
          barWidth: barWidth,
          itemStyle: {
            color: '#b04245'
          }
        },
        {
          name: '高分段平均得分率',
          type: 'scatter',
          data: opt.data.max,
          hoverAnimation: false,
          itemStyle: {
            color: '#6f79c4',
            borderColor: '#fff',
            borderWidth: 2,
            shadowBlur: 5,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOffsetY: 2
          }
        }
      ]
    }
  }
  // 禁止载入动画
  // options['animation'] = false
  return options
}

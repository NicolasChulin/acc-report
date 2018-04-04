
function getEchart (dom) {
  return echarts.init(dom);
  // return echarts.init(dom, null, {renderer: 'svg'});
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
          color: '#6b6b7e'
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
            position: 'top',
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
            position: 'top',
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
        bottom: '30%'
      }
      options.xAxis.axisLabel['fontSize'] = 15
    }
  } else if (opt.type === 'bar-mixs' || opt.type === 'bar-mixs-l') {
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
        left: '35%'
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
          barWidth: 20,
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
        left: '15%'
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
            color: '#fff',
            position: 'insideRight',
            formatter: function (params) {
              return (params.value * 100).toFixed(2) + '%'
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
        top: 37,
        left: 31
      },
      grid: {
        top: '20%',
        left: '10%',
      },
      xAxis: {
        type: 'category',
        data: opt.data.xaxis,
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
          interval: 3,
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
              if (len >= 8) {
                for (var i = 0; i < newLen - 1; i++) {
                  var newSplit = [labels[2 * i], labels[2 * i + 1]]
                  newLables.push(newSplit.join(' '))
                }
                return newLables.join('\n')
              } else {
                return labels.join('\n')
              }
            },
            backgroundColor: opt.data.labelBack,
            padding: 3,
          },
          itemStyle: {
            color: opt.data.labelBack
          }
        }
      ]
    }
  }

  return options
}

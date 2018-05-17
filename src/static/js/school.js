require.config({
  paths: {
    'jquery': '/static/libs/jquery-2.1.4.min',
    'template': '/static/libs/template',
    'indexData': '/static/js/school-data',
    'echarts': '/static/js/echarts.common.min'
  }
});

require(['jquery', 'template', 'indexData', 'echarts'], function ($, tmpl, indexData, echarts) {
  var isSmallScreen = false;
  var $bdmCont = $('#bd-m-cont');
  var $subtBtn = $('#sub-t-btn');
  var $navs = $('#bd-navs');
  var $bdMain = $('#bd-main');

  resizeEvent();
  createMenus();
  $navs.find('.navs-li').first().trigger('click');

  $subtBtn.on('click', function () {
    $navs.fadeToggle();
  });

  // 注册resize事件
  function resizeEvent () {
    var docEl     = document.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function() {
      var clientWidth = docEl.clientWidth;
      isSmallScreen = clientWidth <= 1160;
      if (isSmallScreen) {
        var rate = (clientWidth / 1160).toFixed(2);
        var bdm_h = (rate * 1641 + 60) + 'px';
        $bdMain.css({height: bdm_h});
        var scale = 'scale(' + rate + ',' + rate +')';
        $bdmCont.css({transform: scale});
      } else {
        $bdMain.removeAttr('style');
        $bdmCont.removeAttr('style');
        $navs.removeAttr('style');
      }
    }

    recalc();
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
  }

  // 制作导航
  function createMenus () {
    var menusTmpl = $('#menus').html();
    var tmplDom = tmpl(menusTmpl, {menus: indexData.menus});

    $navs.append(tmplDom);

    // 事件绑定
    $navs.on('click', '.navs-sub-li', function (e) {
      e.stopPropagation();
      $(this).parents('.navs-li').siblings().find('li').removeClass('li-act');
      $(this).addClass('li-act').siblings().removeClass('li-act');

      changeSubsTitle($(this), 1);
      if (isSmallScreen) {
        $navs.fadeOut();
      }
    });

    $navs.on('click', '.navs-li', function (e) {
      e.stopPropagation();
      var $this = $(this);
      var $subs = $this.children('.navs-sub');
      $this.addClass('li-act li-subs-open').siblings().removeClass('li-act li-subs-open');

      if ($subs.length === 0) {
        changeSubsTitle($this, 0);
        if (isSmallScreen) {
          $navs.fadeOut();
        }
      }
    });

  }
  // 切换副标题
  function changeSubsTitle ($target, isSub) {
    var $subsTitle = $('#bd-sub-title');
    var status = {
      category: '',
      subCategory: ''
    }
    var title = {
      main: '',
      sub: ''
    }
    if (isSub) {
      var $pli = $target.parents('.navs-li');
      status.subCategory = $target.attr('data-page');
      status.category = $pli.attr('data-page');
      title.sub = $target.attr('data-name');
      title.main = $pli.attr('data-name');
    } else {
      status.category = $target.attr('data-page');
      title.main = $target.attr('data-name');
    }

    var tname = title.main + (title.sub ? '-' + title.sub : '')
    $subsTitle.text(tname);
    updatePage(status)
  }

  // 更新主体内容
  function updatePage (status) {
    var categorys = ['chinese', 'english', 'math', 'physics', 'chemistry', 'history', 'politics']
    var type = categorys.indexOf(status.category) > -1 ? 'category' : status.category
    switch (type) {
      case 'introduction':
        setIntroduction();
        break;
      case 'overview':
        setOverview(status.subCategory);
        break;
      case 'goal':
        setGoal(status.subCategory);
        break;
      case 'category':
        setCategory(status.subCategory);
        break;
      default:
        break;
    }
  }

  // 显示说明
  function setIntroduction () {
    var hTmpl = $('#introduction').html();
    var dom = tmpl(hTmpl);
    $bdmCont.empty().append(dom);
  }
  // 显示总得分
  function setOverview (type) {
    var hTmpl = $('#overview').html();
    // 临时
    var type = parseInt(type)
    if (type === 1) {
      indexData.overview.infos.title = '选考基础能力的学生总成绩'
    } else if (type === 2) {
      indexData.overview.infos.title = '选考科学素养的学生总成绩'
    } else {
      indexData.overview.infos.title = '选考人文素养的学生总成绩'
    }

    var dom = tmpl(hTmpl, {items: indexData.overview, index: type});
    $bdmCont.empty().append(dom);
    // draw chart
    overviewChart()
  }
  function overviewChart () {
    var allRatesDom = document.getElementById('all-rates');

    getEchart(allRatesDom).setOption(getOptions({
      type: 'bar-step',
      data: {
        series: indexData.overview.series
      }
    }))
  }
  // 显示得分情况
  function setGoal (type) {
    var hTmpl = $('#goal').html();
    var items = indexData.goal[parseInt(type) - 1]
    var dom = tmpl(hTmpl, {items: items, index: type});
    $bdmCont.empty().append(dom);

    // draw chart
    goalChart(items.chart)
  }
  function goalChart (chart) {
    var allRateDom = document.getElementById('all-rate');
    var areaRateDom = document.getElementById('area-rate');
    var ratesCategorysDom = document.getElementById('rates-categorys');

    getEchart(allRateDom).setOption(getOptions({
      type: 'bars',
      data: {
        title: chart.all.title,
        nums: chart.all.series
      }
    }))
    getEchart(areaRateDom).setOption(getOptions({
      type: 'bars',
      data: {
        title: chart.area.title,
        nums: chart.area.series
      }
    }))
    getEchart(ratesCategorysDom).setOption(getOptions({
      type: 'bars-step',
      data: {
        yaxis: chart.categorys.yaxis,
        series: chart.categorys.series
      }
    }))
  }

  // 显示科目数据
  function setCategory (type) {
    var hTmpl = $('#category').html();
    var items = indexData.category[parseInt(type) - 1]
    var dom = tmpl(hTmpl, {items: items, index: type});
    $bdmCont.empty().append(dom);

    // draw chart
    categoryChart(items.chart)
  }
  function categoryChart (chart) {
    var allLineDom = document.getElementById('all-line-yy');
    var allBarDom = document.getElementById('all-bar-yy');

    // all
    getEchart(allLineDom).setOption(getOptions({
      type: 'line-mix',
      data: chart.line
    }))
    getEchart(allBarDom).setOption(getOptions({
      type: 'bar-mix',
      data: chart.bar
    }))
  }

  /* echarts */
  function getEchart (dom) {
    return echarts.init(dom);
    // return echarts.init(dom, '', {renderer: 'svg'});
  }

  function getOptions (opt) {
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
      barWidth = barWidth > 30 ? 30 : barWidth;

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

});

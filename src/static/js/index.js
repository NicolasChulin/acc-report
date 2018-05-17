require.config({
  paths: {
    'jquery': '/static/libs/jquery-2.1.4.min',
    'template': '/static/libs/template',
    'indexData': '/static/js/index-data',
    'echarts': '/static/js/echarts.common.min'
  }
})

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
    if (status.subCategory) {
      switchScore(status.subCategory);
    } else {
      switch (status.category) {
        case 'cover':
          setCover();
          break;
        case 'catalog':
          setCatalog();
          break;
        case 'introduction':
          setIntroduction();
          break;
        case 'overview':
          setOverview();
          break;
        default:
          break;
      }
    }
  }
  // 显示封面
  function setCover () {
    var hTmpl = $('#cover').html();
    var dom = tmpl(hTmpl, {cover: indexData.cover});
    $bdmCont.empty().append(dom);
  }
  // 显示目录
  function setCatalog () {
    var hTmpl = $('#catalog').html();
    var dom = tmpl(hTmpl);
    $bdmCont.empty().append(dom);
  }
  // 显示说明
  function setIntroduction () {
    var hTmpl = $('#introduction').html();
    var dom = tmpl(hTmpl);
    $bdmCont.empty().append(dom);
  }
  // 显示总成绩
  function setOverview () {
    var hTmpl = $('#overview').html();
    var dom = tmpl(hTmpl, {overview: indexData.overview});
    $bdmCont.empty().append(dom);
    // draw svg
    $bdmCont.find('.base-chart-cont').each(function (i) {
      var ratio = $(this).attr('echart-ratio')
      var svg = creatSvg('svg', {
        width: 100,
        height: 100,
        'class': 'chart-svg'
      })
      $(svg).append(creatSvg('circle', {
        cx: 50, cy: 50, r: 50, fill: '#f2e7e8'
      }))
      $(svg).append(creatSvg('path', {
        d: getPath(ratio), fill: '#7b181c'
      }))
      $(svg).append(creatSvg('circle', {
        cx: 50, cy: 50, r: 40, fill: '#fff'
      }))
      $(this).append(svg);
    })
  }
  // 切换科目不同分值统计项
  function switchScore (subCategory) {
    switch (subCategory) {
      case '01':
        setItemOne();
        break;
      case '02':
        indexData.itemTwo.tag = '与全体考生比较'
        setItemTwo();
        break;
      case '03':
        indexData.itemTwo.tag = '与本省考生比较'
        setItemTwo();
        break;
      case '04':
        setItemFour();
        break;
      case '05':
        setItemFive();
        break;

      default:
       break;
    }
  }
  // 显示第1页
  function setItemOne () {
    var hTmpl = $('#item-one').html();
    var dom = tmpl(hTmpl, {items: indexData.itemOne});
    $bdmCont.empty().append(dom);
    // draw chart
    itemOneDrawChart()
  }
  function itemOneDrawChart () {
    var allLineDom = document.getElementById('all-line-chart');
    var allBarDom = document.getElementById('all-bar-chart');
    var areaLineDom = document.getElementById('area-line-chart');
    var areaBarDom = document.getElementById('area-bar-chart');

    getEchart(allLineDom).setOption(getOptions({
      type: 'line-mixs',
      data: indexData.itemOne.all.ddrChart
    }))
    getEchart(allBarDom).setOption(getOptions({
      type: 'bar-mixs',
      data: indexData.itemOne.all.dfrChart
    }))
    getEchart(areaLineDom).setOption(getOptions({
      type: 'line-mixs',
      data: indexData.itemOne.area.ddrChart
    }))
    getEchart(areaBarDom).setOption(getOptions({
      type: 'bar-mixs',
      data: indexData.itemOne.area.dfrChart
    }))
  }
  // 显示第2, 3页
  function setItemTwo () {
    var hTmpl = $('#item-two').html();
    var dom = tmpl(hTmpl, {items: indexData.itemTwo});
    $bdmCont.empty().append(dom);
    // draw chart
    itemTwoDrawChart()
  }
  function itemTwoDrawChart () {
    var allLineDom = document.getElementById('all-line');
    var allBarDom = document.getElementById('all-bar');

    getEchart(allLineDom).setOption(getOptions({
      type: 'line-mixs-l',
      data: indexData.itemTwo.all.ddrChart
    }))
    getEchart(allBarDom).setOption(getOptions({
      type: 'bar-mixs-l',
      data: indexData.itemTwo.all.dfrChart
    }))
  }
  // 显示第4页
  function setItemFour () {
    var hTmpl = $('#item-four').html();
    var dom = tmpl(hTmpl, {items: indexData.itemFour});
    $bdmCont.empty().append(dom);
    // draw chart
    itemFourDrawChart()
  }
  function itemFourDrawChart () {
    var hardAllDom = document.getElementById('hard-all');
    var hardAreaDom = document.getElementById('hard-area');
    var midAllDom = document.getElementById('mid-all');
    var midAreaDom = document.getElementById('mid-area');
    var easyAllDom = document.getElementById('easy-all');
    var easyAreaDom = document.getElementById('easy-area');

    getEchart(hardAllDom).setOption(getOptions({
      type: 'bar',
      data: indexData.itemFour.hard.all
    }))
    getEchart(hardAreaDom).setOption(getOptions({
      type: 'bar',
      data: indexData.itemFour.hard.area
    }))
    getEchart(midAllDom).setOption(getOptions({
      type: 'bar',
      data: indexData.itemFour.mid.all
    }))
    getEchart(midAreaDom).setOption(getOptions({
      type: 'bar',
      data: indexData.itemFour.mid.area
    }))
    getEchart(easyAllDom).setOption(getOptions({
      type: 'bar',
      data: indexData.itemFour.easy.all
    }))
    getEchart(easyAreaDom).setOption(getOptions({
      type: 'bar',
      data: indexData.itemFour.easy.area
    }))
  }
  // 显示第5页
  function setItemFive () {
    var hTmpl = $('#item-five').html();
    var dom = tmpl(hTmpl, {items: indexData.itemFive});
    $bdmCont.empty().append(dom);
    // draw chart
    itemFiveDrawChart()
  }
  function itemFiveDrawChart () {
    var errPointDom = document.getElementById('err-point');
    var errCapaDom = document.getElementById('err-capa');
    getEchart(errPointDom).setOption(getOptions({
      type: 'line',
      data: indexData.itemFive.point.chart
    }))
    getEchart(errCapaDom).setOption(getOptions({
      type: 'line',
      data: indexData.itemFive.capa.chart
    }))
  }

  /* echarts */
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
      barWidth = barWidth > 30 ? 30 : barWidth;

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
          show: false,
          min: 0,
          max: 1
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

  /* svg-circle */
  function creatSvg (tag, attrs) {
    if(!document.createElementNS) return
    var svg = document.createElementNS('http://www.w3.org/2000/svg', tag)
    for (let key in attrs) {
      svg.setAttribute(key, attrs[key])
    }
    return svg
  }

  function getPath (ratio) {
    var w = 0, h = 0;
    var p = Math.PI
    var nr = ratio > 50 ? ratio - 50 : ratio
    var angle = (p - (2 * p * nr) / 100) / 2
    var chord = 100 * Math.cos(angle)
    var h = chord * Math.cos(angle)
    var w = chord * Math.sin(angle)

    if (ratio > 50) {
      w = 50 - w
      h = 100 - h
      return 'M50,0  A50,50 0 1,1 ' + w.toFixed(2) + ',' + h.toFixed(2) + ' L 50 50 Z'
    } else {
      w = w + 50
      return 'M50,0  A50,50 0 0,1 ' + w.toFixed(2) + ',' + h.toFixed(2) + ' L 50 50 Z'
    }
  }
});

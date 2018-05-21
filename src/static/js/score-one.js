window.onload = function () {
  var allLineDom = document.getElementById('all-line-chart');
  var allBarDom = document.getElementById('all-bar-chart');
  var areaLineDom = document.getElementById('area-line-chart');
  var areaBarDom = document.getElementById('area-bar-chart');

  var charts = {
    allLine: getEchart(allLineDom),
    allBar: getEchart(allBarDom),
    areaLine: getEchart(areaLineDom),
    areaBar: getEchart(areaBarDom)
  }
  // all
  charts.allLine.setOption(getOptions({
    type: 'line-mixs',
    data: {
      xaxis: ['分析综合能力分析综合能力分析', '分析综合能力', '分析综合能力', '表达应用能力', '记忆能力', '鉴赏评价能力'],
      ave: [0.44, 0.5, 0.48, 0.52, 0.45, 0.56],
      max: [0.88, 1, 0.88, 0.78, 0.85, 0.92],
      user: [0.67, 0.86, 0.65, 0.66, 0.65, 0.72]
    }
  }))
  charts.allBar.setOption(getOptions({
    type: 'bar-mixs',
    data: {
      yaxis: ['分析综合能力分析综合能力分析', '分析综合能力', '分析综合能力', '表达应用能力', '记忆能力', '鉴赏评价能力'],
      equ: [0.44, 0.5, 0.48, 0.44, 0.5, 0.48],
      max: [0.88, 1, 0.88, 0.88, 1, 0.88],
      user: [0.67, 0.86, 0.65, 0.67, 0.86, 0.65]
    }
  }))
  // area
  charts.areaLine.setOption(getOptions({
    type: 'line-mixs',
    data: {
      xaxis: ['分析综合能力分析综合能力分析', '分析综合能力', '分析综合能力', '表达应用能力', '记忆能力', '鉴赏评价能力'],
      ave: [0.44, 0.5, 0.48, 0.52, 0.45, 0.56],
      max: [0.88, 1, 0.88, 0.78, 0.85, 0.92],
      user: [0.67, 0.86, 0.65, 0.66, 0.65, 0.72]
    }
  }))
  charts.areaBar.setOption(getOptions({
    type: 'bar-mixs',
    data: {
      yaxis: ['分析综合能力分析综合能力分析', '分析综合能力', '分析综合能力', '表达应用能力', '记忆能力', '鉴赏评价能力'],
      equ: [0.44, 0.5, 0.48, 0.44, 0.5, 0.48],
      max: [0.88, 1, 0.88, 0.88, 1, 0.88],
      user: [0.67, 0.86, 0.65, 0.67, 0.86, 0.65]
    }
  }))
}

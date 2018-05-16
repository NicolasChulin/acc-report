window.onload = function () {
  var allLineDom = document.getElementById('all-line');
  var allBarDom = document.getElementById('all-bar');

  var charts = {
    allLine: getEchart(allLineDom),
    allBar: getEchart(allBarDom)
  }
  // all
  charts.allLine.setOption(getOptions({
    type: 'line-mixs-l',
    data: {
      xaxis: ['分析综合能力', '探索能力', '理解能力', '表达应用能力', '记忆能力', '鉴赏评价能力', '鉴赏评价能力', '鉴赏评价能力'],
      ave: [0.44, 0.5, 0.48, 0.52, 0.45, 0.56, 0.56, 0.56],
      max: [0.88, 1, 0.88, 0.78, 0.85, 0.92, 0.92, 0.92],
      user: [0.67, 0.86, 0.65, 0.66, 0.65, 0.72, 0.72, 0.72]
    }
  }))
  charts.allBar.setOption(getOptions({
    type: 'bar-mixs-l',
    data: {
      yaxis: ['分析综合能力', '分析综合能力', '分析综合能力', '探索能力', '理解能力', '表达应用能力', '记忆能力', '鉴赏评价能力', '记忆能力', '记忆能力'],
      equ: [0.44,0.44,0.44, 0.5, 0.48, 0.52, 0.45, 0.66, 0.66, 0.66],
      max: [0.44,0.44, 0.88, 1, 0.88, 0.78, 0.85, 0.92, 0.92, 0.92],
      user: [0.44,0.44,0.67, 0.86, 0.65, 0.66, 0.45, 0.72, 0.72, 0.72]
    }
  }))
}

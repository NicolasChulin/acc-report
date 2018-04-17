window.onload = function () {
  var allLineDom = document.getElementById('all-line-yy');
  var allBarDom = document.getElementById('all-bar-yy');

  // all
  getEchart(allLineDom).setOption(getOpt({
    type: 'line-mix',
    data: {
      xaxis: ['鉴赏评价能力', '识记能力', '表达应用能力', '理解能力', '探索能力', '分析综合能力'],
      ave: [0.44, 0.5, 0.48, 0.52, 0.45, 0.56],
      max: [0.88, 1, 0.88, 0.78, 0.85, 0.92],
      user: [0.67, 0.86, 0.65, 0.66, 0.65, 0.72]
    }
  }))
  getEchart(allBarDom).setOption(getOpt({
    type: 'bar-mix',
    data: {
      yaxis: ['鉴赏评价能力', '识记能力', '表达应用能力', '理解能力', '探索能力', '分析综合能力'],
      max: [0.88, 1, 0.88, 0.78, 0.85, 0.92],
      user: [0.67, 0.86, 0.65, 0.66, 0.45, 0.72]
    }
  }))
}

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
      xaxis: ['语言文化知识与运用', '古诗文阅读', '现代文阅读'],
      ave: [0.44, 0.5, 0.48],
      max: [0.88, 1, 0.88],
      user: [0.67, 0.86, 0.65]
    }
  }))
  charts.allBar.setOption(getOptions({
    type: 'bar-mixs',
    data: {
      yaxis: ['语言文化知识与运用', '古诗文阅读', '现代文阅读'],
      equ: [0.44, 0.5, 0.48],
      max: [0.88, 1, 0.88],
      user: [0.67, 0.86, 0.65]
    }
  }))
  // area
  charts.areaLine.setOption(getOptions({
    type: 'line-mixs',
    data: {
      xaxis: ['语言文化知识与运用', '古诗文阅读', '现代文阅读'],
      ave: [0.44, 0.5, 0.48],
      max: [0.88, 1, 0.88],
      user: [0.67, 0.86, 0.65]
    }
  }))
  charts.areaBar.setOption(getOptions({
    type: 'bar-mixs',
    data: {
      yaxis: ['语言文化知识与运用', '古诗文阅读', '现代文阅读'],
      equ: [0.44, 0.5, 0.48],
      max: [0.88, 1, 0.88],
      user: [0.67, 0.86, 0.65]
    }
  }))
}

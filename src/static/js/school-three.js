window.onload = function () {
  var allLineDom = document.getElementById('all-line-yy');
  var allBarDom = document.getElementById('all-bar-yy');

  // all
  getEchart(allLineDom).setOption(getOpt({
    type: 'line-mix',
    data: {
      xaxis: ['语言文化知识与运用', '古诗文阅读', '现代文阅读'],
      ave: [0.44, 0.5, 0.48],
      max: [0.88, 1, 0.88],
      user: [0.67, 0.86, 0.65]
    }
  }))
  getEchart(allBarDom).setOption(getOpt({
    type: 'bar-mix',
    data: {
      yaxis: ['现代文阅读', '古诗文阅读', '知识与应用'],
      max: [0.88, 1, 0.88],
      user: [0.67, 0.86, 0.65]
    }
  }))
}

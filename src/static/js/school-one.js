window.onload = function () {
  var allRatesDom = document.getElementById('all-rates');

  // all
  getEchart(allRatesDom).setOption(getOpt({
    type: 'bar-step',
    data: [
      {
        name: '低分段',
        nums: [0.1]
      },
      {
        name: '中等',
        nums: [0.3]
      },
      {
        name: '良好',
        nums: [0.5]
      },
      {
        name: '高分段',
        nums: [0.1]
      }
    ]
  }))

}

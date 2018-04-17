window.onload = function () {
  var allRateDom = document.getElementById('all-rate');
  var areaRateDom = document.getElementById('area-rate');
  var ratesCategorysDom = document.getElementById('rates-categorys');

  // all
  getEchart(allRateDom).setOption(getOpt({
    type: 'bars',
    data: {
      title: '超过全体的学校百分比',
      nums: [
        {
          name: '历史',
          nums: 0.4
        },
        {
          name: '政治',
          nums: 0.5
        }
      ]
    }
  }))
  // area
  getEchart(areaRateDom).setOption(getOpt({
    type: 'bars',
    data: {
      title: '超过本省的学校百分比',
      nums: [
        {
          name: '历史',
          nums: 0.5
        },
        {
          name: '政治',
          nums: 0.2
        }
      ]
    }
  }))
  // categorys
  getEchart(ratesCategorysDom).setOption(getOpt({
    type: 'bars-step',
    data: {
      yaxis: ['历史', '政治'],
      series: [
        {
          name: '低分段',
          nums: [0.1, 0.1]
        },
        {
          name: '中等',
          nums: [0.4, 0.4]
        },
        {
          name: '良好',
          nums: [0.4, 0.4]
        },
        {
          name: '高分段',
          nums: [0.1, 0.1]
        }
      ]
    }
  }))
}

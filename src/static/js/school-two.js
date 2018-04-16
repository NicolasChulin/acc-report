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
          name: '语文素养与应用',
          nums: 0.4
        },
        {
          name: '数学科学与探究',
          nums: 0.5
        },
        {
          name: '英语能力与思辨',
          nums: 0.4
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
          name: '语文素养与应用',
          nums: 0.5
        },
        {
          name: '数学科学与探究',
          nums: 0.2
        },
        {
          name: '英语能力与思辨',
          nums: 0.6
        }
      ]
    }
  }))
  // categorys
  getEchart(ratesCategorysDom).setOption(getOpt({
    type: 'bars-step',
    data: [
      {
        name: '低分段',
        nums: [0.1, 0.1, 0.1]
      },
      {
        name: '中等',
        nums: [0.3, 0.3, 0.3]
      },
      {
        name: '良好',
        nums: [0.5, 0.5, 0.5]
      },
      {
        name: '高分段',
        nums: [0.1, 0.1, 0.1]
      }
    ]
  }))
}

window.onload = function () {
  var hardAllDom = document.getElementById('hard-all');
  var hardAreaDom = document.getElementById('hard-area');
  var midAllDom = document.getElementById('mid-all');
  var midAreaDom = document.getElementById('mid-area');
  var easyAllDom = document.getElementById('easy-all');
  var easyAreaDom = document.getElementById('easy-area');

  var charts = {
    hardAll: getEchart(hardAllDom),
    hardArea: getEchart(hardAreaDom),
    midAll: getEchart(midAllDom),
    midArea: getEchart(midAreaDom),
    easyAll: getEchart(easyAllDom),
    easyArea: getEchart(easyAreaDom)
  }
  // hard
  charts.hardAll.setOption(getOptions({
    type: 'bar',
    data: {
      title: '与全体考生对比',
      dataType: 'hard', // hard: 难题，mid：中等，easy：容易
      nums: [0.35, 0.26, 0.17, 0.17]
    }
  }))
  charts.hardArea.setOption(getOptions({
    type: 'bar',
    data: {
      title: '与本省考生对比',
      dataType: 'hard',
      nums: [0.65, 0.86, 0.67, 0.40]
    }
  }))
  // mid
  charts.midAll.setOption(getOptions({
    type: 'bar',
    data: {
      title: '与全体考生对比',
      dataType: 'mid',
      nums: [0.65, 0.86, 0.67, 0.40]
    }
  }))
  charts.midArea.setOption(getOptions({
    type: 'bar',
    data: {
      title: '与本省考生对比',
      dataType: 'mid',
      nums: [0.65, 0.86, 0.67, 0.40]
    }
  }))
  // easy
  charts.easyAll.setOption(getOptions({
    type: 'bar',
    data: {
      title: '与全体考生对比',
      dataType: 'easy',
      nums: [0.65, 0.86, 0.67, 0.40]
    }
  }))
  charts.easyArea.setOption(getOptions({
    type: 'bar',
    data: {
      title: '与本省考生对比',
      dataType: 'easy',
      nums: [0.65, 0.86, 0.67, 0.40]
    }
  }))
}

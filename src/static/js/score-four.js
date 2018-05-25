window.onload = function () {
  var errPointDom1 = document.getElementById('err-point1');
  var errPointDom2 = document.getElementById('err-point2');
  var errCapaDom1 = document.getElementById('err-capa1');
  var errCapaDom2 = document.getElementById('err-capa2');

  var xaxix = []
  var nums = []
  for (var i = 1; i <= 15; i++) {
    var xlabel = i < 10 ? '0' + i + '题' : i + '题'
    xaxix.push(xlabel)
    var val = 0.2 + 0.02 * i
    var lnum = Math.ceil(Math.random() * 5)
    var labels = []
    for (var j = 0; j < lnum; j++) {
      labels.push('A' + (j + 1))
    }
    nums.push({
      value: val,
      labels: labels
    })
  }

  // 知识
  getEchart(errPointDom1).setOption(getOptions({
    type: 'line',
    data: {
      title: '考生错答题目的难度-知识情况1',
      xaxis: xaxix,
      labelBack: '#b14447',
      nums: nums
    }
  }));
  getEchart(errPointDom2).setOption(getOptions({
    type: 'line',
    data: {
      title: '考生错答题目的难度-知识情况2',
      xaxis: xaxix,
      labelBack: '#b14447',
      nums: nums
    }
  }));

  // 能力
  getEchart(errCapaDom1).setOption(getOptions({
    type: 'line',
    data: {
      title: '考生错答题目的难度-能力（素质）情况',
      xaxis: xaxix,
      labelBack: '#6f79c4',
      nums: nums
    }
  }));
  getEchart(errCapaDom2).setOption(getOptions({
    type: 'line',
    data: {
      title: '考生错答题目的难度-能力（素质）情况',
      xaxis: xaxix,
      labelBack: '#6f79c4',
      nums: nums
    }
  }));
}

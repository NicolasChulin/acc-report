window.onload = function () {
  var errPointDom = document.getElementById('err-point');
  var errCapaDom = document.getElementById('err-capa');

  var charts = {
    errPoint: getEchart(errPointDom),
    errCapa: getEchart(errCapaDom)
  }
  // 知识
  charts.errPoint.setOption(getOptions({
    type: 'line',
    data: {
      title: '考生错答题目的难度-知识情况',
      xaxis: ['16题', '11题', '6题', '15题', '20题', '14题', '18题', '1题', '9题', '7题'],
      labelBack: '#b14447',
      nums: [
        {
          value: 0.23,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.35,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.37,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.28,
          labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11']
        },
        {
          value: 0.36,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.40,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.45,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.34,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.30,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.34,
          labels: ['A1', 'A2', 'A3']
        }
      ]
    }
  }))
  // 能力
  charts.errCapa.setOption(getOptions({
    type: 'line',
    data: {
      title: '考生错答题目的难度-能力（素质）情况',
      xaxis: ['16题', '11题', '6题', '15题', '20题', '7题', '7题', '7题', '7题', '7题', '7题', '14题', '18题', '1题', '9题', '7题'],
      labelBack: '#6f79c4',
      // pointDom: document.getElementById('echartPointBlue'),
      nums: [
        {
          value: 0.23,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.35,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.37,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.28,
          labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11']
        },
        {
          value: 0.36,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.40,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.45,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.34,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.30,
          labels: ['A1', 'A2', 'A3']
        },
        {
          value: 0.28,
          labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11']
        },
        {
          value: 0.28,
          labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11']
        },
        {
          value: 0.28,
          labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11']
        },
        {
          value: 0.28,
          labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11']
        },
        {
          value: 0.28,
          labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11']
        },
        {
          value: 0.28,
          labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11']
        },
        {
          value: 0.34,
          labels: ['A1', 'A2', 'A3']
        }
      ]
    }
  }))
}

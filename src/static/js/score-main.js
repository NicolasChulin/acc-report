window.onload = function () {
  var baseChartsBox = document.querySelectorAll('.base-chart-cont');
  baseChartsBox.forEach(function (echartBox) {
    var ratio = echartBox.getAttribute('echart-ratio')
    var svg = creatSvg('svg', {
      width: 100,
      height: 100,
      'class': 'chart-svg'
    })
    svg.appendChild(creatSvg('circle', {
      cx: 50, cy: 50, r: 50, fill: '#f2e7e8'
    }))
    svg.appendChild(creatSvg('path', {
      d: getPath(ratio), fill: '#7b181c'
    }))
    svg.appendChild(creatSvg('circle', {
      cx: 50, cy: 50, r: 40, fill: '#fff'
    }))
    echartBox.appendChild(svg)
  })
}

function creatSvg (tag, attrs) {
  if(!document.createElementNS) return
  var svg = document.createElementNS('http://www.w3.org/2000/svg', tag)
  for (let key in attrs) {
    svg.setAttribute(key, attrs[key])
  }
  return svg
}

function getPath (ratio) {
  var w = 0, h = 0;
  var p = Math.PI
  var nr = ratio > 50 ? ratio - 50 : ratio
  var angle = (p - (2 * p * nr) / 100) / 2
  var chord = 100 * Math.cos(angle)
  var h = chord * Math.cos(angle)
  var w = chord * Math.sin(angle)

  if (ratio > 50) {
    w = 50 - w
    h = 100 - h
    return 'M50,0  A50,50 0 1,1 ' + w.toFixed(2) + ',' + h.toFixed(2) + ' L 50 50 Z'
  } else {
    w = w + 50
    return 'M50,0  A50,50 0 0,1 ' + w.toFixed(2) + ',' + h.toFixed(2) + ' L 50 50 Z'
  }
}

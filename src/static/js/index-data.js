
define(function () {

  // navs
  var menus = [
    {
      name: '封面',
      page: 'cover'
    },
    {
      name: '目录',
      page: 'catalog'
    },
    {
      name: '前言',
      page: 'introduction'
    },
    {
      name: '总成绩',
      page: 'overview'
    },
    {
      name: '语文',
      page: 'chinese',
      subs: [
        {
          name: '01',
          page: '01'
        },
        {
          name: '02',
          page: '02'
        },
        {
          name: '03',
          page: '03'
        },
        {
          name: '04',
          page: '04'
        },
        {
          name: '05',
          page: '05'
        }
      ]
    },
    {
      name: '英语',
      page: 'chinese',
      subs: [
        {
          name: '01',
          page: '01'
        },
        {
          name: '02',
          page: '02'
        },
        {
          name: '03',
          page: '03'
        },
        {
          name: '04',
          page: '04'
        },
        {
          name: '05',
          page: '05'
        }
      ]
    },
    {
      name: '数学',
      page: 'math',
      subs: [
        {
          name: '01',
          page: '01'
        },
        {
          name: '02',
          page: '02'
        },
        {
          name: '03',
          page: '03'
        },
        {
          name: '04',
          page: '04'
        },
        {
          name: '05',
          page: '05'
        }
      ]
    },
    {
      name: '物理',
      page: 'physics',
      subs: [
        {
          name: '01',
          page: '01'
        },
        {
          name: '02',
          page: '02'
        },
        {
          name: '03',
          page: '03'
        },
        {
          name: '04',
          page: '04'
        },
        {
          name: '05',
          page: '05'
        }
      ]
    },
    {
      name: '化学',
      page: 'chemistry',
      subs: [
        {
          name: '01',
          page: '01'
        },
        {
          name: '02',
          page: '02'
        },
        {
          name: '03',
          page: '03'
        },
        {
          name: '04',
          page: '04'
        },
        {
          name: '05',
          page: '05'
        }
      ]
    }
  ]

  // cover
  var cover = {
    reportNo: '0001000-11233-11133',
    username: '韩梅梅',
    school: '北大附中',
    createTime: '2018-01-15'
  }

  // overview
  var overview = {
    user: {
      name: '韩梅梅',
      zkzh: '01030013503',
      choice: '科学素养',
      school: '北大附中',
      idno: '42100220000',
      examTime: '2018年3月20日'
    },
    score: {
      sum: 540.00,
      exceedAll: '60.30%',
      exceedArea: '78.88%',
      level: {
        all: 'B',
        allGress: '56%',
        area: 'A',
        areaGress: '65%'
      },
      all: {
        ave: 354.50,
        max: 732.50,
        unum: 11541
      },
      area: {
        ave: 354.50,
        max: 732.50,
        unum: 11541
      }
    },
    bases: [
      {
        subjectName: '语文素养与应用',
        score: 108.00,
        all: {
          level: 60,
          unum: 11541,
          ave: 86.50,
          max: 150.00
        },
        area: {
          level: '54%',
          unum: 3456,
          ave: 91.12,
          max: 150.00
        }
      },
      {
        subjectName: '数学科学与探索',
        score: 108.00,
        all: {
          level: 60,
          unum: 11541,
          ave: 86.50,
          max: 150.00
        },
        area: {
          level: '54%',
          unum: 3456,
          ave: 91.12,
          max: 150.00
        }
      },
      {
        subjectName: '英语能力与思辨',
        score: 108.00,
        all: {
          level: 60,
          unum: 11541,
          ave: 86.50,
          max: 150.00
        },
        area: {
          level: '54%',
          unum: 3456,
          ave: 91.12,
          max: 150.00
        }
      }
    ],
    science: [
      {
        subjectName: '物理',
        score: 108.00,
        all: {
          level: 60,
          unum: 11541,
          ave: 86.50,
          max: 150.00
        },
        area: {
          level: '54%',
          unum: 3456,
          ave: 91.12,
          max: 150.00
        }
      },
      {
        subjectName: '化学',
        score: 108.00,
        all: {
          level: 60,
          unum: 11541,
          ave: 86.50,
          max: 150.00
        },
        area: {
          level: '54%',
          unum: 3456,
          ave: 91.12,
          max: 150.00
        }
      }
    ]
  }

  // itemOne
  var itemOne = {
    header: {
      title: '考生在语文素养与应用学科各知识模块作答情况分析',
      description: '基于ACC测验目的、形式、时间等方面的考虑，根据《课程标准》、《考试大纲》，结合当前学科研究前沿，重点考察X个知识模块的内容。'
    },
    all: {
      ddrTables: [
        {
          no: 'A',
          name: '语言文化知识与运用',
          topicNum: 22,
          user: '67.00%',
          ave: '55.54%',
          equal: '70.00%',
          aLevel: '85.54%'
        },
        {
          no: 'B',
          name: '古诗文阅读',
          topicNum: 22,
          user: '67.00%',
          ave: '55.54%',
          equal: '70.00%',
          aLevel: '85.54%'
        },
        {
          no: 'C',
          name: '现代文阅读',
          topicNum: 22,
          user: '67.00%',
          ave: '55.54%',
          equal: '70.00%',
          aLevel: '85.54%'
        }
      ],
      ddrChart: {
        xaxis: ['语言文化知识与运用', '古诗文阅读', '现代文阅读'],
        ave: [0.44, 0.5, 0.48],
        max: [0.88, 1, 0.88],
        user: [0.67, 0.86, 0.65]
      },
      dfrTables: [
        {
          name: '与全体平均水平相比',
          good: 'A、B、C',
          weak: '无'
        },
        {
          name: '与全体同等水平相比',
          good: 'A、B',
          weak: 'C'
        },
        {
          name: '与全体A等考生相比',
          good: 'A',
          weak: 'B、C'
        }
      ],
      dfrChart: {
        yaxis: ['语言文化知识与运用', '古诗文阅读', '现代文阅读'],
        equ: [0.44, 0.5, 0.48],
        max: [0.88, 1, 0.88],
        user: [0.67, 0.86, 0.65]
      }
    },
    area: {
      ddrTables: [
        {
          no: 'A',
          name: '语言文化知识与运用',
          topicNum: 22,
          user: '67.00%',
          ave: '55.54%',
          equal: '70.00%',
          aLevel: '85.54%'
        },
        {
          no: 'B',
          name: '古诗文阅读',
          topicNum: 22,
          user: '67.00%',
          ave: '55.54%',
          equal: '70.00%',
          aLevel: '85.54%'
        },
        {
          no: 'C',
          name: '现代文阅读',
          topicNum: 22,
          user: '67.00%',
          ave: '55.54%',
          equal: '70.00%',
          aLevel: '85.54%'
        }
      ],
      ddrChart: {
        xaxis: ['语言文化知识与运用', '古诗文阅读', '现代文阅读'],
        ave: [0.44, 0.5, 0.48],
        max: [0.88, 1, 0.88],
        user: [0.67, 0.86, 0.65]
      },
      dfrTables: [
        {
          name: '与本省平均水平相比',
          good: 'A、B、C',
          weak: '无'
        },
        {
          name: '与本省平均水平相比',
          good: 'A、B',
          weak: 'C'
        },
        {
          name: '与本省平均水平相比',
          good: 'A',
          weak: 'B、C'
        }
      ],
      dfrChart: {
        yaxis: ['语言文化知识与运用', '古诗文阅读', '现代文阅读'],
        equ: [0.44, 0.5, 0.48],
        max: [0.88, 1, 0.88],
        user: [0.67, 0.86, 0.65]
      }
    }
  }

  // itemTwo
  var itemTwo = {
    header: {
      title: '考生在语文素养与应用学科各能力（素养）模块作答情况分析',
      description: '基于ACC测验目的、形式、时间等方面的考虑，根据《课程标准》、《考试大纲》，结合当前学科研究前沿，重点考察X个知识模块的内容。'
    },
    tag: '与全体考生比较',
    all: {
      ddrTables: [
        {
          no: 'E',
          name: '分析综合能力',
          topicNum: 22,
          user: '67.00%',
          ave: '55.54%',
          equal: '70.00%',
          aLevel: '85.54%'
        },
        {
          no: 'F',
          name: '探索能力',
          topicNum: 22,
          user: '67.00%',
          ave: '55.54%',
          equal: '70.00%',
          aLevel: '85.54%'
        },
        {
          no: 'G',
          name: '理解能力',
          topicNum: 22,
          user: '67.00%',
          ave: '55.54%',
          equal: '70.00%',
          aLevel: '85.54%'
        },
        {
          no: 'H',
          name: '表达应用能力',
          topicNum: 22,
          user: '67.00%',
          ave: '55.54%',
          equal: '70.00%',
          aLevel: '85.54%'
        },
        {
          no: 'I',
          name: '记忆能力',
          topicNum: 22,
          user: '67.00%',
          ave: '55.54%',
          equal: '70.00%',
          aLevel: '85.54%'
        },
        {
          no: 'J',
          name: '鉴赏评价能力',
          topicNum: 22,
          user: '67.00%',
          ave: '55.54%',
          equal: '70.00%',
          aLevel: '85.54%'
        }
      ],
      ddrChart: {
        xaxis: ['分析综合能力', '探索能力', '理解能力', '表达应用能力', '记忆能力', '鉴赏评价能力'],
        ave: [0.44, 0.5, 0.48, 0.52, 0.45, 0.56],
        max: [0.88, 1, 0.88, 0.78, 0.85, 0.92],
        user: [0.67, 0.86, 0.65, 0.66, 0.65, 0.72]
      },
      dfrTables: [
        {
          name: '与全体平均水平相比',
          good: 'E、F、G',
          weak: 'H、I、J'
        },
        {
          name: '与全体同等水平相比',
          good: 'E、F、G',
          weak: 'H、I、J'
        },
        {
          name: '与全体A等考生相比',
          good: 'E、F、G',
          weak: 'H、I、J'
        }
      ],
      dfrChart: {
        yaxis: ['分析综合能力', '探索能力', '理解能力', '表达应用能力', '记忆能力', '鉴赏评价能力'],
        equ: [0.44, 0.5, 0.48, 0.52, 0.45, 0.66],
        max: [0.88, 1, 0.88, 0.78, 0.85, 0.92],
        user: [0.67, 0.86, 0.65, 0.66, 0.45, 0.72]
      }
    }
  }

  // itemFour
  var itemFour = {
    hard: {
      topicNum: 13,
      all: {
        title: '与全体考生对比',
        dataType: 'hard',
        nums: [0.65, 0.86, 0.67, 0.40]
      },
      area: {
        title: '与本省考生对比',
        dataType: 'hard',
        nums: [0.65, 0.86, 0.67, 0.40]
      }
    },
    mid: {
      topicNum: 28,
      all: {
        title: '与全体考生对比',
        dataType: 'mid',
        nums: [0.65, 0.86, 0.67, 0.40]
      },
      area: {
        title: '与本省考生对比',
        dataType: 'mid',
        nums: [0.65, 0.86, 0.67, 0.40]
      }
    },
    easy: {
      topicNum: 17,
      all: {
        title: '与全体考生对比',
        dataType: 'easy',
        nums: [0.65, 0.86, 0.67, 0.40]
      },
      area: {
        title: '与本省考生对比',
        dataType: 'easy',
        nums: [0.65, 0.86, 0.67, 0.40]
      }
    }
  }

  // itemFive
  var itemFive = {
    point: {
      tips: [
        {name: 'A1', cont: 'XXX'},
        {name: 'A2', cont: 'XXX'},
        {name: 'A3', cont: 'XXX'},
        {name: 'A4', cont: 'XXX'}
      ],
      chart: {
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
    },
    capa: {
      tips: [
        {name: 'A1', cont: 'XXX'},
        {name: 'A2', cont: 'XXX'},
        {name: 'A3', cont: 'XXX'},
        {name: 'A4', cont: 'XXX'}
      ],
      chart: {
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
    }
  }

  return {
    menus: menus,
    cover: cover,
    overview: overview,
    itemOne: itemOne,
    itemTwo: itemTwo,
    itemFour: itemFour,
    itemFive: itemFive
  }
});

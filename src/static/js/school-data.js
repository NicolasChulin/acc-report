
define(function () {

  // navs
  var menus = [
    {
      name: '前言',
      page: 'introduction'
    },
    {
      name: '总成绩',
      page: 'overview',
      subs: [
        {
          name: '基础能力',
          page: 1
        },
        {
          name: '科学素养',
          page: 2
        },
        {
          name: '人文素养',
          page: 3
        }
      ]
    },
    {
      name: '得分情况',
      page: 'goal',
      subs: [
        {
          name: '基础能力',
          page: 1
        },
        {
          name: '科学素养',
          page: 2
        },
        {
          name: '人文素养',
          page: 3
        }
      ]
    },
    {
      name: '语文',
      page: 'chinese',
      subs: [
        {
          name: '知识模块作答分析（全体）',
          page: 1
        },
        {
          name: '知识模块作答分析（本省）',
          page: 2
        },
        {
          name: '能力模块作答分析（全体）',
          page: 3
        },
        {
          name: '能力模块作答分析（本省）',
          page: 4
        }
      ]
    },
    {
      name: '英语',
      page: 'english',
      subs: [
        {
          name: '知识模块作答分析（全体）',
          page: 1
        },
        {
          name: '知识模块作答分析（本省）',
          page: 2
        },
        {
          name: '能力模块作答分析（全体）',
          page: 3
        },
        {
          name: '能力模块作答分析（本省）',
          page: 4
        }
      ]
    },
    {
      name: '数学',
      page: 'math',
      subs: [
        {
          name: '知识模块作答分析（全体）',
          page: 1
        },
        {
          name: '知识模块作答分析（本省）',
          page: 2
        },
        {
          name: '能力模块作答分析（全体）',
          page: 3
        },
        {
          name: '能力模块作答分析（本省）',
          page: 4
        }
      ]
    },
    {
      name: '物理',
      page: 'physics',
      subs: [
        {
          name: '知识模块作答分析（全体）',
          page: 1
        },
        {
          name: '知识模块作答分析（本省）',
          page: 2
        },
        {
          name: '能力模块作答分析（全体）',
          page: 3
        },
        {
          name: '能力模块作答分析（本省）',
          page: 4
        }
      ]
    },
    {
      name: '化学',
      page: 'chemistry',
      subs: [
        {
          name: '知识模块作答分析（全体）',
          page: 1
        },
        {
          name: '知识模块作答分析（本省）',
          page: 2
        },
        {
          name: '能力模块作答分析（全体）',
          page: 3
        },
        {
          name: '能力模块作答分析（本省）',
          page: 4
        }
      ]
    },
    {
      name: '历史',
      page: 'history',
      subs: [
        {
          name: '知识模块作答分析（全体）',
          page: 1
        },
        {
          name: '知识模块作答分析（本省）',
          page: 2
        },
        {
          name: '能力模块作答分析（全体）',
          page: 3
        },
        {
          name: '能力模块作答分析（本省）',
          page: 4
        }
      ]
    },
    {
      name: '政治',
      page: 'politics',
      subs: [
        {
          name: '知识模块作答分析（全体）',
          page: 1
        },
        {
          name: '知识模块作答分析（本省）',
          page: 2
        },
        {
          name: '能力模块作答分析（全体）',
          page: 3
        },
        {
          name: '能力模块作答分析（本省）',
          page: 4
        }
      ]
    }
  ]

  // overview
  var overview = {
    infos: {
      school: '华南师范大学附属中学',
      applyNum: 48,
      examTime: '2018年3月20日',
      examNum: 45,
      title: '选考科学素养的学生总成绩'
    },
    user: {
      valiableNum: 54,
      aveSchool: 286.86,
      maxSchool: 348.56,
      minScholl: 231.85,
      aveArea: 286.64,
      aveAll: 286.54
    },
    rates: {
      all: {
        schoolNum: 789,
        rate: '88%'
      },
      area: {
        schoolNum: 123,
        rate: '88%'
      }
    },
    score: [
      {
        name: 'TOP10',
        sch_num: 19,
        sch_rate: '35.18%',
        area_num: 19,
        area_rate: '35.18%',
        all_num: 19,
        all_rate: '35.18%'
      },
      {
        name: '高分段',
        sch_num: 19,
        sch_rate: '35.18%',
        area_num: 19,
        area_rate: '35.18%',
        all_num: 19,
        all_rate: '35.18%'
      },
      {
        name: '低分段',
        sch_num: 19,
        sch_rate: '35.18%',
        area_num: 19,
        area_rate: '35.18%',
        all_num: 19,
        all_rate: '35.18%'
      }
    ],
    series: [
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
  }

  // itemOne
  var goal = [
    {
      title: '基础学科',
      allScholl: 369,
      areaSchool: 123,
      tables: [
        {
          name: '语文素养与应用',
          series: [
            {
              name: '本校情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            },
            {
              name: '本省情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            },
            {
              name: '全体情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            }
          ]
        },
        {
          name: '数学科学与探究',
          series: [
            {
              name: '本校情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            },
            {
              name: '本省情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            },
            {
              name: '全体情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            }
          ]
        },
        {
          name: '英语能力与思辨',
          series: [
            {
              name: '本校情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            },
            {
              name: '本省情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            },
            {
              name: '全体情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            }
          ]
        }
      ],
      chart: {
        all: {
          title: '超过全体的学校百分比',
          series: [
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
        },
        area: {
          title: '超过本省的学校百分比',
          series: [
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
        },
        categorys: {
          yaxis: ['语文素养与应用', '数学科学与探究', '英语能力与思辨'],
          series: [
            {
              name: '低分段',
              nums: [0.1, 0.1, 0.1]
            },
            {
              name: '中等',
              nums: [0.4, 0.4, 0.4]
            },
            {
              name: '良好',
              nums: [0.4, 0.4, 0.4]
            },
            {
              name: '高分段',
              nums: [0.1, 0.1, 0.1]
            }
          ]
        }
      }
    },
    {
      title: '科学素养',
      allScholl: 369,
      areaSchool: 123,
      tables: [
        {
          name: '物理',
          series: [
            {
              name: '本校情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            },
            {
              name: '本省情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            },
            {
              name: '全体情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            }
          ]
        },
        {
          name: '化学',
          series: [
            {
              name: '本校情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            },
            {
              name: '本省情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            },
            {
              name: '全体情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            }
          ]
        }
      ],
      chart: {
        all: {
          title: '超过全体的学校百分比',
          series: [
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
        },
        area: {
          title: '超过本省的学校百分比',
          series: [
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
        },
        categorys: {
          yaxis: ['物理', '化学'],
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
      }
    },
    {
      title: '人文素养',
      allScholl: 369,
      areaSchool: 123,
      tables: [
        {
          name: '历史',
          series: [
            {
              name: '本校情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            },
            {
              name: '本省情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            },
            {
              name: '全体情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            }
          ]
        },
        {
          name: '政治',
          series: [
            {
              name: '本校情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            },
            {
              name: '本省情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            },
            {
              name: '全体情况',
              ave: 51.67,
              max: 89,
              min: 24,
              examNum: 64,
              topNum: 8,
              topRate: '13.11%'
            }
          ]
        }
      ],
      chart: {
        all: {
          title: '超过全体的学校百分比',
          series: [
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
        },
        area: {
          title: '超过本省的学校百分比',
          series: [
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
        },
        categorys: {
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
      }
    }
  ]

  // category
  var category = [
    {
      title: '考生在语文素养与应用学科各知识模块作答情况分析',
      description: '基于ACC测验目的、形式、时间等方面的考虑，根据《课程标准》、《考试大纲》，结合当前学科研究前沿，重点考察X个知识模块的内容。',
      type: '全体',
      tables: {
        list: [
          {
            no: 'A1',
            name: '语言文化知识与运用',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          },
          {
            no: 'A2',
            name: '古诗文阅读',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          },
          {
            no: 'A3',
            name: '现代文阅读',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          }
        ],
        compare: [
          {
            name: '与全体平均水平相比',
            high: 'A1、A2',
            low: 'A3'
          },
          {
            name: '与全体高分段相比',
            high: '无',
            low: 'A1、A2、A3'
          },
          {
            name: '与全体TOP10相比',
            high: '无',
            low: 'A1、A2、A3'
          }
        ]
      },
      chart: {
        line: {
          xaxis: ['语言文化知识与运用', '古诗文阅读', '现代文阅读'],
          ave: [0.44, 0.5, 0.48],
          max: [0.88, 1, 0.88],
          user: [0.67, 0.86, 0.65]
        },
        bar: {
          yaxis: ['现代文阅读', '古诗文阅读', '知识与应用'],
          max: [0.88, 1, 0.88],
          user: [0.67, 0.86, 0.65]
        }
      }
    },
    {
      title: '考生在语文素养与应用学科各知识模块作答情况分析',
      description: '基于ACC测验目的、形式、时间等方面的考虑，根据《课程标准》、《考试大纲》，结合当前学科研究前沿，重点考察X个知识模块的内容。',
      type: '本省',
      tables: {
        list: [
          {
            no: 'A1',
            name: '语言文化知识与运用',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          },
          {
            no: 'A2',
            name: '古诗文阅读',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          },
          {
            no: 'A3',
            name: '现代文阅读',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          }
        ],
        compare: [
          {
            name: '与本省平均水平相比',
            high: 'A1、A2',
            low: 'A3'
          },
          {
            name: '与本省高分段相比',
            high: '无',
            low: 'A1、A2、A3'
          },
          {
            name: '与本省TOP10相比',
            high: '无',
            low: 'A1、A2、A3'
          }
        ]
      },
      chart: {
        line: {
          xaxis: ['语言文化知识与运用', '古诗文阅读', '现代文阅读'],
          ave: [0.44, 0.5, 0.48],
          max: [0.88, 1, 0.88],
          user: [0.67, 0.86, 0.65]
        },
        bar: {
          yaxis: ['现代文阅读', '古诗文阅读', '知识与应用'],
          max: [0.88, 1, 0.88],
          user: [0.67, 0.86, 0.65]
        }
      }
    },
    {
      title: '考生在语文素养与应用学科各能力（素养）模块作答情况分析',
      description: '基于ACC测验目的、形式、时间等方面的考虑，根据《课程标准》、《考试大纲》，结合当前学科研究前沿，重点考察X大能力（素养）模块内容。',
      type: '全体',
      tables: {
        list: [
          {
            no: 'E',
            name: '分析综合能力',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          },
          {
            no: 'F',
            name: '探索能力',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          },
          {
            no: 'G',
            name: '理解能力',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          },
          {
            no: 'H',
            name: '表达应用能力',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          },
          {
            no: 'I',
            name: '记忆能力',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          },
          {
            no: 'J',
            name: '鉴赏评价能力',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          }
        ],
        compare: [
          {
            name: '与全体平均水平相比',
            high: 'E、F、G、H',
            low: 'I、J'
          },
          {
            name: '与全体高分段相比',
            high: '无',
            low: 'E、F、G、H、I、J'
          },
          {
            name: '与全体TOP10相比',
            high: '无',
            low: 'E、F、G、H、I、J'
          }
        ]
      },
      chart: {
        line: {
          xaxis: ['鉴赏评价能力', '识记能力', '表达应用能力', '理解能力', '探索能力', '分析综合能力'],
          ave: [0.44, 0.5, 0.48, 0.52, 0.45, 0.56],
          max: [0.88, 1, 0.88, 0.78, 0.85, 0.92],
          user: [0.67, 0.86, 0.65, 0.66, 0.65, 0.72]
        },
        bar: {
          yaxis: ['鉴赏评价能力', '识记能力', '表达应用能力', '理解能力', '探索能力', '分析综合能力'],
          max: [0.88, 1, 0.88, 0.78, 0.85, 0.92],
          user: [0.67, 0.86, 0.65, 0.66, 0.45, 0.72]
        }
      }
    },
    {
      title: '考生在语文素养与应用学科各能力（素养）模块作答情况分析',
      description: '基于ACC测验目的、形式、时间等方面的考虑，根据《课程标准》、《考试大纲》，结合当前学科研究前沿，重点考察X大能力（素养）模块内容。',
      type: '本省',
      tables: {
        list: [
          {
            no: 'E',
            name: '分析综合能力',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          },
          {
            no: 'F',
            name: '探索能力',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          },
          {
            no: 'G',
            name: '理解能力',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          },
          {
            no: 'H',
            name: '表达应用能力',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          },
          {
            no: 'I',
            name: '记忆能力',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          },
          {
            no: 'J',
            name: '鉴赏评价能力',
            t_num: 22,
            ave_user: '51.63%',
            ave_all: '47.19%',
            max: '45.94%',
            top: '53.00%'
          }
        ],
        compare: [
          {
            name: '与本省平均水平相比',
            high: 'E、F、G、H',
            low: 'I、J'
          },
          {
            name: '与本省高分段相比',
            high: '无',
            low: 'E、F、G、H、I、J'
          },
          {
            name: '与本省TOP10相比',
            high: '无',
            low: 'E、F、G、H、I、J'
          }
        ]
      },
      chart: {
        line: {
          xaxis: ['鉴赏评价能力', '识记能力', '表达应用能力', '理解能力', '探索能力', '分析综合能力'],
          ave: [0.44, 0.5, 0.48, 0.52, 0.45, 0.56],
          max: [0.88, 1, 0.88, 0.78, 0.85, 0.92],
          user: [0.67, 0.86, 0.65, 0.66, 0.65, 0.72]
        },
        bar: {
          yaxis: ['鉴赏评价能力', '识记能力', '表达应用能力', '理解能力', '探索能力', '分析综合能力'],
          max: [0.88, 1, 0.88, 0.78, 0.85, 0.92],
          user: [0.67, 0.86, 0.65, 0.66, 0.45, 0.72]
        }
      }
    }
  ]

  return {
    menus: menus,
    overview: overview,
    goal: goal,
    category: category
  }
});

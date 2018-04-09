
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
      name: '总览',
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
      name: '',
      zkzh: '',
      choice: '',
      school: '',
      idno: '',
      examTime: ''
    }
  }

  return {
    menus: menus,
    cover: cover,
    overview: overview
  }
});

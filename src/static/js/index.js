require.config({
  paths: {
    'jquery': '/static/libs/jquery-2.1.4.min',
    'template': '/static/libs/template',
    'indexData': '/static/js/index-data'
  }
})

require(['jquery', 'template', 'indexData'], function ($, tmpl, indexData) {
  var $bdmCont = $('#bd-m-cont');

  createMenus();
  $('#bd-navs').find('.navs-li').first().trigger('click');

  // 制作导航
  function createMenus () {
    var menusTmpl = $('#menus').html();
    var tmplDom = tmpl(menusTmpl, {menus: indexData.menus});
    var $navs = $('#bd-navs');
    $navs.append(tmplDom);

    // 事件绑定
    $navs.on('click', '.navs-sub-li', function (e) {
      e.stopPropagation();
      $(this).addClass('li-act').siblings().removeClass('li-act');
      changeSubsTitle($(this), true);
    });

    $navs.on('click', '.navs-li', function (e) {
      e.stopPropagation();
      var $this = $(this);
      var $subs = $this.children('.navs-sub');
      $this.addClass('li-act li-subs-open').siblings().removeClass('li-act li-subs-open');

      if ($subs.length) {
        $subs.children('li').first().trigger('click');
      } else {
        changeSubsTitle($this, false);
      }
    });

  }
  // 切换副标题
  function changeSubsTitle ($target, isSub) {
    var $subsTitle = $('#bd-sub-title');
    var status = {
      category: '',
      subCategory: ''
    }
    var title = {
      main: '',
      sub: ''
    }
    if (isSub) {
      var $pli = $target.parents('.navs-li');
      status.subCategory = $target.attr('data-page');
      status.category = $pli.attr('data-page');
      title.sub = $target.attr('data-name');
      title.main = $pli.attr('data-name');
    } else {
      status.category = $target.attr('data-page');
      title.main = $target.attr('data-name');
    }

    var tname = title.main + (title.sub ? '--' + title.sub : '')
    $subsTitle.text(tname);
    updatePage(status)
  }

  // 更新主体内容
  function updatePage (status) {
    switch (status.category) {
      case 'cover':
        setCover();
        break;
      case 'catalog':
        setCatalog();
        break;
      case 'introduction':
        setIntroduction();
        break;

      default:
        break;
    }
  }

  function setCover () {
    var hTmpl = $('#cover').html();
    var dom = tmpl(hTmpl, {cover: indexData.cover});
    $bdmCont.empty().append(dom);
  }

  function setCatalog () {
    var hTmpl = $('#catalog').html();
    var dom = tmpl(hTmpl);
    $bdmCont.empty().append(dom);
  }

  function setIntroduction () {
    var hTmpl = $('#introduction').html();
    var dom = tmpl(hTmpl);
    $bdmCont.empty().append(dom);
  }

});

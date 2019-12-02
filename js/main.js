$(function() {
  $(" .process-pokupki__tab").on("click", function(event) {
    var id = $(this).attr("data-id");
    $(" .process-pokupki__tabs")
      .find(" .tabs-content")
      .removeClass("active-tab")
      .hide();
    $(" .process-pokupki__tabs-row ")
      .find(".process-pokupki__tab")
      .removeClass("active");
    $(this).addClass("active");
    $("#" + id)
      .addClass("active-tab")
      .fadeIn();
    return false;
  });
});

$('.menu-toggle, .menu-cover').click(function(){
  $('body').toggleClass('menu-opened');
  $('body').removeClass('categories-opened');
  return false;
})
$('.categories-toggle, .categories-cover').click(function(){
  $('body').toggleClass('categories-opened');
  $('body').removeClass('menu-opened');
  return false;
});

$(document).mouseup(function(e) {
  var container = $(".header-search");
  if (container.has(e.target).length === 0) {
    $(".search-toggle, .search-popup").removeClass("active");
  }
});

$(
  ".main-menu-item.with-submenu > a, .main-submenu-item.with-submenu > a"
).click(function() {
  if (
    $("body").width() < 1024 &&
    !$(this)
      .parent()
      .hasClass("show")
  ) {
    $(this)
      .parent()
      .parent()
      .children()
      .removeClass("show");
    $(this)
      .parent()
      .addClass("show");
    return false;
  }
});

$(function($, undefined){
  $('#menu-toggle').on('click', function(){
    $('.header__mobile-box').slideToggle()
  });
});

// $(function($, undefined){
//   $('.with-submenu').on('click', function(){
//     $('.with-submenu > .main-submenu').slideToggle()
//   });
// });
$('.with-submenu > a').click(function(){
  if (($('body').width()<768) && (!$(this).parent().hasClass('show'))){
    $(this).parent().parent().children().removeClass('show');
    $(this).parent().addClass('show');
    return false;
  }
})

$(window).on('load', function() {
  $('#page-loader').delay(1000).fadeOut(1200);
});

$(window).scroll(function() {
  ($(this).scrollTop() > 300) ? $('.back-to-top').removeClass('scale-out') : $('.back-to-top').addClass('scale-out');
});

$('.back-to-top').on('click', function(event) {
  event.preventDefault();
  $('body,html').animate({
    scrollTop: 0,
  }, 700);
});

$('.tooltipped').tooltip();

$('.filtr-container').filterizr();
$('.simple-filter li').on('click', function() {
  $('.simple-filter li').removeClass('active-cat');
  $(this).addClass('active-cat');
});

$(".chart").easyPieChart({
  barColor: "#ff5722",
  trackColor: '#1c1c1c',
  scaleColor: false,
  lineWidth: 3,
  lineCap: "round",
  size: 70,
  animate: 2200
});

$('div.skillbar').each(function() {
  $(this).find('div.skillbar-bar').css({
    width: $(this).attr('data-percent')
  });
});
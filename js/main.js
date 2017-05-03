var $history = $('.history');
var $projects = $('.projects');
var $contactfade = $('.contactfade');
var $banner = $('.banner');

var $1 = $('.1');
var $2 = $('.2');
var $3 = $('.3');



$history.waypoint(function (direction) {
  if (direction == 'down') {
    $('.history').addClass('animate');
  }
}, { offset: '70%' });



$projects.waypoint(function (direction) {
  if (direction == 'down') {
    $('.projects').addClass('animate');
  }
}, { offset: '70%' });



$contactfade.waypoint(function (direction) {
  if (direction == 'down') {
    $('.contactfade').addClass('animate');
  }
}, { offset: '60%' });







$history.waypoint(function (direction) {
  if (direction == 'down') {
    $('.1').addClass('orange');
  }

  if (direction == 'up') {
    $('.1').removeClass('orange');
    $('.2').removeClass('orange');
    $('.3').removeClass('orange');
  }
}, { offset: '50%' });



$projects.waypoint(function (direction) {
  if (direction == 'down') {
    $('.2').addClass('orange');
    $('.1').removeClass('orange');
    $('.3').removeClass('orange');
  }

  if (direction == 'up') {
    $('.2').removeClass('orange');
  }
}, { offset: '50%' });



$contactfade.waypoint(function (direction) {
  if (direction == 'down') {
    $('.3').addClass('orange');
    $('.1').removeClass('orange');
    $('.2').removeClass('orange');
  }

  if (direction == 'up') {
    $('.3').removeClass('orange');
  }
}, { offset: '60%' });





$banner.waypoint(function () {
  $('.2').removeClass('orange');
  $('.1').removeClass('orange');
  $('.3').removeClass('orange');
}, { offset: '-20%' });






$1.on('click', function () {
  $('.1').addClass('orange');
  $('.2').removeClass('orange');
  $('.3').removeClass('orange');
});

$2.on('click', function () {
  $('.2').addClass('orange');
  $('.1').removeClass('orange');
  $('.3').removeClass('orange');
});

$3.on('click', function () {
  $('.3').addClass('orange');
  $('.2').removeClass('orange');
  $('.1').removeClass('orange');
});

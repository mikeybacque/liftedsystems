var $history = $('.history');

$history.waypoint(function () {
  $('.history').addClass('animate');
}, { offset: '70%' });

var $projects = $('.projects');

$projects.waypoint(function () {
  $('.projects').addClass('animate');
}, { offset: '70%' });

var $contactfade = $('.contactfade');

$contactfade.waypoint(function () {
  $('.contactfade').addClass('animate');
}, { offset: '60%' });



var $history = $('.history');

$history.waypoint(function () {
  $('.1').addClass('orange');
}, { offset: '50%' });

$history.waypoint(function () {
  $('.2').removeClass('orange');
  $('.3').removeClass('orange');
}, { offset: '100%' });


var $projects = $('.projects');

$projects.waypoint(function () {
  $('.2').addClass('orange');
}, { offset: '70%' });


$projects.waypoint(function () {
  $('.1').removeClass('orange');
  $('.3').removeClass('orange');
}, { offset: '100%' });


var $contactfade = $('.contactfade');

$contactfade.waypoint(function () {
  $('.3').addClass('orange');

}, { offset: '60%' });

$contactfade.waypoint(function () {
  $('.2').removeClass('orange');
  $('.1').removeClass('orange');
}, { offset: '100%' });




var $banner = $('.banner');

$banner.waypoint(function () {
  $('.2').removeClass('orange');
  $('.1').removeClass('orange');
  $('.3').removeClass('orange');
}, { offset: '-20%' });

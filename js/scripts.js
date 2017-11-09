$(document).ready(function() {
	$('#pagepiling').pagepiling({
    anchors: ['page-zero', 'page-one', 'page-two', 'page-three', 'page-four'],
    menu: '#myMenu',
    keyboardScrolling: true,
    sectionSelector: '.section',
		normalScrollElements: '.pp-scrollable'
  })
	var options = { type : 'image' ,
  content:'caps_map.jpg'};
  $('popup').popup(options);

});

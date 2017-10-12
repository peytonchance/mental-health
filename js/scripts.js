$(document).ready(function() {
	$('#pagepiling').pagepiling({
    anchors: ['page-zero', 'page-one', 'page-two', 'page-three', 'page-four'],
    menu: '#myMenu',
    keyboardScrolling: true,
    sectionSelector: '.section',
  })

	// $('a.default_popup').popup();
});

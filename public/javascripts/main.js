'use strict';

$(function() {
	$('.pageframe').addClass('loaded');
	$('.pageframe').removeClass('headeranim');
	// setTimeout(function(){
	// },2500);
	$(".masthead .fitText .title").fitText(.8, { minFontSize: '32px', maxFontSize: '144px' })
});
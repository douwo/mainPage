$(function(){
	titleZeroText_P = $("#titlezero").offset().top;
	titleOneText_P = $("#titleone").offset().top;
	titleTwoText_P = $("#titletwo").offset().top;
})

$(".users-nav-title>li>a").on("click", function() {
	$(".users-nav-title>li").removeClass("active");
	$(this).parent("li").addClass("active");
})
$.get("text.json", function(result) {
	$.each(result.newsTitle, function(i) {
		$("#news>li:eq(" + i + ")>a>span:first").html(result.newsTitle[i]);
	});
	$.each(result.newsContent, function(i) {
		$("#newsContent" + (i + 1) + "_Text").html(result.newsContent[i]);
	});
})
$("#goTop").click(function() {
	$('body,html').animate({
		scrollTop: 0
	}, 800);
})
$(document).scroll(function() {
	var top = $(document).scrollTop();
	if(top < 250) {
		$('#goTop').hide(300);
	} else {
		$('#goTop').show(300);
	}
})
$("#zero").click(function(){
	$('body,html').animate({
		scrollTop: titleZeroText_P
	}, 600);
})
$("#one").click(function(){
	$('body,html').animate({
		scrollTop: titleOneText_P
	}, 600);
})
$("#two").click(function(){
	$('body,html').animate({
		scrollTop: titleTwoText_P
	}, 600);
})
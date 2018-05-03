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

//var nav_li = $(".users-nav-title>li");
$(".users-nav-title>li>a").on("click",function(){
	$(".users-nav-title>li").removeClass("active");
	$(this).parent("li").addClass("active");
})

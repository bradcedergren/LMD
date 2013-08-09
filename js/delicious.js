$(function() {
	$('.mobilemenu-toggle').click(function() {
		$('#NavSlide').slideToggle(200);
	});
	
	$('.add.favorites').click(function() {
		$(this).toggleClass('on off')
		if ($(this).hasClass('off')) {
			$(this).attr('title', 'add to favorites')
		} else {
			$(this).attr('title', 'remove from favorites')
		}
	});
	
	$("#ShowSiteBar").click(function() {
		$("#siteBar").fadeToggle(400);
	})
	
	setTimeout(function(){
    	$('#siteBar').fadeToggle(400)
    },3000)
	
	setTimeout(function(){
    	$('#dough-boy').fadeToggle(400)
    },5000)
});
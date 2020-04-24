$(function () {
	/* body... */
	$(".btn").on('click', function(e) {
		e.preventDefault();
		/* Act on the event */
		$("nav ul").slideToggle(3000);
	});
})
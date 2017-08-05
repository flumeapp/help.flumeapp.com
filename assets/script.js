setTimeout(function() 
{
	var hash = window.location.hash;
	if (hash.length)
	{
		location.hash = "";
		location.hash = hash;
	}
}, 1000);

// $(window).on('load', function()
// {
//     var hash = window.location.hash;
//     if (hash.length)
//     {
//     	location.hash = hash;
//         var tag = $(""+hash+"");
//         $('html, body').animate({scrollTop:$(tag).offset().top}, 2000);
//     }
// });

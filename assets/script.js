var hash = window.location.hash;
if (hash.length)
{
	location.hash = "";
	window.scrollTo(0, 0);

	setTimeout(function() 
	{
		location.hash = hash;
	}, 500);	
}

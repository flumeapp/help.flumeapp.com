setTimeout(function() 
{
	var hash = window.location.hash;
	if (hash.length)
	{
		location.hash = "";
		location.hash = hash;
	}
}, 250);

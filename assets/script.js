$(window).load(function ()
{
    var hash = window.location.hash;
    if (hash.length)
    {
        var tag = $(""+hash+"");
        $('html, body').animate({scrollTop:$(tag).offset().top}, 2000);
    }
});

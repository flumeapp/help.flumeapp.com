setTimeout(function() 
{
    var hash = window.location.hash;
    var tag = $(""+hash+"");
    $('html, body').animate({scrollTop:$(tag).offset().top}, 2000);
}, 2000);

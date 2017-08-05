setTimeout(function() 
{
    var hash = window.location.hash;    
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 2000);
}, 2000);

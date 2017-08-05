//$(window).load(function()
//{
    var hash = window.location.hash;
    
    console.log(hash);
    
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 2000);

    console.log("page loaded");
//});
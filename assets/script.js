$(window).load(function() {
var hash = window.location.hash;
$(document).scrollTop( $(hash).offset().top ); 
});

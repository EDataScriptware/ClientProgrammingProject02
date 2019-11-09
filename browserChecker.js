$(document).ready(function() {
    
    console.log("Browserchecker")

    // If the browser type if Mozilla Firefox
    if ($.browser.mozilla && $.browser.version >= "1.8" ){ 
    // Do nothing - supports jQuery
    }
    // If the browser type is Opera
    if( $.browser.opera)
    {
    // Do nothing - supports jQuery
    }
    // If the web browser type is Safari
    if( $.browser.safari )
    {
    // Do nothing - supports jQuery
    }
    // If the web browser type is Chrome
    if( $.browser.chrome)
    {
    // Do nothing - supports jQuery
    }
    // If the web browser type is Internet Explorer
    if ($.browser.msie && $.browser.version <= 9 )
    {
    // Outdated - does not/may not support jQuery

        // redirects to a website used in Project 01 the jQuery way
        var redirection = "websites.html";
        $(location).attr('href',redirection);
    }
    //If the web browser type is Internet Explorer 9 and above
    if ($.browser.msie && $.browser.version > 9)
    {
    // Outdated - does not or may not support jQuery
    }
});
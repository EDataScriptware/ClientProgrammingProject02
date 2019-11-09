$(document).ready(function() {
    
    console.log("Browserchecker")

    var browser = "";

    // If the browser type if Mozilla Firefox
    if ($.browser.mozilla && $.browser.version >= "1.8" ){ 
    // Do nothing - supports jQuery
    browser = "FireFox"
    }
    // If the browser type is Opera
    if( $.browser.opera)
    {
    // Do nothing - supports jQuery
    browser = "Opera"
    }
    // If the web browser type is Safari
    if( $.browser.safari )
    {
    // Do nothing - supports jQuery
    browser = "Safari"

    }
    // If the web browser type is Chrome
    if( $.browser.chrome)
    {
    // Do nothing - supports jQuery
    browser = "Chrome"
    
    }
    // If the web browser type is Internet Explorer
    if ($.browser.msie && $.browser.version <= 9 )
    {
    // Outdated - does not/may not support jQuery
    browser = "Internet Explorer 9 or below"


        // redirects to a website used in Project 01 the jQuery way
        // Not working?
        $(location).attr('href', 'http://google.com');

    }
    //If the web browser type is Internet Explorer 9 and above
    if ($.browser.msie && $.browser.version > 9)
    {
        browser = "Internet Explorer 9 or above"

        // Not working?
        $(location).attr('href', 'http://google.com');
    // Outdated - does not or may not support jQuery
    }
    alert("You're most likely using " + browser + "!");
});
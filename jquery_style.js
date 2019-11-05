/*
Template

single jquery css
$("p").css("background-color", "yellow");

multiple jquery css
$("p").css({"background-color": "yellow", "font-size": "200%"});

*/

// onLoad
function jquery_style()
{

                                            // header css

    $("#header").css({
        "color": "black",                   // color
        "top": "0",                         // top
        "margin-left": "-25px",             // margin-left
        "margin-right": "-25px",            // margin-right
        "margin-top": "-25px",              // margin-top
        "position": "sticky",               // position     
        "text-align": "center",             // text-align
        "border": "solid 2px orangered",    // border
        "border-bottom-color": "black",     // border-bottom-color
        "background-color": "orangered",    // background-color
        "z-index": "100"                    // z-index

    });

    $(".faculty").css({
        "color": "red",
        "border": "solid 2px black",
        "position": "relative",
        "float": "left",
        "padding": "2.5%",
        "margin-left": "1%",
        "margin-bottom": "1%",
        "display": "block"
    });

    $("#people").css({
        "display": "block"
    });

    $("#content").css({
        "float": "right",
        "bottom": "0px"
    });

    $("#about").css({
        "float": "left",
        "display": "block",
        "bottom": "0px"
    });

    $("img").css({
        "height": "100px",
        "float": "none",
        "margin-left": "25%"
    });


    $("caption").css({
        "margin-top": ".75em",
    });

  



    // iFRAME map stuff
    /*
    $("#map-div").css({
        "width": "75%",
        "height": "750px",
        "overflow": "hidden",
        "position": "relative"

    });

    $("#map-iframe").css({
        "top": "75%",
        "left": "750px",
        "width": "hidden",
        "position": "relative",
        "-moz-transform": "scale(0.75)",
        "-moz-transform-origin": "0 0"


    });
    */

}
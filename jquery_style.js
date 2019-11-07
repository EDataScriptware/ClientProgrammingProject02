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
        "color": "red",                 // color
        "border": "solid 2px black",    // border
        "position": "relative",         // position
        "float": "left",                // float
        "padding": "2.5%",              // padding
        "margin-left": "1%",            // margin-left
        "margin-bottom": "1%",          // margin-bottom
        "display": "block"              // display
    });

    $("#people").css({
        "display": "block"              // display
    });

    $("#content").css({
        "float": "right",               // float
        "bottom": "0px"                 // bottom
    });

    $("#about").css({
        "float": "left",                // float
        "display": "block",             // display
        "bottom": "0px"                 // bottom
    });

    $("img").css({
        "height": "100px",              // height
        "float": "none",                // float
        "margin-left": "25%"            // margin-left
    });


    $("caption").css({
        "margin-top": ".75em",          // margin-top
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
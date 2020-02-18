/*--------------------------------[Custom JS File]-------------------------------------------

    Project     : iShow One Page Portfolio
    Version     : 1.0
    Author      : AvilmaStudio
    Primary Use : Portfolio

-------------------------------------------------------------------------------------------*/

/*global $, jQuery, console, alert*/
$(function () {
    "use strict";
    /* cashing selectors & data in variables */
    var wind = $(window),
        htmlBody = $("html, body"),
        loader = $(".loader"),
        navbar = $(".navbar"),
        nav_section = $(".navbar-default .navbar-nav > li > a"),
        scroll_btn = $(".scroll-top"),
        go_to = $("#go-to"),
        portfolio = $("#portfolio"),
        form = $("#send_mail"),
        form_name = $("#send_mail .name"),
        form_mail = $("#send_mail .mail"),
        form_msg = $("#send_mail .message"),
        border_color = "borderColor",
        red_color = "#F00",
        grey_color = "#ccc";

    /*------[start page loader]------*/
    wind.on("load", function () {
        loader.fadeOut(700);
        htmlBody.css("overflow", "auto");
    });
    /*------[end page loader]------*/


    /*------[start scroll top button]------*/
    /* check window scroll to show or hide scroll top button and style navbar */
    wind.on("scroll", function () {
        if (wind.scrollTop() >= 300) {
            scroll_btn.fadeIn(700);
        } else {
            scroll_btn.fadeOut(700);
        }

        if (wind.scrollTop() > 150) {
            navbar.removeClass("navbar-transparent");
        } else {
            navbar.addClass("navbar-transparent");
        }
    });
    /* scroll top button on click go to top */
    scroll_btn.on("click", function () {
        htmlBody.animate({
            scrollTop: 0
        }, 700);
    });
    /*------[end scroll top button]------*/


    /*------[start scroll to section]------*/

    /* start scrolling function */
    function scrolling(section_to_scroll_to) {
        var extraStep = 50;
        if (section_to_scroll_to === "body") {
            extraStep = 0;
        }
        htmlBody.animate({
            scrollTop: ($(section_to_scroll_to).offset().top) + extraStep
        }, 700);
    }
    /* end scrolling function */

    /* scroll to section from navbar */
    nav_section.on("click", function (e) {
        e.preventDefault();
        var section_name = $(this).attr("href");
        scrolling(section_name);
    });

    /* my works button */
    go_to.on("click", function () {
        scrolling(portfolio);
    });
    /*------[end scroll to section]------*/
  

    /*------[start form style control function ------*/
    function form_style_control(field, event) {
        // prevent event default action
        event.preventDefault();

        // set field border color to red
        field.css(border_color, red_color);

        // set back field border color to grey after 2 seconds
        setTimeout(function () {
            field.css(border_color, grey_color);
        }, 2000);
    }
    /*------[end form style control function ------*/


    /*------[start ajax send mail]------*/
    form.on("submit", function (event) {

        // check if name input field is empty
        if (!form_name.val()) {
            form_style_control(form_name, event);
        }

        // check if mail input field is empty
        if (!form_mail.val()) {
            form_style_control(form_mail, event);
        }

        // check if message text area is empty
        if (!form_msg.val()) {
            form_style_control(form_msg, event);
        }
    });
    /*------[end ajax send mail]------*/
});
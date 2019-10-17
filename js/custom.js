/*global $ */

$(function () {
    'use strict';

    $(".info-list li").click(function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $(".info-content div").hide();
        $('.' + $(this).data('class')).fadeIn();
    });
});




/* window.console.log($(this).data('class')); */

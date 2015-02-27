$(document).ready(function() {

    $("#wide-carousel").owlCarousel({
        items: 1,
        autoPlay: true,
        navigation : false,
        rewindNav : true,
        scrollPerPage : false,
        //Pagination
        pagination : false,
        paginationNumbers: false
    });
    $(".wide_next_button").click(function() {
        $("#wide-carousel").trigger("owl.next");
    });
    $(".wide_prev_button").click(function() {
        $("#wide-carousel").trigger("owl.prev");
    });

    $("#owl-example").owlCarousel({
        items: 6,
        autoPlay: true,
        navigation : false,
        rewindNav : true,
        scrollPerPage : false,
        //Pagination
        pagination : false,
        paginationNumbers: false
    });
    $(".next_button").click(function() {
        $("#owl-example").trigger("owl.next");
    });
    $(".prev_button").click(function() {
        $("#owl-example").trigger("owl.prev");
    });
});
$(document).ready(function() {
    $('.arrow').click(function(event) {
        $(this).toggleClass('boom').next().slideToggle(300);
        /*$(this).parent().closest('.items_main').toggleClass('boom').next().slideToggle(300)*/;
    });

    $('.buy, .autor, .info, .how').click(function(event) {
        $(this).toggleClass('boom').next();
    });

    $('.buy').click(function(event) {
        $('.godown_block').toggleClass('boom').next();
    });
});

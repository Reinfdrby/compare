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



$(document).ready(function() {
    $('.left_btn').click(function(my) {
        document.querySelector('.info1_1').innerHTML =
        `<p  class='info1_red'>Все пропало <br> на нас движется <b>метеоритный дождь</b>  </p>`
        var g32 = document.innerHTML = `<p>Живите теперь с этим</p>`;
        document.querySelector('.info1_1').after(g32);
    });
});

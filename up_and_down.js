/* ========== Меняем класс элементов по клику ============= */
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


/* ========== Вставляем новый код внутрь первого оранжевого вблока ============= */
$(document).ready(function() {
    $('.left_btn').click(function(my) {
        document.querySelector('.info1_1').innerHTML =
        `<p  class='info1_red'>Все пропало <br> на нас движется <b>метеоритный дождь</b>  </p>`;
        document.getElementById('toIns').insertAdjacentHTML(
            'beforeend',
            `<div class="info1 id='new_text" style='margin: 10px 0px 0px 0px'>
                <p class='info1_1'> А также обратите внимание, ожидается сильный снегопад </p>                
            </div>`);
        });
});

/* ========== Копируем код одного из элементов и вставляем его после другого ============= */
$(document).ready(function() {
    $('#btn1').click(function(my2) {
        const gro = document.body.querySelector('.left_btn__go').cloneNode(true);
        const dro = document.getElementById('toIns')
        dro.append(gro);
        const f1 = document.querySelector('.left_btn')
        console.log(f1)
    });
});

/* ========== Удаялем один из элементов ============= */
$(document).ready(function() {
    $('#btn2').click(function(my3) {
        document.querySelector('.info2').remove();
    });
});

/* ========== Играем с изменение классов CSS ============= */
$(document).ready(function() {
    $('#btn3').click(function(my4) {
        document.body.querySelector('.orange-info').classList.toggle('example__1');
    });
    $('#btn3').click(function(my4) {
       document.body.querySelector('.orange-info').nextElementSibling.classList.toggle('example__1');
    });
});

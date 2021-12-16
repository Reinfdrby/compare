
/* ===========================  Атобус ========================*/
$(document).ready(function() {
    $('.bus-s').click(function(event) {
        const elem = document.querySelectorAll('.ticket_and_options__options.yes, ticket_and_options__options.no');
        console.log(elem);
        for (a of elem) {
            a.classList.toggle("yes");
            a.classList.toggle("no");
        };
        const boomq = document.querySelector('.boom');
        $(boomq).removeClass('boom').next();
        $(this).addClass('boom').next();
    });
});

/* ===========================  Поезд ========================*/
$(document).ready(function() {
    $('.train').click(function(event) {
        const elem = document.querySelector('.ticket_and_options__options');
        console.log(elem);
        elem.classList.toggle("yes");
        elem.classList.toggle("no");
        const boomq = document.querySelector('.boom');
        $(boomq).removeClass('boom').next();
        $(this).addClass('boom').next();
    });
});

/* ===========================  Подписка ========================*/
$(document).ready(function() {
    $('.subs').click(function(event) {
        const elem = document.querySelectorAll('.ticket_and_options__options.yes, ticket_and_options__options.no');
        console.log(elem);
        for (a of elem) {
            a.classList.toggle("yes");
            a.classList.toggle("no");
        };
        const boomq = document.querySelector('.boom');
        $(boomq).removeClass('boom').next();
        $(this).addClass('boom').next();
    });
});

/* ===========================  Смена картинки Бизнес ========================*/
       
$(document).ready(function() {
    $('.image1').click(function(event) {
        const elem = document.querySelectorAll('.boom_image1, .reboom_image1');
        for (a of elem) {
            a.classList.toggle("boom_image1");
            a.classList.toggle("reboom_image1");
        };
        const text = document.querySelectorAll('.business, .rebusiness');
        for (a of text) {
            a.classList.toggle("business");
            a.classList.toggle("rebusiness");
        };
    });
});


/* ===========================  Смена картинки Альфа ========================*/
$(document).ready(function() {
    $('.image2').click(function(event) {
        const elem = document.querySelector('.image2');
            elem.classList.toggle("boom_image2");
            elem.classList.toggle("a-image");
        const disc = document.querySelector('.discount-a');
            disc.classList.toggle("no_d");
        const text = document.querySelectorAll('.sale, .resale');
        for (a of text) {
            a.classList.toggle("sale");
            a.classList.toggle("resale");
        };
    });
});

/* ===========================  Смена картинки Туда-обратно ========================*/
$(document).ready(function() {
    $('.image3').click(function(event) {
        const elem = document.querySelectorAll('.boom_image3, .reboom_image3');
        for (a of elem) {
            a.classList.toggle("boom_image3");
            a.classList.toggle("reboom_image3");
        };
        const text = document.querySelectorAll('.image3-text, .image3-retext');
        for (a of text) {
            a.classList.toggle("image3-text");
            a.classList.toggle("image3-retext");
        };
        document.querySelector('.disc-op').classList.remove('no_d');
        const bb = document.querySelector('.disc-op').firstElementChild;
        bb.innerHTML = `<span></span>`;
    });
});

/* ===========================  Смена картинки Заранее ========================*/
$(document).ready(function() {
    $('.image4').click(function(event) {
        const elem = document.querySelectorAll('.boom_image4, .reboom_image4');
        for (a of elem) {
            a.classList.toggle("boom_image4");
            a.classList.toggle("reboom_image4");
        };
        const text = document.querySelectorAll('.image4-text, .image4-retext');
        for (a of text) {
            a.classList.toggle("image4-text");
            a.classList.toggle("image4-retext");
        };
        document.querySelector('.disc-op').classList.remove('no_d');
        const bb = document.querySelector('.disc-op').firstElementChild;
        bb.innerHTML = `<span></span>`;
    });
});

/* ===========================  Смена картинки Вечером ========================*/
$(document).ready(function() {
    $('.image5').click(function(event) {
        const elem = document.querySelectorAll('.boom_image5, .reboom_image5');
        for (a of elem) {
            a.classList.toggle("boom_image5");
            a.classList.toggle("reboom_image5");
        };
        const text = document.querySelectorAll('.image5-text, .image5-retext');
        for (a of text) {
            a.classList.toggle("image5-text");
            a.classList.toggle("image5-retext");
        };
        document.querySelector('.disc-op').classList.remove('no_d');
        const bb = document.querySelector('.disc-op').firstElementChild;
        bb.innerHTML = `<span></span>`;
    });
});



/* ===========================  Константы для выбора ========================
vis1 - поезд
vis2 - пассажиры

vis3 - автобус
vis4 - подписка
vis5 - бизнес
vis6 - альфа
*/

const vis1 = document.querySelector('.ticket_and_options__ticket_1_vis'); 
const vis2 = document.querySelector('.ticket_and_options__ticket_2_novis');
const vis3 = document.querySelector('.ticket_and_options__ticket_3_novis');
const vis4 = document.querySelector('.ticket_and_options__ticket_4_novis');
const vis5 = document.querySelector('.ticket_and_options__ticket_5_novis');
const vis6 = document.querySelector('.ticket_and_options__ticket_6_novis');

/* ===========================  Открытие блока выбора пассажиров ========================*/
$(document).ready(function() {
    $('.promo__choice-block').click(function(event) {
        vis1.classList.toggle('ticket_and_options__ticket_1_novis');
        vis1.classList.toggle('ticket_and_options__ticket_1_vis');
        vis2.classList.toggle('ticket_and_options__ticket_2_novis');
        vis2.classList.toggle('ticket_and_options__ticket_2_vis');
        vis3.classList.add('ticket_and_options__ticket_3_novis');
        vis3.classList.remove('ticket_and_options__ticket_3_vis');
        vis4.classList.add('ticket_and_options__ticket_4_novis');
        vis4.classList.remove('ticket_and_options__ticket_4_vis');
        vis5.classList.add('ticket_and_options__ticket_5_novis');
        vis5.classList.remove('ticket_and_options__ticket_5_vis');
        vis6.classList.add('ticket_and_options__ticket_6_novis');
        vis6.classList.remove('ticket_and_options__ticket_6_vis');
    });
});

/* ===========================  Завершение выбора пассажиров ========================*/
$(document).ready(function() {
    $('.ticket_and_options__ticket_2_novis').click(function(event) {
        alert('!!!   Здесь пользователь выбирает количество пассажиров - взрослых и детей. Система высчитывает стоимость билета и скидку   !!!')
        vis1.classList.remove('ticket_and_options__ticket_1_novis');
        vis1.classList.add('ticket_and_options__ticket_1_vis');
        vis2.classList.add('ticket_and_options__ticket_2_novis');
        vis2.classList.remove('ticket_and_options__ticket_2_vis');
        vis3.classList.add('ticket_and_options__ticket_3_novis');
        vis3.classList.remove('ticket_and_options__ticket_3_vis');
        vis4.classList.add('ticket_and_options__ticket_4_novis');
        vis4.classList.remove('ticket_and_options__ticket_4_vis');
        vis5.classList.add('ticket_and_options__ticket_5_novis');
        vis5.classList.remove('ticket_and_options__ticket_5_vis');
        vis6.classList.add('ticket_and_options__ticket_6_novis');
        vis6.classList.remove('ticket_and_options__ticket_6_vis');
    });
});

/* ===========================  Билет на автобус ========================*/
$(document).ready(function() {
    $('.bus-s').click(function(event) {
        vis1.classList.add('ticket_and_options__ticket_1_novis');
        vis1.classList.remove('ticket_and_options__ticket_1_vis');
        vis2.classList.add('ticket_and_options__ticket_2_novis');
        vis2.classList.remove('ticket_and_options__ticket_2_vis');
        vis3.classList.remove('ticket_and_options__ticket_3_novis');
        vis3.classList.add('ticket_and_options__ticket_3_vis');
        vis4.classList.add('ticket_and_options__ticket_4_novis');
        vis4.classList.remove('ticket_and_options__ticket_4_vis');
        vis5.classList.add('ticket_and_options__ticket_5_novis');
        vis5.classList.remove('ticket_and_options__ticket_5_vis');
        vis6.classList.add('ticket_and_options__ticket_6_novis');
        vis6.classList.remove('ticket_and_options__ticket_6_vis');
    });
});

/* ===========================  Подписка ========================*/
$(document).ready(function() {
    $('.subs').click(function(event) {
        vis1.classList.add('ticket_and_options__ticket_1_novis');
        vis1.classList.remove('ticket_and_options__ticket_1_vis');
        vis2.classList.add('ticket_and_options__ticket_2_novis');
        vis2.classList.remove('ticket_and_options__ticket_2_vis');
        vis3.classList.add('ticket_and_options__ticket_3_novis');
        vis3.classList.remove('ticket_and_options__ticket_3_vis');
        vis4.classList.remove('ticket_and_options__ticket_4_novis');
        vis4.classList.add('ticket_and_options__ticket_4_vis');
        vis5.classList.add('ticket_and_options__ticket_5_novis');
        vis5.classList.remove('ticket_and_options__ticket_5_vis');
        vis6.classList.add('ticket_and_options__ticket_6_novis');
        vis6.classList.remove('ticket_and_options__ticket_6_vis');
    });
});

/* ===========================  Возврат на поезд ========================*/
$(document).ready(function() {
    $('.train').click(function(event) {
        vis1.classList.remove('ticket_and_options__ticket_1_novis');
        vis1.classList.add('ticket_and_options__ticket_1_vis');
        vis2.classList.add('ticket_and_options__ticket_2_novis');
        vis2.classList.remove('ticket_and_options__ticket_2_vis');
        vis3.classList.add('ticket_and_options__ticket_3_novis');
        vis3.classList.remove('ticket_and_options__ticket_3_vis');
        vis4.classList.add('ticket_and_options__ticket_4_novis');
        vis4.classList.remove('ticket_and_options__ticket_4_vis');
        vis5.classList.add('ticket_and_options__ticket_5_novis');
        vis5.classList.remove('ticket_and_options__ticket_5_vis');
        vis6.classList.add('ticket_and_options__ticket_6_novis');
        vis6.classList.remove('ticket_and_options__ticket_6_vis');
    });
});

/* ===========================  Билет Бизнес ========================*/
var busi = 1

$(document).ready(function() {
    $('.bus8').click(function(event) {
        vis2.classList.add('ticket_and_options__ticket_2_novis');
        vis2.classList.remove('ticket_and_options__ticket_2_vis');
        vis3.classList.add('ticket_and_options__ticket_3_novis');
        vis3.classList.remove('ticket_and_options__ticket_3_vis');
        vis4.classList.add('ticket_and_options__ticket_4_novis');
        vis4.classList.remove('ticket_and_options__ticket_4_vis');
        vis6.classList.add('ticket_and_options__ticket_6_novis');
        vis6.classList.remove('ticket_and_options__ticket_6_vis');
        const plushki = document.querySelectorAll ('.plushki1, .plushki2');
        for (a of plushki) {
            a.classList.toggle('plushki-no');
        };
        if (busi === 1) {
            busi = busi+1;
            vis1.classList.add('ticket_and_options__ticket_1_novis');
            vis1.classList.remove('ticket_and_options__ticket_1_vis');
            vis5.classList.remove('ticket_and_options__ticket_5_novis');
            vis5.classList.add('ticket_and_options__ticket_5_vis');
        } else {
            busi = busi-1;
            vis1.classList.remove('ticket_and_options__ticket_1_novis');
            vis1.classList.add('ticket_and_options__ticket_1_vis');
            vis5.classList.add('ticket_and_options__ticket_5_novis');
            vis5.classList.remove('ticket_and_options__ticket_5_vis');
        };
        console.log(busi)
    });
});

/* ===========================  Билет Альфа ========================*/
var alpha = 1

$(document).ready(function() {
    $('.image2').click(function(event) {
        vis2.classList.add('ticket_and_options__ticket_2_novis');
        vis2.classList.remove('ticket_and_options__ticket_2_vis');
        vis3.classList.add('ticket_and_options__ticket_3_novis');
        vis3.classList.remove('ticket_and_options__ticket_3_vis');
        vis4.classList.add('ticket_and_options__ticket_4_novis');
        vis4.classList.remove('ticket_and_options__ticket_4_vis');
        vis5.classList.add('ticket_and_options__ticket_5_novis');
        vis5.classList.remove('ticket_and_options__ticket_5_vis');
        if (alpha === 1) {
            alpha = alpha+1;
            vis1.classList.add('ticket_and_options__ticket_1_novis');
            vis1.classList.remove('ticket_and_options__ticket_1_vis');
            vis6.classList.remove('ticket_and_options__ticket_6_novis');
            vis6.classList.add('ticket_and_options__ticket_6_vis'); 
        } else {
            alpha = alpha-1;
            vis1.classList.remove('ticket_and_options__ticket_1_novis');
            vis1.classList.add('ticket_and_options__ticket_1_vis');
            vis6.classList.add('ticket_and_options__ticket_6_novis');
            vis6.classList.remove('ticket_and_options__ticket_6_vis'); 
        };
    });
});


/* ===========================  РАСЧЕТЫ ========================*/

var standartlPrice = 400;
var globalDiscount = 0;
var finalPrice = 0;
var moneyDiscount = 0;
var number = 1;

if (globalDiscount == 0) {
    finalPrice = standartlPrice;
    } else {
        finalPrice = (standartlPrice * globalDiscount / 100)*number;
};
console.log(finalPrice);

    
function tudaPlus() {globalDiscount +=5;};
function tudaMinus() {globalDiscount -=5;};
function ranoPlus() {globalDiscount +=20;};
function ranoMinus() {globalDiscount -=20;};
function vecherPlus() {globalDiscount +=10;};
function vecherMinus() {globalDiscount -=10;};



const tuda = document.querySelector('.boom_image3');
$(tuda).click(function(event) {
    tudaPlus();
    number = 2;
    finalPrice = (standartlPrice * (100 - globalDiscount) / 100) * number;
    moneyDiscount = standartlPrice - finalPrice;
    const a=document.getElementById("t_new_price").innerHTML = finalPrice;
    const c=document.getElementById("t_discount").innerHTML = globalDiscount;
    const d=document.getElementById("t_discount2").innerHTML = globalDiscount;
    console.log('Скидка ' + globalDiscount + '%');
    console.log('Цена ' + finalPrice + ' рублей');
    console.log('Скидка ' + moneyDiscount + ' рублей');
    });

const netuda = document.querySelector('.reboom_image3');
$(netuda).click(function(event) {
    tudaMinus();
    number = 1;
    finalPrice = (standartlPrice * (100 - globalDiscount) / 100) * number;
    moneyDiscount = standartlPrice - finalPrice;
    const a=document.getElementById("t_new_price").innerHTML = finalPrice;
    const c=document.getElementById("t_discount").innerHTML = globalDiscount;
    const d=document.getElementById("t_discount2").innerHTML = globalDiscount;
    });

const rano = document.querySelector('.boom_image4');
$(rano).click(function(event) {
    ranoPlus();
    finalPrice = (standartlPrice * (100 - globalDiscount) / 100) * number;
    moneyDiscount = standartlPrice - finalPrice;
    const a=document.getElementById("t_new_price").innerHTML = finalPrice;
    const c=document.getElementById("t_discount").innerHTML = globalDiscount;
    const d=document.getElementById("t_discount2").innerHTML = globalDiscount;
    });

const nerano = document.querySelector('.reboom_image4');
$(nerano).click(function(event) {
    ranoMinus();
    finalPrice = (standartlPrice * (100 - globalDiscount) / 100) * number;
    moneyDiscount = standartlPrice - finalPrice;
    const a=document.getElementById("t_new_price").innerHTML = finalPrice;
    const c=document.getElementById("t_discount").innerHTML = globalDiscount;
    const d=document.getElementById("t_discount2").innerHTML = globalDiscount;
    });

const vecher = document.querySelector('.boom_image5');
$(vecher).click(function(event) {
    vecherPlus();
    finalPrice = (standartlPrice * (100 - globalDiscount) / 100) * number;
    moneyDiscount = standartlPrice - finalPrice;
    const a=document.getElementById("t_new_price").innerHTML = finalPrice;
    const c=document.getElementById("t_discount").innerHTML = globalDiscount;
    const d=document.getElementById("t_discount2").innerHTML = globalDiscount;
    });

const nevecher = document.querySelector('.reboom_image5');
$(nevecher).click(function(event) {
    vecherMinus();
    finalPrice = (standartlPrice * (100 - globalDiscount) / 100) * number;
    moneyDiscount = standartlPrice - finalPrice;
    const a=document.getElementById("t_new_price").innerHTML = finalPrice;
    const c=document.getElementById("t_discount").innerHTML = globalDiscount;
    const d=document.getElementById("t_discount2").innerHTML = globalDiscount;
    });


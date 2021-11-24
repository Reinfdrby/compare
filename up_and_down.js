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



/*$('.hidden_block, .frame__buy').toggleClass('boom').next().slideToggle(300);

/*далее идут мои эксперимернты c JavaScript*/
function showMe () {
    console.log('I am a man');
}
showMe ();

function calcSum (choice1, choice2) {
    console.log (`Первое число - ${choice1}`);
    console.log (`Второе число - ${choice2}`);
    console.log (`Сумма этих чисел - ${choice1+choice2}`)

let sum = choice1 + choice2;

    if (choice1+choice2 > 2000) {
        console.log('Я все посчитал - больше');
    }   else {
            console.log ('Знаю, знаю - меньше');
        }
}    
calcSum (888,999);

let showMustgoon = function () {
    console.log ('Приветик, мир!')
}

showMustgoon ();
let goGo = showMustgoon
goGo ();


let global = (a , b) => a + ',' + b + '!';
let mesSage = (a, b) => {
    let go = b + ', you are fool ' + 'but ' + a;
    return go;
};
console.log (global('Hi', 'man'))
console.log (mesSage ('Hi', 'man'))

function time (a, b) {
    console.log (a, ', ', b)
} 
setTimeout (time, 3000, 'Go', 'Dude')

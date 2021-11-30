
/*Определяем элемент, который будем вызывать. В данном случае это .боди
const pro = document.body;

/* POPUP при открытии или обновлении окна 
const proOne = prompt('Привет тебе, посетитель моей копии сайта Аэроэкспресса');
console.log();

/* Получаем последний узел вызываемого элемента
const proTwoA = proTwo.lastChild;
console.log (proTwoA)

/* Получаем список главных узлов ДОМа
const proThree = proTwo.childNodes;
console.log (proThree)

/* Пример перебора коллекции
for (let node of proThree) {
    console.log (node);
}
*/

/* Предыдущий объект 
const g1 = pro.previousSibling;
console.log(g1);

/* Следующий объект 
const g2 = pro.nextSibling;
console.log(g2);

/* Родительский объект 
const g3 = pro.parentNode;
console.log(g3);

/* Следующий объект 
const g4 = pro.children;
console.log(g4);

/* Первый элемент-ребенок 
const g5 = pro.firstElementChild;
console.log(g5)

/* Последний элемент-ребенок 
const g6 = pro.lastElementChild;
console.log(g6);

/* Предыдущий элемент 
const g7 = pro.previousElementSibling;
console.log(g7);

/* Следующий элемент 
const g8 = pro.nextElementSibling;
console.log(g8);

/* Родительский элемент. результат будет включать и исходный элемент - в данном случае - боди 
const g9 = pro.parentElement;
console.log(g9)

/* 
parentElement
=================
    previousElementSibling
    =============== 
        Э Л Е М Е Н Т
        ================
            firstElementChild
            =============
            ...
            =============
            lastElementChild
    ===============
    nextElementSibling
*/

/* Поиск ПО КЛАССУ. Ищем в html. В данном случае усеченнои до боди
const g10 = document.body.querySelectorAll ('.mm-general');
console.log (g10);

/* Поиск ПО ТЕГУ 
const g11 = document.querySelectorAll ('a');
console.log (g11)

/* Поиск ПО ТЕГУ и уточнению по классу КЛАССУ
const g12 = document.body.querySelectorAll ('a.aaa');
console.log (g12)

/* Поиск ПО КЛАССУ ('.aaa'), который является дочерним элементом тега ('.main-menu') 
const g13 = document.body.querySelectorAll ('.main-menu > .aaa');
console.log (g13)

/* Поиск ПО НЕСКОЛЬКИМ КЛАССАМ 
const g14 = document.body.querySelectorAll ('.info, .price, .mcd, .how');
console.log (g14)

/* Поиск ПО КЛАССУ, КОТОРЫЙ НАХОДИТСЯ ВНУТРИ (на уровень выше) ДРУГОГО УКАЗАННОГО КЛАССА 
const g15 = document.body.querySelectorAll ('.main-menu .mcd');
console.log (g15)

/* Поиск ПО ID 
const g16 = document.body.querySelectorAll ('#howtobuy');
console.log (g16)

/* Поиск ПО АТРИБУТУ */
const g17 = document.body.querySelectorAll ('[alt]');
console.log (g17)

/* Поиск ПО АТРИБУТУ И ЕГО ЗНАЧЕНИЮ 
const g18 = document.body.querySelectorAll ('[alt="turn"]');
console.log (g18)

/* Поиск ПО ТЕГУ. Получили коллекцию. Выводим определенный номер (в данном случае 6) из полученной коллекции 
const g19 = document.body.querySelectorAll ('a');
console.log (g19[6])

/* Перебор всех элементов из определенной заранее или прописанной в том же вызове коллекции 
for (const g20 of document.body.querySelectorAll('[alt]')) {
console.log (g20);
}
*/

/* Перебор всех элементов методом forEach
g17.forEach (g21 => {console.log (g21);});


/* Поиск первого похожего элемента
const g22 = document.body.querySelector ('.aaa');
console.log (g22)

/* Поиск элемента по ID (зачем только, если querySelectorAll работает) 
const g23 = document.getElementById ('howtobuy');
console.log (g23)

/* Поиск элемента по тегу. Получаем живую коллекцию 
const g24 = document.body.getElementsByTagName ('a');
console.log (g24)

/* Поиск элемента по имени класса. Получаем живую коллекцию
const g25 = document.body.getElementsByClassName ('aaa');
console.log (g25)

/* Поиск ближайшего предка. Важно: используем querySelector, а не querySelectorAll - с ним не работает 
const g26 = document.querySelector('.foot__content');
const g27 = g26.closest('.footer');
console.log (g27)

/* Выявление наличия или отсутствия какого-либо условия 
const g28 = document.querySelectorAll ('.orange-info');
for (let a of g28) {
    if (a.matches ('[class$="orange-info__1"]')) {
        console.log('Нашел!');
        }
}

/*========== ИЗМЕНЕНИЕ СОДЕРЖИМОГО ===========*/

/* Изменение содержимого блока. ВАЖНО: используем querySelector, а не querySelectorAll - с ним не работает
document.body.querySelector('.info1_1').innerHTML = `Сегодня ничего плохого не произошло`;

/* Изменение блока с изменение и тегов, и начинки. Берет внутреннюю часть блока (без открывающих и закрывающих тегов, например, дивов)
document.body.querySelector('.info1_1').innerHTML = 
        `<p class='info1_red'>Все пропало <br> на нас движется <b>метеоритный дождь</b>
        </p>`*/

/* Изменение блока с изменение и тегов, и начинки. В отличие от innerHtml берет весь блок, с открывающими и закрывающими тегами
console.log(document.querySelector('.info1_1').outerHTML);
console.log(document.querySelector('.info1_1').innerHTML)

document.querySelector('.info1_1').outerHTML = 
    `<p class='info1_red'>Все пропало <br> на нас движется <b>метеоритный дождь</b>
    </p>
    `

/* Изменение только текстового контента блока, не трогаем теги, классы и прочую чепуху
document.querySelector('.info1_1').textContent = `Все еще хуже, на нас движется огромная комета`

/* Изменение какого-либо узла (например, комментария, который не будет использовван на странице - его не увидит пользователь) 
var g30 = document.querySelector('.info1_1').data = `Все еще хуже, на нас движется Годзилла`
console.log (g30)

/* Создаем новый блок (createElement) или текст (createTextNode)
var g31 = document.createElement('div')
g31.innerHTML = 
`<p>Привет вам, люди добрые</p>
`
console.log(g31)

/* МЕТОДЫ ВСТАВКИ созданного элемента в html */

/* 
    before
    =============== 
        Э Л Е М Е Н Т
        ================
            prepand
            =============
            ...
            =============
            append
    ===============
    after


const g31 = document.querySelector ('.info1_1')
var g32 = document.createElement('p').innerHTML = `Живите теперь с этим`;
g31.after(g32)
*/





/*$('.hidden_block, .frame__buy').toggleClass('boom').next().slideToggle(300);

/*далее идут мои эксперименты c JavaScript
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
*/

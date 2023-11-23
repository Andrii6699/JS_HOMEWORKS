// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, 'hello', true, 2, 'привіт', false, 3, 'hola', false, true]
console.log(arr)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    titile: 'BOOK',
    pageCount: 1000,
    genre: 'action'
}
console.log(book)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let bookHungerGames = {
    titile: 'Hunger Games',
    pageCount: 400,
    genre: 'action',
    author:[
        {name: 'Suzanne Collins', age: 61}
    ]
}
console.log(bookHungerGames)

let bookHungerGamesCatchingFire  = {
    titile: 'Hunger Games Catching Fire ',
    pageCount: 500,
    genre: 'action',
    author:[
        {name: 'Suzanne Collins', age: 61}
    ]
}
console.log(bookHungerGamesCatchingFire)

let bookHungerGamesMockingjay  = {
    titile: 'Hunger Games  Mockingjay ',
    pageCount: 600,
    genre: 'action',
    author:[
        {name: 'Suzanne Collins', age: 61}
    ]
}
console.log(bookHungerGamesMockingjay)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name:'Keanu', username:'Keanu123', password:'Keanuqwerty'},
    {name:'Petro', username:'Petro123', password:'Petroqwerty'},
    {name:'Jason', username:'Jason123', password:'Jasonqwerty'},
    {name:'Arnold', username:'Arnold123', password:'Arnoldqwerty'},
    {name:'SpongeBob', username:'SpongeBob123', password:'SpongeBobqwerty'},
    {name:'Terminator', username:'Terminator123', password:'Terminatorqwerty'},
    {name:'CJ', username:'CJ123', password:'CJqwerty'},
    {name:'Tommy', username:'Tommy123', password:'Tommyqwerty'},
    {name:'Trevor', username:'Trevor123', password:'Trevorqwerty'},
    {name:'Franklin', username:'Franklin123', password:'Franklinqwerty'},
]
console.log(users['password'])

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x;
x = 1;
if (x !== 0){
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = 0;
if (x !== 0){
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = -3;
if (x !== 0){
    console.log('Вірно');
} else {
    console.log('Невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 20;

if (time >= 0 && time <= 14) {
    console.log('1 четверть ');
} else if (time >= 15 && time <= 29) {
    console.log('2 четверть ');
} else if (time >= 30 && time <= 44) {
    console.log('3 четверть ');
} else if (time >= 45 && time <= 59) {
    console.log('4 четверть ');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 30;

if (day >= 1 && day <= 10) {
    console.log('1 половина ');
} else if (day >= 11 && day <= 20) {
    console.log('2 половина ');
} else if (day >= 21 && day <= 31) {
    console.log('3 половина ');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.




//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

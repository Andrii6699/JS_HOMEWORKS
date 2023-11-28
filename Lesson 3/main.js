// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 1; i < 10; i++) {
    document.write('Okten ' + i + '</div>');
}
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 1; i < 10; i++) {
    document.write('<div class="Okten">Okten' + i + ' School</div>');
}
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write('<h1>Okten' + i + ' School</h1>');
    i++;
}
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
for (let i = 1; i < 20; i++) {
    document.write('<div class="Jordan">Michael ' + i + ' Jordan</div>');
}
// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>');
for (let i = 0; i < listOfItems.length; i++) {
    document.write('<li>' + listOfItems[i] + '</li>');
}
document.write('</ul>');
// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ---------------------------------------------------------------------------------------------------------
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        console.log(users[i]);
    }
}
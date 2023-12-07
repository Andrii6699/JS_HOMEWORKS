// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = 'hello world'
let str1 = 'lorem ipsum'
let str2 = 'javascript is cool'
console.log(str.length)
console.log(str1.length)
console.log(str2.length)
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strn = 'hello world'
let strn1 = 'lorem ipsum'
let strn2 = 'javascript is cool'
console.log(strn.toUpperCase());
console.log(strn1.toUpperCase());
console.log(strn2.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strng = 'HELLO WORLD'
let strng1 = 'LOREM IPSUM'
let strng2 = 'JAVASCRIPT IS COOL'
console.log(strng.toLowerCase());
console.log(strng1.toLowerCase());
console.log(strng2.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirty = ' dirty string   '
let clean = dirty.trim();
console.log(clean)
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let nmbrs = [10,8,-7,55,987,-1011,0,1050,0];
let stringnmbrs = nmbrs.map(String);
console.log(stringnmbrs);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [3,11,21];
function sortNums(nums, direction = 'ascending') {
    if (direction === 'ascending') {
        nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        nums.sort((a, b) => b - a);
    }
    return nums
}
console.log(sortNums(nums,'ascending' ));
console.log(sortNums(nums,'descending' ));
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesfilter = coursesAndDurationArray.filter(course => course.monthDuration  > 5)
console.log(coursesfilter);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================



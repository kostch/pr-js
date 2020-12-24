// 1 Переменные
// camelCase составные слова

//const lastName = 'dpp' // string
//let age = 22 // number
//const isProgrammer = true // boolean

//const _value = 'private'
//const $ = 'someValue'
//const withNum5 = '5'
//console.log (age)

// 2 Мутирование

//console.log('Имя человека: '+ lastName +', а возраст человека: '+age)
//const firstName = prompt('Введите имя')
//alert(firstName + '  ' + lastName)

// 3 Операторы

//let currentYear = 2020
//const birthYear = 1997
//const age1 = currentYear - birthYear

//const a = 10
//const b = 5

//let c = 32
//c = c + a
//c += a
//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//console.log(currentYear++)
//console.log(currentYear)
//console.log(++currentYear)
//console.log(c)

// 4 Типы данных

/*const isProgrammer = true
const name = 'kostya'
const age = 22
let x

console.log(typeof isProgrammer)
console.log(typeof name)
console.log(typeof age)
console.log(typeof x)
console.log(null)*/


// 5 Приоритет операций

/*const fullAge = 22
const birthDate = 1997
const currentYear = 2020

const isFullAge = (currentYear - birthDate) >= fullAge
console.log(isFullAge)*/

// 6 Условные операторы
/*
const courseStatus = 'pending'

if (courseStatus === 'ready') {
    console.log('Курс уже готов и его можно проходить')
} else if (courseStatus === 'pending'){
    console.log('Курс пока находится в процессе разработки')
}
*/
//const isReady = true
/*if (isReady){
    console.log('Все готово!')
} else {
    console.log('Все не готово :(')
}*/
// Тернарное выражение
//isReady ? console.log('Все готово!') : console.log('Все не готово :(')

/*const num1 = 42 //number
const num2 = '42' //string
console.log(num1 === num2)*/ //сравнение через === по всем показателям

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 Функции
/*
function calculateYear(year) {
    return 2020 - year
}
//const myAge = calculateYear( 1997)
//console.log(calculateYear(1997))

function logInfoAbout(name, year){
    const age = calculateYear(year)

    if (age > 0 ){
        console.log('Человек по имени ' + name + 'сейчас имеет возраст ' + age )
    } else {
        console.log('Человек по имени ' + name + 'сейчас имеет возраст ' + age + '. Он из будущего?!')
    }
}

logInfoAbout('Константин ', '1997')
logInfoAbout('Ребятенок ', '2022')
*/

// 8 Массивы
/*const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
console.log(cars.length)
console.log(cars [1])
console.log(cars [0])
console.log(cars [2])

cars[0] = 'Porsche'
console.log(cars [0])
cars[3] = 'Мазда'
console.log(cars)
cars[5] = 'ЗАЗ'
console.log(cars)
cars[cars.length] = 'ВАЗ'
console.log(cars)*/

// 9 Циклы
/*
const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']
/!*
for (let i = 0; i < cars.length; i++ ) {
    const car = cars [i]
    console.log(car)
}*!/
for (let car of cars) {
    console.log(car)
}
*/

// 11 Объекты
const person = {
    firstName: 'Константин',
    lastName: 'Червенко',
    year: 1997,
    languages: ['Ru', 'En'],
    hasGf: true,
    greet: function (){
        console.log('greet wabada')
    }
}
console.log(person.firstName)
console.log(person['lastName'])
const key = 'languages'
console.log(person[key])
person.isProgrammer = true
console.log(person)
person.greet()
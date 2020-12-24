// 1 Массивы

const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const people = [
    {name: 'Константин', budget: 4200},
    {name: 'Ксения', budget: 6500},
    {name: 'Бося', budget: 2100}

]
const fib = [1, 1, 2, 3, 5, 8, 13]
//console.log(cars)

// Function
/*function addItemEnd(){
}*/

// Method

/*cars.push('Рено')
console.log(cars)
cars.unshift('Волга')
console.log(cars)
const firstItem = cars.shift()
const lastCar = cars.pop()
console.log(lastCar)
console.log(firstItem)
console.log(cars)

console.log(cars.reverse())
console.log(cars)*/

let findedPerson
for(const person of people) {
    console.log(person)
    if(person.budget = 6500) {
        findedPerson = person
    }
}
console.log(findedPerson)
/*const index = people.findIndex(function (person){
    return person.budget === 6500
})
const person = people.find(function (person){
    return person.budget === 6500
})*/
/*console.log(people[index])*/
//console.log(person)


// Задача 1
/*const text = 'Привет, мы изучаем JavaScript'
const reverseText = text.split('').reverse().join('')
console.log(reverseText)*/
/*cars[index] = 'Porsche'
console.log(cars)*/
//const index = cars.indexOf('БМВ')





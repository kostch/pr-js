/*const name = ' Константин'
const age = 22*/

//const output = 'Привет, меня зовут ' + name + ', мой возраст: ' + age + ' года.'
/*function getAge() {
    return age
}
const output = `Привет, меня зовут ${name}, мой возраст: ${getAge < 30 ? 'A' : 'B'} года.`*/

/*const output =`
    <div>This is div</div>
<p>this is o </p>
`
console.log(output)*/

/*const name = 'Константин'

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(2))
console.log(name.indexOf('онс'))
console.log(name.indexOf('!'))
console.log(name.toLowerCase().startsWith('конст'))
console.log(name.startsWith('Конст'))
console.log(name.endsWith('тин'))
console.log(name.repeat(3))
const string = '            password   '
console.log(string.trim())
console.log(string.trimLeft())
console.log(string.trimRight())*/


function logPerson(s, name, age){
    if (age < 0) {
        age = 'Еще не родился'
    }
    //console.log(s, name, age)
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Константин'
const personName2 = 'Максим'
const personAge = 22
const personAge2 = -22
const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!` //обратные кавычки
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!` //обратные кавычки

console.log(output)
console.log(output2)
// function declaration
// function greet() {
//     console.log('halo guys')
// }

// // function expression
// const speak = function () {
//     console.log('good day!')
// }

// greet() // --> calling the function or invoking the functiion

// speak()

// arguments & parameters
// const speak = function (name = 'luigi', time = 'night') {
//     console.log(`good ${time} ${name}!`)
// }
// speak()

// returning values
// const calcArea = function (radius) {
//     let area = 3.14 * radius ** 2
//     return area
// atau bisa juga gini:
// return 3.14 *radius**2
// }
// const area = calcArea(5)
// console.log(area)


// arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius ** 2
// }

// practice arrow functions 
// const greet = function () {
//     return 'hello, world'
// }

// const greet = () => {
//     return 'hello, world'
// }
// const result = greet()
// console.log(result)

// const bill = function (products, tax) {
//     let total = 0
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total
// }

// const bill = (products, tax) => {
//     let total = 0
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total
// }

// console.log(bill([10, 15, 30], 0.2))


// const name = 'shaun'

// functions is a block of code basically
// const greet = () => {
//     return 'hello'
// }
// let resultOne = greet()
// console.log(resultOne)


// methods
// let resultTwo = name.toUpperCase()
// console.log(resultTwo)

// callback & foreach
// callback function adalah fungsi biasa yang kita lempar kepada fungsi lain atau method lain sebagai argumen
// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50
//     callbackFunc(value)
// }

// myFunc(function (value) {
//     // do something
//     console.log(value)
// })

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`)
// }

// people.forEach(logPerson)
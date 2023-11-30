// var numbers = [102, 31, 16, 50, 316]
// var calSort = (a, b) => {
//     return b - a
// }
// console.log(numbers.sort(calSort))

// EXERCISE #1
// var names = ['Alex', 'Elena', 'Chaplin', 'Bernard', 'Dany']
// // Result: ['Elena', 'Dany', 'Chaplin', 'Bernard', 'Alex']

// var namessort = names.sort((a, b) => {
//     return a > b ? -1 : 1
// })

// console.log(namessort)
// var namessort = names.sort().reverse() --> cara ini lebih efektif menurut stack.overflow daripada cara diatas

// EXERCISE #2
// var numbers = [1, 3, 4, 7, 8]
// val itu adalah isi dari arraynya

// for (var i = 0; i < nums.length; i++) {

// }
// console.log(newarr)

// for (var i = 0; i < numbers.length; i++) {
//     console.log(`loop nums ${numbers[i]}`)
// }

// const Exercise2 = (val, index) => {
//     if (val % 2 == 0) {
//         return 'even'
//     } else {
//         return 'odd'
//     }
// }

// var calmap = (val, index) => {
//     if (val % 2 == 0) {
//         return 'genap'
//     } else {
//         return 'ganjil'
//     }
// }

// console.log(Exercise2([1, 3, 4, 5]))
// console.log(Exercise2([22, 17, 19, 20, 14]))
// console.log(Exercise2([1, 3, 5]))
// console.log(Exercise2([2, 4, 6]))

// function untuk angka fibonacci
// function fibo(angka) {

//     if (angka < 3) {
//         return 1
//     }

//     return fibo(angka - 1) + fibo(angka - 2)

// }

// console.log(fibo(6))
// console.log(fibo(7))
// console.log(fibo(8))


// var nums = [1, 2, 3, 4, 5]
// for (var i = 0; i < nums.length; i++) {
//     console.log(`Loop ${nums[i]}`)
// }

// var nums = [
//     [1, 11, 12],
//     [2, 21, 22],
//     [3, 31, 32]
// ]
// nums.forEach(function (row) {
//     row.forEach(function (col) {
//         console.log(col)
//     })

// })

// push & pop

var things = ['pen', 'shoes', 'book']
things[2] = 'paper'
console.log(things)
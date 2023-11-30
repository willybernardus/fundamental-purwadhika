// function bintangAngka(tinggi) {
//     var result = ''
//     var angka = 1
//     for (let i = 0; i < tinggi; i++) {
//         for (let j = 0; j <= i; j++) {
//             result += angka + ' '
//             angka += 2
//         }
//         result += '\n'
//     }
//     return result
// }

// function bintangHuruf(tinggi) {
//     var result = ''
//     var huruf = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
//     var angka = 1
//     for (let i = 0; i < tinggi; i++) {
//         for (let j = 0; j <= i; j++) {
//             result += huruf[angka] + ' '
//             angka += 2
//         }
//         result += '\n'
//     }
//     return result
// }

// console.log(bintangHuruf(4))

// const obj = Object.assign({
//     name: "JavaScript"
// }, {
//     name: "ECMAScript"
// }, {
//     name: "LiveScript"
// });

// const result = obj.name;

// console.log(result)

// const array = [1, 2, 3, 5];
// const result = array.indexOf(3);
// console.log(result)

// const o = {
//     name: "Brendan"
// };
// const s = JSON.parse(JSON.stringify(o))
// const result = s === o;


// const result = "2009" - "String";

// const re = /java/i;
// const str = "JavaScript";
// const result = re.test(str);

// const value = 20.0;
// const result = Number.isInteger(value);

// const func = function (a, b) {
//     return arguments.length;
// }
// const result = func(4, 3, 2, 1);
// let value = 95;
// const result = value++;

// const str = "JavaScript";
// const result = str.length;

// const func = function () {
//     return 2009;
// }
// const result = 262 && func();
// const value = new Set([1, 2, 3]);
// value.add(9);
// const result = "1/2/3".split("/")

// const f = (r, v) => r + v;
// const result = [1, 2, 3].reduce(f, 4);
// const array = [1, 2, 3];
// array.unshift();
// const result = array;

// const isTrue = false;
// const result = isTrue ? 2009 : 262;
// console.log(result)

// function greet() {
//     return "hello world!"
// }

// console.log(greet())

// function uefaEuro2016(teams, scores) {
//     result = ''
//     if (scores[0] > scores[1]) {
//         result = `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
//     } else if (scores[0] < scores[1]) {
//         result = `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
//     } else {
//         result = `At match ${teams[0]} - ${teams[1]}, teams played draw.`
//     }
//     return result
// }

// console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]))

// function descendingOrder(n) {
//     var newAngka = n.split('')
//     console.log(newAngka)
//     var newArr = []
//     for (let i = 0; i < newAngka.length; i++) {
//         if (newAngka[i] > newAngka[i] + 1) {
//             newArr.push
//         }
//     }
//     return newArr
// }
// descendingOrder(1234) 


// * spread operator : untuk mengganti data pada array atau object dengan syntax ...
// syaratnya adalah properti di dalam object harus sama. Urutan data tidak masalah kalau acak
// let INITIAL_USER = { id: 0, username: '', email: '', islogin: false };

// let payload = { email: 'willy@gmail.com', username: 'willy', id: 4 };

// let state = INITIAL_USER;

// console.log(state);

// let state2 = { ...state, ...payload, islogin: true };

// console.log('line 133', state2);

// let angka = [1, 46, 75, 12, 89, 54, 101];
// let ganjil = [];

// Tulis kode kalian di bawah ini



// for (let i of angka) {
//     if (i % 2 == 1) {
//         ganjil.push(i)
//     }
// }

// let ganjil = (10 % 6) ** 3

// console.log(ganjil)

let i = 2;
for (let j = 0; i <= 11; j++) {
    i * j;
    console.log(++i);
}
//
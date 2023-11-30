// function untuk angka fibonacci

// function fibo(angka) {

//     if (angka < 3) {
//         return 1
//     }

//     return fibo(angka - 1) + fibo(angka - 2)

// }


// function fibo(angka) {
//     let a = 1
//     let b = 0
//     let temp;

//     while (angka > 0) {
//         temp = a
//         a = a + b
//         b = temp
//         angka--
//     }
//     return b;
// }
// console.log(fibo(1))
// console.log(fibo(2))
// console.log(fibo(3))
// console.log(fibo(4))
// console.log(fibo(5))
// console.log(fibo(6))
// console.log(fibo(7))


function looping(n) {
    var a = 0, b = 1, f = 1; for (var i = 2; i <= n; i++) { f = a + b; a = b; b = f; } return f;
}

console.log(looping(6))
// soal 1 : palindrome (pakai regex)
var kata = 'Abc, +12def'.toLowerCase()
var kataaa = kata.replace(/[^a-z]/g, '')

const Palindrome = (inp = '') => {
    // 1. kecilkan hurufnya dulu
    // 2. hilangkan yang bukan huruf
    // 3. di split menjadi array lalu di reverse
    // 4. terus join lagi
    // 5. bandingkan dengan kata yang telah diproses di
    let kata = inp.toLowerCase()
    kata = kata.replace(/[^a-z]/g, '')
    console.log(kata)
    let katainput = kata.split('').reverse()
    katainput = katainput.join('')

    if (kata == katainput) {
        return true
    } else {
        return false
    }
}
console.log(Palindrome('Malam'))
console.log(Palindrome("Madam, I'm Adam"))
console.log(Palindrome('race car'))


// soal 2 : reverse words
console.log('hai'.length)
console.log('hai'[0])
// 'Hai aku Joan'
// '
const reverseWords = (kata = '') => {
    // cara tanpa reverse
    // 1. split berdasarkan spasi
    // 2. terus dibalik dengan melooping stringnya
    // kata = kata.split('')
    // let output = ''
    // for (let i = 0; i < kata.length; i++) {
    //     let katabalik = ''
    //     for (let j = kata[i]; j < kata[i].length; j++) {
    //         katabalik += kata[i][j]
    //     }
    //     output += katabalik
    //     if (i < kata.length - 1) {
    //         output += ' '
    //     }
    //     return output
    // }

    // cara dengan reverse
    kata = kata.split(' ')
    for (let i = 0; i < kata.length; i++) {
        kata[i] = kata[i.s[]]
    }

}
console.log(reverseWords('Hai aku Joan Mir'))

// soal 3 : caesar cipher
// var kata = 'abcdefghijklmnopqrstuvwxyz'.split(' ')

// soal 4 : mean, median, mode
// Mean is the average value of a dataset.
// Median is the middle number of a dataset.
// Mode is the most frequent number of a dataset.

// var angka = [1, 2, 3, 2, 5, 2, 7, 2]
// var total = 0
// var rata2 = () => {
//     for (var i = 0; i < angka.length; i++) {
//         total += angka[i]
//     }
//     var jumlahangka = angka.length

//     var rata2 = total / jumlahangka
//     return rata2
// }
// console.log(rata2([1, 2, 3, 2, 5, 2, 7, 2]))

// const median = (arr) => {
//     const tengah = Math.floor(arr.length / 2),
//         angka = [1, 2, 3, 2, 5, 2, 7, 2].sort((a, b) => a - b);
//     return arr.length % 2 !== 0 ? angka[tengah] : (angka[tengah - 1] + angka[tengah]) / 2;
// };

// console.log(median([1, 2, 3, 2, 5, 2, 7, 2]))
// for (var i = 0; i < angka.length; i++) {
//     total += angka[i]
// }
// var jumlahangka = angka.length

// var rata2 = total / jumlahangka




// var numbers = [1, 3, 4, 5]
// const Exercise2 = (arr) => {
//     let Newarr = arr.map((val) => {
//         if (val % 2 == 0) {
//             return 'even'
//         } else {
//             return "odd"
//         }
//     })
//     return Newarr// return sebauh array lagi
// }

// console.log(Exercise2([1, 3, 4, 5]))
// console.log(Exercise2([22, 17, 19, 20, 14]))
function numberDigit(val = 0) {

    val = val.toString() // basically string itu adalah array of character
    // console.log(val)
    var newArr = []

    for (let i = 0; i < val.length; i++) {
        var result = ''
        for (let j = 0; j <= i; j++) {
            result += val[j]
        }
        newArr.push(result)
    }
    return newArr
}


// console.log(numberDigit(420)) // ['4', '42', '420']
// console.log(numberDigit(2017)) // ['2', '20', '201', '2017']




// buat function repeat, namanya ulang
function ulang(val, index) {
    var result = ''
    for (let i = 0; i < index; i++) {
        result += val
    }
    return result
}

// console.log(ulang('ha', 4)) // hahahaha
// console.log(ulang('baka', 4)) // bakabakabakabaka


// buat proteksi password itu termasuk tugas frontend
// console.log(checkPass('asasasa')) // weak
// console.log(checkPass('PASS')) // weak
// console.log(checkPass('1234')) // weak
// console.log(checkPass('PaSS')) // medium
// console.log(checkPass('PASS1')) // medium
// console.log(checkPass('pass1')) // medium
// console.log(checkPass('Pass1')) // strong



function katapanjang(str = '') {
    var arr = str.split('')
    var result = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (j == 0) {
                result += arr[i].toUpperCase()
            } else {
                result += arr[i]
            }
        }
        if (i < arr.length - 1) {
            result += '-'
        }
    }
    return result
}
// console.log(katapanjang('abcd')) // A-Bb-Ccc-Dddd
// console.log(katapanjang('aku')) // A-Kk-Uuu
// console.log(katapanjang('qwer')) // Q-Ww-Eee-Rrrrr


// var array = [1, 2, 3, 4, 5]
// var kalimat = 'Hai apa kabar?'

// var reverseArray = array.join()  // untuk menggabung data pada array
// var res = kalimat.split(' ') // split untuk memisahkan string menjadi array baru. kalau pakai ('') maka splitnya jadinya per karakter, kalau pakai (' ') jadinya split per kata
// console.log(res)


// KISI2 UJIAN: INTINYA DOM SEMUA. ada 3 soal doang. Soal nomor 3 paling besar poin nya
// PAKAI DOM
// SEGITIGA
// FIBONACHI
// MARKET
// LIST TO DO
// GANJIL GENAP



// #LATIHAN GANJIL GENAP (tergantung date hari ini saat ngoding)

function cekPlat(plat) {
    let newArr = plat.split(' ')
    let newPlat = newArr[1]

    var hari = new Date().getDate()
    var ganjilGenap = hari % 2

    if (newPlat % 2 == ganjilGenap) {
        return 'boleh lewat'
    } else {
        return 'gak boleh lewat'
    }

}

// console.log(cekPlat('B 1234 ERD')) // boleh lewat
// console.log(cekPlat('BE 1239 AD')) // gak boleh lewat
// console.log(cekPlat('Bk 2344 CD')) // boleh lewat


// #ALGO FIBO YANG TEPAT kalau dimulai dari 0
function fibo(num) {
    var a = 1
    var b = 0
    var temp;

    while (num > 0) {
        temp = a
        a = a + b
        b = temp
        num--
    }
    return b;
}

// console.log(fibo(0))
// console.log(fibo(1))
// console.log(fibo(2))
// console.log(fibo(3))
// console.log(fibo(4))
// console.log(fibo(5))
// console.log(fibo(6))
// console.log(fibo(7))
// console.log(fibo(8))
// console.log(fibo(9))
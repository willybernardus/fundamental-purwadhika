// PR
// buatlah function untuk mengecek plat kendaraan plat 
// yang diperbolehkan sesuai tangal hari ini ganjil atau genap
// contoh tanggal hari ini 4 genap
// ini pakai modulus

function cekPlat(plat) {
    let arrPlat = plat.split(' ') // string menjadi array
    // nomer plat ada di arrayke-1
    let noPlat = arrPlat[1]
    let tanggal = new Date().getDate() // untuk mendapatkan tanggal
    let genaptauGanjil = tanggal % 2 // kalo 0 artinga genap kalau 1 artinya ganjil

    if (noPlat % 2 == genaptauGanjil) {
        return 'boleh lewat'
    } else {
        return 'nggak boleh lewat'
    }

}

// console.log(cekPlat('B 1234 ERD')) // boleh lewat
// console.log(cekPlat('BE 1239 AD')) // nggak boleh lewat
// console.log(cekPlat('Bk 2344 CD')) // boleh lewat


// cari angka terbesar dan terkecil dari satu buah array 

// function angkaMaxMin(arr, minOrmax) {
//     // sorting dulu
//     // dari kecil kebesar boleh atau sebaliknya juga boleh
//     let arrSort = arr.sort((a, b) => a - b)
//     // untuk jika dari kecil ke besar maka min adalah array pertama
//     // max array ujung atau .length-1
//     if (minOrmax == 'min') {
//         return arrSort
//     } else {
//         return arrSort[arrSort.length - 1]
//     }

// }
// console.log(angkaMaxMin([1, 200, 5, 6, 10], 'min')) //1
// console.log(angkaMaxMin([1, 200, 5, 6, 10], 'max')) //200


// solve kasus koin ada koin 25sen,10sen,5sen,1sen 
// jika harus bayar 61 sen 
// berapa jumlah koin 
// jawabannya 4 koin 
// buat functionnya
// ini dibandingkan parameter a dengan setiap nilia pada array

// let koinSen = [25, 10, 5, 1]

// function koin(a) {

//     let output = 0
//     var jumlahkoin
//     do {
//         if (Math.floor(a / 25) > 0) {
//             jumlahkoin = Math.floor(a / 25)
//             output += jumlahkoin
//             a = a % 25
//         } else if (Math.floor(a / 10) > 0) {
//             jumlahkoin = Math.floor(a / 10)
//             output += jumlahkoin
//             a = a % 10
//         } else if (Math.floor(a / 5) > 0) {
//             jumlahkoin = Math.floor(a / 5)
//             output += jumlahkoin
//             a = a % 5
//         } else if (Math.floor(a / 1) > 0) {
//             jumlahkoin = Math.floor(a / 1)
//             output += jumlahkoin
//             a = a % 1
//         }
//     } while (bayar > 0);


// var jumlahKoin, hasil1, hasil2

// if (jumlahKoin - koinSen[0] >= koinSen[0]) {
//     hasil1 = jumlahKoin - koinSen[0]
// } else if (jumlahkoin - koinSen[1] >= koinSen[1]) {
//     hasil2 = hasil1 - koinsen[1]
// } else if (jumlahkoin - koinSen[2] >= koinSen[2]) {
//     hasil2 = jumlahKoin - koinsen[2]
// } else {
//     jumlahKoin - koinSen[4]
// }
// }

// console.log(koin(61))//4
// console.log(koin(62))//5
// console.log(koin(63))//6
// console.log(koin(15))//2

// var angka=1258923 // nggak boleh jadiin string, nggak boleh dijaiin array
// var ujung = angka % 10

let alghi = () => {
    return {
        andi: [, {
            andreas: () => {
                return 'berhasil'
            }
        }]
    }
}
// jika ketiga soal sudah diselesaikan boleh mengerjakan ini
// console.log(alghi()["andi"][1].andreas()) // berhasil

let pangkat = 8 ** 2
console.log(pangkat)
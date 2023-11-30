// var kata = 'karate'
// function myFunction() {
//     // console.log('line 3')
//     kata = 'cobra kai'

    //     kata = param // anggap aja param adalah variable yg menampung argument
// }
// // parameter adalah variabel yg dipakai didalam function yang menampung argumen
// // f(x)=5x+1
// // f(1)=5.1+1
// var fungsiKu = function () {
    // console.log('line 7')
    // kata = 'miyagi'
    // return 'apapun'
    // for (var i = 0; i < 5; i++) {
    //     return i // kalau ketemu return dia langsung keluar
// }

// fungsiKu() // fuction expression kan disimpan di dalam variable, jadi kalau function dijalankan diatas variable pasti error
// myFunction() // function declaration saat dijalankan diatasnya functionnya dia gak bakal error. jadi diatas atau bawah tidak masalah
// console.log(kata)
// function baru dibawah ini (ES6) atau synthax terbaru: (jadi terserah mau pake yg mana)
// var fungsi = () => {
//     return
// }



//     // kalau di dalam function ketemu return dia sudah pasti keluar
//     // return 'apapun'
//     // return tidak akan membaca coding yg ada dibawahnya
// }
// var penjumlahan2Tambah2 = () => {
//     return 2 + 2
// }
// var penjumlahan = (angka1, angka2 = 5) => { // lebih dari 1 parameter pakai koma
//     return angka1 + angka2
// }
// var pengurangan = (angka1, angka2 = 5) => { // lebih dari 1 parameter pakai koma
//     if (angka1 < angka2) {
//         return angka2 - angka1
//     }
//     return angka1 - angka2
// }
// var perkalian = (angka1, angka2 = 5) => { // lebih dari 1 parameter pakai koma
//     return angka1 * angka2
// }


// var showResult = (fn, angka1, angka2) => { // fn disebut callbakck function
//     var hasil = fn(angka1, angka2)
//     console.log(hasil)
// }

// showResult(penjumlahan, 2, 5)
// showResult((angka1, angka2) => {
//     return angka1 / angka2
// }, 10, 2)
// callback adalah sebuah function yang dipanggil oleh function karena dipanggil kembali
// dengan callback menjadi lebih flexible

// function tanpa parameter biasanya hasilnya statis
// fungsiKu()
// var param ='chaplin'
// kata=param
// proses diatas ini dipersingkat dengan function
// myFunction('chaplin') // argument


// void gak return apa-apa
// console.log(kata, 'line 17')
// myFunction('daniel')
// var hasil = penjumlahan(5, 1)
// console.log(hasil)
// console.log juga termasuk function
// ciri-ciri function warnanya kuning dan pake kurung

// return harus tipe data, tidak boleh undifined
// kl function ada retrun biasanya bisa disimpan ke dalam variable

// Parameter vs Argument
// argumen adalah value yang kita masukan
// parameter ya seperti variable yg dipakai didalam function

// default parameter, parameter standard 

// recursive adalah function yang memanggil dirinya sendiri


// function countDown(counter) {

//     console.log(counter)
//     counter--

//     if (counter >= 0) {
//         countDown(counter)
//     }
// }

// countDown(5)
// recursive harus ada kondisi untuk menghentikannya

// var nums = [2, 3, 6, 7, 8]

// for (var i = 0; i < nums.length; i++) {
//     console.log(`loop nums ${nums[i]}`)
// }

// nums.forEach((val, index) => { // val adalah nums ke i
//     console.log(`loop nums ${val}`)
//     console.log(`loop index ke ${index}`)
//     console.log('batas')
// })
// untuk gunain forEach perlu sebuah call back
// forEach indexnya selalu mulai dari 0
// forEach adalah looping sepanjang array nya
// forEach tidak return apa2
// forEach tidak bisa --
// pokoknya melooping sebuah array pakai forEach. HARUS sebuah array

// map untuk changing form of value
// map biasanya menghasilkan sebuah array baru lagi
// makanya map harus disimpan dalam variable

// function yang gak ada return pasti hasilnya undefined
// map akan menghasilkan array baru

// var calmap = (val, index) => {
//     if (val % 2 == 0) {
//         return 'genap'
//     } else {
//         return 'ganjil'
//     }
// }
// var numskali2 = nums.map(calmap)
// ATAS dan BAWAH sama aja, cuma beda tulisan aja
// var numskali2 = nums.map((val) => {
//     if (val % 2 == 0) {
//         return 'genap'
//     } else {
//         return 'ganjil'
//     }
// })
// console.log(nums)
// console.log(numskali2)



// mapduplicate itu ngebuat function buatan sendiri yang mereplika si map,
// alias dibalik layarnya dari map
// var mapDuplicate = (arr, cb) => {

//     var newarr = []
//     var newvalue
//     for (var i = 0; i < arr.length; i++) {

//         newvalue = cb(arr[i])

//         newarr.push(newvalue)
//     }

//     return newarr

// }


// var numskali2 = mapDuplicate(nums, (val) => {
//     if (val % 2 == 0) {
//         return 'genap'
//     } else {
//         return 'ganjil'
//     }
// })

// callback filter
// filter returnnya WAJIB sebuah boolean

// var nums = [1, 3, 4, 7, 8]
// // val itu adalah isi dari arraynya
// var newarr = []
// for (var i = 0; i < nums.length; i++) {

//     if (nums[i] > 5) {
//         newarr.push(nums[i])
//     }
// }
// var calfil = (val) => {
//     return val > 5
// }
// console.log(newarr)

// var filterduplicate = (arr, cb){
//     var newarr = []
//     for (var i = 0; i < nums.length; i++) {
//         if (cb(arr[i])) {
//             newarr.push(arr[i])
//         }
//     }
//     return newarr
// }
// var nums = [0, 3, 4, 7, 8] // kalau ada 0 pasti tidak masuk, karena dia false
// var calfil = (val) => {
//     return val
// }

// var numsfil = nums.filter(calfil)

// console.log(nums)
// console.log(numsfil)



// sort
// var nums = [200, 1, 30, 4, 7]

// var numsort = nums.sort((a, b) => {
//     return a - b
// }) // ascend

// var numsort = nums.sort((a, b) => {
//     return b - a
// }) // descend

// console.log(numsort)

// variable scope ada 3 jenis

// var
// var kata = 'karate'
// var kata = 'dd'

// let kata = 'karate'
// let kata = 'dd'

// const kata = 'karate'
// kata = 'dd'

// console.log(kata)

// cons let var gunanya untuk membuat variable
// const, variable yg ada di dalamnya tidak bisa diubah
// const biasa untuk nama variable yg kita tidak mau ubah atau nama function

// let bisa diubah, tapi let tidak bisa ditulis ulang let nya di depan
// basically var dan let sama saja


// const fungsinya = () => {
//     let nama = 'dino'
// }

// for (let nama = 1; nama < 5; i++) {
//     // artinya var di dalam for itu kebaca
// }
// if (true) {
//     var nama = 'WB'
// }
// let dan const, kalau kita masukan for hanya bisa dibaca di for, kalau masukin ke if ya hanya bisa dibaca di if
// console.log(nama)

// promise untuk back-end
// cara penulisan object

// object literal
let User = {
    username: 'willy',
    password: 'saitama',
    email: 'willy@gmail.com',
    isVerrified: false,
    isSeller: false,
    height: 170,
    activeDay: ['senin', 'sabtu'],
    tampilkannama() {
        console.log('passwordnya adalah' + ' ' + this.password) // kalau mau pake this jgn pakai arrow
    }// this itu gunanya untuk mengakses data yang ada dalam object itu sendiri
}

// let newObj = new Object()
// newObj.name = 'kamen rider'
// User.tampilkannama()
// cara mengakses property dalam object bisa menggunakan .namaproperty
// console.table(User.isVerrified)
// console.log()

// let inputUser = 'username' // harus string dan persis dengan label

// cara kedua untuk mengakses object:
//ini benar
// console.log(User[inputUser]) // kalau pakai kurung siku bisa diganti dengan sebuah variabel, asal berisi string
// ini salah
// console.log(User.inputUser)


// #CLASS itu template atau cetakan untuk membuat object

// class MahlukHidup { // ini inheritance
//     constructor(_name, _age,) {
//         this.name = _name,
//             this.age = _age
//     }
//     breath = () => {
//         console.log('bernafas')
//     }
// }
// class Binatang extends MahlukHidup { // membuat class pasti ada nama classnya
//     constructor(_nama, _jenis, _age) { // constrctur gunanya untuk biar ada properti
//         super(_nama, _age, _jenis)
//         this.jenis = _jenis


//     }
//     kalimat = () => {
//         return 'hewan ' + this.nama + ' adalah ' + this.jenis
//     }
//     akal = () => {
//         console.log('tidak punya')
//     }
// }

// let Ayam = new Bintang('ayam', 'unggas')
// let Sapi = new Bintang('sapi', 'mamalia')

// let Animals = [ // array of object dipakai untuk menyimpan kumpulan binatang pada kasus ini
//     new Binatang('ayam', 'unggas'),
//     new Binatang('sapi', 'mamalia')
// ]



// class Manusia extends MahlukHidup {
//     constructor(_name, _age, _work) {
//         super(_nama, _age, _work)
//         this.work = _work
//     }
//     work = () => {
//         console.log('bekerja')
//     }
//     breath = () => {
//         console.log('bernafas')
//     }
// }

// Animals[0].breath()
// Animals[1].breath()

// OOP

let bulanke = new Date().getMonth()

let bulan = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember']
let message = `saat ini bulan ke ${bulanke + 1} : ${bulan[bulanke]}`
console.log(message)

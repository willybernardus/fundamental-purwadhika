// setInterval(cb, x) --> paling sering digunakan untuk fitur menunggu pembayaran user kayak Tokopedia
// setInterval akan menjalankan function atau cb didalamnya SETIAP x second

// setTimeout(cb, x) --> jarang digunakan
// set timeout akan menjalankan function atau cb didalamnya SETELAH x second

var nums = [1, 2, 3, 4]
var ganjil = [3, 5, 7]

// seperate operator untuk menggabung array, anggap aja seperti membuka array
// titik 3 (...) untuk array,
var gabungan = [...nums, ...ganjil, 9]

console.log(gabungan)


// cara mengubah object
var obj = {
    username: 'willy',
    password: 'brando'
}
console.log(obj)
obj.username = 'wb' // ATAU obj['username']='wb
// cara tambah property
obj['stand'] = 'platipus'
// cara lain
obj.stand = 'platinum'
// cara lain menamah property pada objek dengan spread operator 3 titik (...)  , 3 titik harus didepan
obj = { ...obj, username: 'dio', stand: 'star platinum' }
console.log(obj)


// destructuring object
// var username = obj.username
// var password = obj.password

// cara simpel nya adalah
// var { username, password } = obj
// console.log(username)
// console.log(password)

var user = {}

var username = 'gon'
var password = 'batu'
console.log(user)
user.username = username
user.password = password
// 
user = { ...user, username: username, password: password }
// sama dengan ini:
user = { ...user, username, password }
console.log(user)
// array adalah tipe data yang digunakan untuk mendeskripsikan kumpulan elemen (nilai atau variabel),
// yang tiap-tiap elemennya memiliki index


// var things= ['buku','pulen','laptop']

// console.log(things)

// cara mengakses array
// console.log(things[0])
// console.log(things[1])
// console.log(things[2])

// things[0]='books' // mengubah isi array
// things[5]='kalender'
// console.log(things,'setelah diubah')
// console.log(things.length) 

// array dihitung dari index 0
// .length untuk mengetahui jumlah data yang disimpan pada sebuah array
// .legth dihitung dari 0
// .length tidak akan menghapus isi array, hanya akan "melihat data" 

// strings itu sebenarnya adalah array of character
// console.log(things[0])
// console.log(things[things.length-1], 'mendapatkan data dari index terakhir')
// .length-1 adalah rumus untuk mendapatkan index nomor terakhir

// push akan menambah isi array dipaling akhir
// pop akan menghapus elemen paling terakhir pada array

// things.push('jacket')
// things.push('apple' , 'banana')
// console.log(things)
// var barangDihapus=things.pop()
// console.log(barangDihapus)
// things.pop()
// console.log(things)

// unshift dan shift
// unshift menambahkan data di dalam array dari depan
// things.unshift('apple')
// console.log(things)

// shift menghapus elemen dari depan
// things.shift()
// console.log(things)

// splice bisa untuk menghapus dan menambahkan data di tengah-tengah
// splice ya untuk mengedit sesuatu aja
// menghapus dengan splice, kotak dihilangkan juga.

var things = ['buku', 'pulpen', 'laptop', 'jam', 'tv']

// things.splice(1, 2, 'pena')
// console.log(things)

// delete hanya menghapus elemen tapi kotaknya tetap ada dalam array. Mendingan pakai splice

// delete things[1]


// .slice untuk memotong atau mengiris range element dalam array
// potongan dari slice harus disimpan dalam variabel
// var copy = things.slice(2, 4)
// console.log(copy)

// .includes adalah tipe data boolean (true & false) digunakan untuk mengecek suatu data dalam array
// includes harus ditampung dialam variabel
// var b=things.includes('laptop')
// console.log(b)

// index of digunakan untuk mengecek suatu data didalam array dan mengembalikan index jika data ditemukan
// jika tidak makan akan mengembalikan -1
// inget array tidak pernah minus (-), kalau sampai minus artinya dia tidak pernah ada
// biasanya di database kita menyimpan itu huruf kecil semua
// var b=things.indexOf('pulpen')
// console.log(b)

// .sort() digunakan untuk sorting by default dari kecil ke besar berdasarkan nilai karakter pada string (cs50/ascii)
// var perbandingan= 'buku' > 'pulpen' // kalau ada comparison operator hanya akan menghasilkan true dan false
// things.sort()
// console.log(things)

// .reverse() digunakan untuk membalik array
// things.reverse()
// console.log(things)

// .join hanya bisa digunakan oleh array of strings. inget harus array of strings, bukan array of number
// gunanya untuk menggabungkan string yang ada didalam array
// .join harus disimpan dalam variable

// var thingsJoin=things.join()
// console.log(thingsJoin)

//concatinating sebuah function untuk menggabungkan 2 array
// .concat
// var things=['mask', 'pen']
// var fruits= ['apple', 'banana']
// var animals=['rabbit', 'cat']

// tergantung dari xxxx.concat, si xxxx yang akan duluan muncul
// var two= things.concat(fruits) // yang duluan pasti thingsnya bukan fruitnya
// var tiga= things.concat(fruits,animals)
// console.log(things)
// console.log(two)
// console.log(tiga)


// array 2 dimensi seperti kotak di dalam kotak
// ada kotak yang bisa simpan lebih dari 1 data
// untuk data yang punya ciri khas yang sama, akan digabungkan dalam 1 kotak
// synthax array terus ada di dalam array lagi

// var things=[
//     ['red pen', 'blue pen'],
//     ['digital clock', 'analog clock'],
//     ['footsal shoes', 'badminton shoes']
// ]
// var numbers=[
//     [1,4,[8]],
//     [6,8,9,[10,4,[15]]],
//     [3]
// ]
// console.log(numbers[1][3][2][0])
// biasanya array dipadu-padankan dengan looping, tidak pernah lepas dengan looping

// var kategoriFilm=['scifi', 'romance', 'crime', 'thriller', 'adventure', 'animation']
// kategoriFilm.reverse()
// var message='list kategori film:'
// console.log(message)

// for(var i=kategoriFilm.length-1;i>=0;i--){
//     // console.log(kategoriFilm.reverse[i])
//     console.log(kategoriFilm[i])
// }

// exercise 1   
// var names=['Alex', 'Elena', 'Daniel', 'Chaplin', 'Bob']
// console.log(names.sort().reverse())

// A1A2..A16
// K1...K16
// []
// [
// [A1....A16]
// [K1...K16]
// ]

// for dalam for
// menggunakan push
// setiap looping buat satu array [A1,A2]
// array tersebut dipush lagi ke dalam array bangku

// var baris='ABCDEFGHIJK'.split('')
// .split mengubah string menejadi array jadi kebalikan dari join
// console.log(baris)
// var rows=12
// var columns=16
// var arrkosong
// var bangku=[]
// for(var i=0;i<baris.length;i++){
//     arrkosong=[]
//     for(var j=1; j<columns;j++){
//         arrkosong.push(baris[i]+j)
//     }
//     bangku.push(arrkosong)
// }

// console.log(bangku)

// tiap looping buat array baru
// arrkosong maksudnya bikin array baru karena 2 dimensi

// split dan join hanya untuk string
// var numbers = 123
// 321 (dibalik dulu tapi tetep number)
// 149 (coba bikin gitu tapi ttp number)
// numbers = numbers.toString().split('')
// numbers.reverse()
// var kebalik = numbers.join('')
// var inijadinumber = parseInt(kebalik)
// console.log(inijadinumber)


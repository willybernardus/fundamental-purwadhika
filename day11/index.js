var arrProduct = [
    { id: 1579581081342, category: 'Baju', name: "Hoodie", price: 300000, stock: 7 },
    { id: 1579581081577, category: 'Buah', name: "Apple", price: 10000, stock: 8 },
    { id: 1579581081130, category: 'Elektronik', name: "Headphone", price: 4300000, stock: 8 },
    { id: 1579581080923, category: 'Fast Food', name: "Noodle", price: 3500, stock: 9 }
];

var arrCategory = ["All", "Baju", "Buah", "Elektronik", "Fast Food"];

var angka = [5, 4, 3, 2, 1]

// var output = [] // -- > siapkan array baru kalau pakai syntax pertama
// ambil angka yang lebih dari 3
// ini pake for
// for (let i = 0; i < angka.length; i++) {

//     if (angka[i] > 3) {
//         output.push(angka[i])
//     }
// }
// ini pakai filter. function dibawah ini harus return sebuah boolean, karena dibalik layarnya itu ada if
// jadi harus kita bayangkan kalau pakai filter sama aja dengan for loop
// var newArr = (val) => { 
//     return val > 3
// } // return nya itu harus true atau false
// output = angka.filter(newArr)




// CARA FOR LOOP UNTUK FILTER NAMA
// for (let i = 0; i < arrProduct.length; i++) { // --> syntax 1
//     if (arrProduct[i].name.toLowerCase().includes('a')) {
//         output.push(arrProduct[i])
//     }
// }

// CARA FILTER NAMA
// SYNTAX 1 --> perlu menyiapkan variable untuk array baru
// var newArr = (val) => { 
//     return val.name.toLowerCase().includes('noo')
// }
// output = arrProduct.filter(newArr)

// SYNTAX 2 --> (tidak perlu menulis variable array baru secara terpisah)
// var output = arrProduct.filter((val) => {
//     return val.name.toLowerCase().includes('n')
// })



// CARA FILTER KATEGORI
// SYNTAX 1 --> perlu menyiapkan variable untuk array baru
// var newArr = (val) => {
//     return val.category == arrCategory[1]
// }
// output = arrProduct.filter(newArr)

// SYNTAX 2 --> (tidak perlu menulis variable array baru secara terpisah)
// var output = arrProduct.filter((val) => {
//     return val.category == arrCategory[3]
// })


console.log(output)
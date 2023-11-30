// Init value
var arrProduct = [
    { id: 1579581081342, category: 'Baju', name: "Hoodie", price: 300000, stock: 7 },
    { id: 1579581081577, category: 'Buah', name: "Apple", price: 10000, stock: 8 },
    { id: 1579581081130, category: 'Elektronik', name: "Headphone", price: 4300000, stock: 8 },
    { id: 1579581080923, category: 'Fast Food', name: "Noodle", price: 3500, stock: 9 }
];

// init value
var arrCategory = ["All", "Baju", "Buah", "Elektronik", "Fast Food"];

class Cart {
    constructor(_id, _category, _name, _price) {
        this.id = _id
        this.category = _category
        this.name = _name
        this.price = _price
    }

}

var cart = [] // karena kita mau push produk ke cart makanya bikin index kosong

var indexEdit = -1

function Reset() {
    document.getElementById('nama').value = '0'
    document.getElementById('min').value = ''
    document.getElementById('max').value = ''
    document.getElementById('kategori').value = ''
}

// PRINT DATA DENGAN MAP --> biasain print data dengan map
function PrintData(arr) {
    // map itu selalu return sebuah array didalamnya ada callback. CB nya harus return sesuatu
    // CallBack adalah function yang sebagai parameter
    // array nya itu kita ubahlah kebentuk yang lain, jadi itu mapping atau di map
    // map itu for loop jg dalemnya
    let result = arr.map((val, index) => {
        if (indexEdit == index) {
            return ` <tr>
                        <td>${val.id}</td>
                        <td>${val.category}</td>
                        <td><input type="text" placeholder="nama" value=${val.name} id="inputEditNama${index}"></td>
                        <td><input type="number" placeholder="harga" value=${val.price} id="inputEditHarga${index}"></td>
                        <td><input type="number" placeholder="stock" value=${val.stock} id="inputEditStock${index}"></td>
                        <td>
                            <input type="button" value="Add" onclick="AddToCart(${val.id})">
                        </td>
                        <td>
                            <input type="button" value="Save" onclick="onEditSaveClick(${val.id})">
                            <input type="button" value="Cancel" onclick="onCancelEditClick()">
                        </td>
                    </tr>`
        }
        return ` <tr>
                    <td>${val.id}</td>
                    <td>${val.category}</td>
                    <td>${val.name}</td>
                    <td>${val.price}</td>
                    <td>${val.stock}</td>
                    <td>
                        <input type="button" value="Add" onclick="AddToCart(${val.id})">
                    </td>
                    <td>
                        <input type="button" value="Delete" onclick="onDeleteClick(${val.id})">
                        <input type="button" value="Edit" onclick="onEditClick(${index})">
                    </td>
                </tr>`
    })
    // console.log(result.join(' '))
    document.getElementById('renderData').innerHTML = result.join('')
}

function printCategory() {
    let result = arrCategory.map((val, index) => { // perlu index karena di category yg HTML itu ada indexnya alias nilai pada value
        return `<option value=${index}>${val}</option>`
    })
    document.getElementById('kategori').innerHTML = result.join('')
}
function printInputCategory() {
    let result = arrCategory.map((val, index) => { // perlu index karena di category yg HTML itu ada indexnya alias nilai pada value
        if (index == 0) {
            return `<option value="" hidden selected>Pilih Kategori</option>`
        } else {
            return `<option value=${index}>${val}</option>`

        }
    })
    document.getElementById('inputkategori').innerHTML = result.join('')
}

function printCart() {
    let result = cart.map((val) => {
        return `<tr>
                 <td>${val.id}</td>
                <td>${val.category}</td>
                <td>${val.ca}</td>
                <td>${val.category}</td>
        
    </tr>`
    })

}


// init
PrintData(arrProduct)
printCategory()
printInputCategory()
printCart()

function AddToCart() {
    var indexCart = cart.findIndex((val) => val.id == i)
    if (indexCart < 0) {
        var index = arrProduct.findIndex((val) => val.id == id)
        var objProd = arrProduct[index]
        // var id = objProd.id
        // var name = objProd.name
        // var category = objProd.category
        // var price = objProd.price
        var { id, name, category, price } = objProd
        cart.push(new Cart(id, category, name, price))
    } else {
        car[indexCart].qty += 1
    }
    printCart()
}

function deleteCart(index) {
    cart.splice(index, 1)
    printCart()

}

function onEditClick(index) {
    indexEdit = index
    PrintData(arrProduct)
}

function onEditSaveClick(id) {
    var editNama = document.getElementById('inputEditNama' + indexEdit).value
    var editHarga = document.getElementById('inputEditHarga' + indexEdit).value
    var editStock = document.getElementById('inputEditStock' + indexEdit).value
    const indexEd = arrProduct.findIndex((val) => val.id == id) // untuk mencari index berdasarkan id
    arrProduct[indexEd].name = editNama
    arrProduct[indexEd].price = parseInt(editHarga) // buat memastikan di parseInt, takutnya berubah jadi string
    arrProduct[indexEd].stock = parseInt(editStock)
    indexEdit = -1
    PrintData(arrProduct)
}

function onCancelEditClick() {
    indexEdit = -1
    PrintData(arrProduct)
}

function onDeleteClick(id) {
    // console.log(id)
    // console.log(id)
    // kalo tidak pake findIndex
    // let index
    // for(let i=0;i<arrProduct.length;i++){
    //     if(arrProduct[i].id == id){
    //         index=i
    //         break
    //     }
    // }
    const indexDel = arrProduct.findIndex((val) => val.id == id) // untuk mencari index berdasarkan callback
    // method findIndex biasanya ngelooping di balik layarnya
    arrProduct.splice(indexDel, 1)
    Reset()
    PrintData(arrProduct)
}



function onNamaInput() {
    var nama = document.getElementById('nama').value.toLocaleLowerCase()
    var productFilter = arrProduct.filter((val) => {
        return val.name.toLocaleLowerCase().includes(nama)
    }) // abis dari sini terciptalah array baru
    // let result = productFilter.map((val) => {
    //     return `<tr>
    //                 <td>${val.id}</td>
    //                 <td>${val.category}</td>
    //                 <td>${val.name}</td>
    //                 <td>${val.price}</td>
    //                 <td>${val.stock}</td>
    //              </tr > `
    // })
    // karena function yang diatas sama seperti PrintData() maka diganti aja sama ini:
    PrintData(productFilter)
    document.getElementById('renderData').innerHTML = result.join('')
}

function OnPriceUp() {
    var min = document.getElementById('min').value
    var max = document.getElementById('max').value
    var productFilter = arrProduct.filter((val) => {
        if (max && min) { // max dan minnya ada isi maka yang dipake di filter adalah line dibawah ini
            return val.price >= min && val.price <= max
        } else if (max) { // kalo misalkan max saja yang diisi
            return val.price <= max
        } else if (min) { // kalo misalkan min saja yang diisi
            return val.price >= min
        } else {
            return true // kalo return true artinya semua masuk ke array baru
        }
    })
    // console.log(min)
    // console.log(max)
    // lakukan filter berdasarkan input
    PrintData(productFilter)
}

function onKategoriChange() { // khusus select liat angka pada value, bukan tulisan yg di HTML
    var kategori = document.getElementById('kategori').value
    var productFilter = arrProduct.filter((val) => {
        if (kategori == 0) {
            return true
        } else {
            return val.category == arrCategory[kategori]
        }
    })
    PrintData(productFilter)

    // console.log(kategori)
}

function SubmitData() {
    var inputnama = document.getElementById('inputnama').value
    var inputharga = document.getElementById('inputharga').value
    var inputkategori = document.getElementById('inputkategori').value
    var inputstok = document.getElementById('inputstok').value
    var inputid = new Date().getTime()
    var dataInput = { id: inputid, category: inputkategori, name: inputnama, price: inputharga, stock: inputstok }
    arrProduct.push(dataInput)
    PrintData(arrProduct)

    // document.getElementById('inputnama').value = ''
    // document.getElementById('inputharga').value = ''
    // document.getElementById('inputkategori').value = ''
    // document.getElementById('inputstok').value = ''
}


function payment() {
    var result = cart.map((val) => {
        return `<p>${val.id} | ${val.category} | ${val.name} | ${val.price}</p>`
    })
    // menghitung subtotal
    var subtotal = 0
    cart.forEach((val) => {
        subtotal += val.price
    })

    var ppn = subtotal * 0.1

    var total = subtotal + ppn
    document.getElementById('payment').innerHTML = result.join('') + `<h3>Subtotal : ${subtotal}</h3><h4>PPN : ${ppn}</h4><h3>Total: ${total}</h3>`

}

















// FUNCTION INI UNTUK FILTER YANG TERPADU ALIAS SEMUANYA SINKRON
// KALAU PAKAI FILTER INI MAKA SEMUA FUNCITON PADA MASING2 DATA INPUT, PRICE DAN KATEGORI DIGANTI SEMUA DENGAN FUNCTION filterTerpadu()
function filterTerpadu() { // --> cara gabungin adalah semua variable input dimasukkan kedalam satu function ini
    var nama = document.getElementById('nama').value.toLocaleLowerCase()
    var min = document.getElementById('min').value
    var max = document.getElementById('max').value
    var kategori = document.getElementById('kategori').value

    var productFilter = arrProduct.filter((val) => {
        var filternama = true // jika nama tidak ada isi
        if (nama) { // jika nama ada isinya
            filternama = val.name.toLocaleLowerCase().includes(nama)
        }
        var filterprice = true // untuk price kenapa pakai else if bukan if if if ? karena kl else if ketika if true, else if tidak dibaca
        // kalau if if if nanti kebaca semua
        if (max && min) { // jika max dan min ada isinya
            filterprice = val.price >= min && val.price <= max
        } else if (max) { // kalo misalkan max saja yang diisi
            filterprice = val.price <= max
        } else if (min) { // kalo misalkan min saja yang diisi
            filterprice = val.price >= min
        }

        var filterkategori = true
        if (kategori != 0) {
            filterkategori = val.category == arrCategory[kategori]
        }

        return filternama && filterprice && filterkategori // returnnya harus seperti ini untuk filter terpadu, dan returnnya harus sebuah boolean
    })

}


// PRINT DATA BIASA
// function PrintData() {
//     let result = ''
//     for (var i = 0; i < arrProduct.length; i++) {
//         result +=
//             `<tr>
//                 <td>${arrProduct[i].id}</td>
//                 <td>${arrProduct[i].category}</td>
//                 <td>${arrProduct[i].name}</td>
//                 <td>${arrProduct[i].price}</td>
//                 <td>${arrProduct[i].stock}</td>
//             </tr>`
//     }

//     document.getElementById('renderData').innerHTML = result

// }
// PrintData()



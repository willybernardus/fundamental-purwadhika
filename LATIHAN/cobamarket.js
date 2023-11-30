// Init value
var arrProduct = [
    { id: 1579581081342, category: 'Baju', name: "Hoodie", price: 300000, stock: 7 },
    { id: 1579581081577, category: 'Buah', name: "Apple", price: 10000, stock: 8 },
    { id: 1579581081130, category: 'Elektronik', name: "Headphone", price: 4300000, stock: 8 },
    { id: 1579581080923, category: 'Fast Food', name: "Burger", price: 3500, stock: 9 }
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

var indexEdit = -1

var cart = []

function printData(arr) {
    let result = arr.map((val, index) => {
        if (indexEdit == index) {
            return `<tr>
                <td>${val.id}</td>
                <td>${val.category}</td>
                <td><input type="text" placeholder="nama" value="${val.name}" id="inputEditNama${index}"></td>
                <td><input type="number" placeholder="harga" value="${val.price}" id="inputEditHarga${index}"></td>
                <td><input type="number" placeholder="stok" value="${val.stock}" id="inputEditStok${index}"></td>
                <td>            
                    <input type="button" value="Save" onclick="onSaveClick(${val.id})">
                    <input type="button" value="Cancel" onclick="onCancelClick()">
                </td>
                </tr>`
        }

        return `<tr>
                <td>${val.id}</td>
                <td>${val.category}</td>
                <td>${val.name}</td>
                <td>Rp ${val.price}</td>
                <td>${val.stock}</td>
                <td><input type="button" value="Add" onclick="AddToCart(${val.id})"></td>
                <td>            
                <input type="button" value="Delete" onclick="onDeleteClick(${val.id})">
                <input type="button" value="Edit" onclick="onEditClick(${index})">
                </td>
            </tr>`
    })

    document.getElementById('renderData').innerHTML = result.join('')
}
printData(arrProduct)

// function onEditClick(index) {
//     indexEdit = index
//     printData(arrProduct)
// }

function onCancelClick() {
    indexEdit = -1
    printData(arrProduct)
}

function onSaveClick(id) {
    var editNama = document.getElementById('inputEditNama' + indexEdit).value
    var editHarga = document.getElementById('inputEditHarga' + indexEdit).value
    var editStok = document.getElementById('inputEditStok' + indexEdit).value
    let indexEd = arrProduct.findIndex((val) => {
        return val.id == id
    })
    arrProduct[indexEd].name = editNama
    arrProduct[indexEd].price = parseInt(editHarga)
    arrProduct[indexEd].stock = parseInt(editStok)
    indexEdit = -1
    printData(arrProduct)
}

function AddToCart(id) {
    let index = arrProduct.findIndex((val) => val.id == id)
    var objProd = arrProduct[index]
    // var id = objProd.id
    // var category = objProd.category
    // var name = objProd.name
    // var price = objProd.price
    var { id, category, name, price } = objProd // cara destructuring
    cart.push(new Cart(id, category, name, price))
    printCart()

}

function printCart() {
    let result = cart.map((val) => {
        return `<tr>
                <td>${val.id}</td>
                <td>${val.category}</td>
                <td>${val.name}</td>
                <td>Rp ${val.price}</td>
                <td>            
                <input type="button" value="Delete" onclick="deleteCart()">
                </td>
    </tr>`
    })
    document.getElementById('renderCart').innerHTML = result.join('')
}
printCart()

function Reset() {
    document.getElementById('nama').value = ''
    document.getElementById('min').value = ''
    document.getElementById('max').value = ''
    document.getElementById('kategori').value = '0'
}

function inputData() {

    let inputnama = document.getElementById('inputNama').value
    let inputkategori = document.getElementById('inputKategori').value
    let inputharga = document.getElementById('inputHarga').value
    let inputstok = document.getElementById('inputStok').value
    let id = new Date().getTime()

    var result = { id: id, category: inputkategori, name: inputnama, price: inputharga, stock: inputstok }
    arrProduct.push(result)
    printData(arrProduct)
}

function onNamaInput() {
    let nama = document.getElementById('nama').value.toLowerCase()
    let productFilter = arrProduct.filter((val) => {
        return val.name.toLowerCase().includes(nama)
    })
    printData(productFilter)
}

function onHargaUp() {
    var min = document.getElementById('min').value
    var max = document.getElementById('max').value
    let harga = arrProduct.filter((val) => {
        if (min && max) {
            return val.price >= min && val.price <= max
        } if (min) {
            return val.price >= min
        } if (max) {
            return val.price <= max
        }
    })
    printData(harga)
}

function onKategoriChange() {
    let kategori = document.getElementById('kategori').value

    let kategoriFilter = arrProduct.filter((val) => {
        if (kategori == 0) {
            return true
        } else {
            return val.category == arrCategory[kategori]
        }
    })
    printData(kategoriFilter)
}

function onEditClick(index) {
    indexEdit = index
    printData(arrProduct)
}

function onDeleteClick(id) {
    let indexdel = arrProduct.findIndex((val) => {
        return val.id == id
    })
    arrProduct.splice(indexdel, 1)
    Reset()
    printData(arrProduct)
}

function printPayment() {
    var result = cart.map((val) => {
        return `<p> ${val.id} | ${val.category} | ${val.name} | ${val.price}</p>`
    })

    var subtotal = 0
    cart.forEach((val) => {
        subtotal += val.price
    })
    var ppn = subtotal * 0.1

    var total = subtotal + ppn

    document.getElementById('payment').innerHTML = result.join('') + `<h3>Subtotal : ${subtotal} </h3>
    <h4>PPN : ${ppn} </h4>
    <h3>Total : ${total} </h3>`

}

function deleteCart(id) {
    let indexdel = cart.findIndex((val) => {
        return val.id == id
    })
    cart.splice(indexdel, 1)
    printCart()
}
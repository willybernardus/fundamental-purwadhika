// Init value
var arrProduct = [
    { id: 1579581081342, category: 'Baju', name: "Hoodie", price: 300000, stock: 7 },
    { id: 1579581081577, category: 'Buah', name: "Apple", price: 10000, stock: 8 },
    { id: 1579581081130, category: 'Elektronik', name: "Headphone", price: 4300000, stock: 8 },
    { id: 1579581080923, category: 'Fast Food', name: "Noodle", price: 3500, stock: 9 },
];

// init value
var arrCategory = ["All", "Baju", "Buah", "Elektronik", "Fast Food"];


function printData(arr) {
    let result = arr.map((val) => {
        return `<tr>
                    <td>${val.id}</td>
                    <td>${val.category}</td>
                    <td>${val.name}</td>
                    <td>${val.price}</td>
                    <td>${val.stock}</td>
                </tr>`

    })
    document.getElementById('renderData').innerHTML = result.join('')
}
printData(arrProduct)

function onNamaInput() {
    var nama = document.getElementById('nama').value
    // console.log(nama)
    var productFilter = arrProduct.filter((val) => {
        return val.name.toLowerCase().includes(nama)
    })
    printData(productFilter)
    document.getElementById('renderData').innerHTML = result.join('')
}


const OnPriceUp = () => {
    var min = document.getElementById('min').value
    var max = document.getElementById('max').value
    console.log(min)
    console.log(max)
    // lakukan filter berdasarkan input
}
const onKategoriChange = () => {
    var kategori = document.getElementById('kategori').value

    console.log(kategori)
}
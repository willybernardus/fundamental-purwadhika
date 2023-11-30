
function bintang(tinggi) {
    var result = ''
    var angka = 1
    for (let i = 0; i < tinggi; i++) {
        for (let j = 0; j <= i; j++) {
            result = angka
        }
        result = '\n'
    }
    return result
}
console.log(bintang(5))

// console.log('kata')
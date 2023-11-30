// 5 bintang horizontal
var bintang = ''
for (var i = 0; i < 5; i++) {
    bintang += '*' + ' '
}
console.log(bintang)

// code yang berbeda untuk menghilangkan spasi di akhir selain break bintang lurus
// 5 bintang vertical
for (var i = 0; i < 5; i++) {
    bintang += '*'
    if (i < 4) {
        bintang += '\n'
    }
}
console.log(bintang)

// code yang berbeda untuk membuat persegi tidak boleh dengan coding bintang+='*****'
// 5 bintang persegi
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        bintang += '*' + ' '
    }
    bintang += '\n'
}
console.log(bintang)


// loop drawing segitiga siku2 kiri ke kanan

for (var i = 0; i < 5; i++) {

    for (var j = 0; j <= i; j++) {

        bintang += ('*' + ' ')
    }
    bintang += ('\n')
}
console.log(bintang)
// console.log('outcome kayak dibawah ini')
// console.log('* * * * *\n* * * *\n* * *\n* *\n*')
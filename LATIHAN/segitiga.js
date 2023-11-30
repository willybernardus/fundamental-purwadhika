//klo segitiga rata kanan dia ada spasinya, supaya bisa rata kanan
//segitiga rata kanan berasal dari persegi

var star = ''
var row = 5
// for(var i=0; i<row;i++){
//     for(var j=0;j<row;j++){
//         if (j<(row-i)-1) {
//             star+=' '
//         }else{
//             star+='*'
//         }

//     }
//     star+='\n'
// }
// console.log(star)

//CARA LAIN
// for(var i=0; i<row;i++){
//     for(var j=i;j<row;j++){
//         star+=' ' 
//     }
//     for(var k=0;k<=i;k++){
//         star+='*'
//     }
//     star+='\n'
// }
// console.log(star)

//SEGITIGA SAMA KAKI
for (var i = 0; i < row; i++) {
    for (var j = i; j < row - 1; j++) {
        star += ' '
    }
    for (var k = 0; k <= i; k++) {
        star += '*'
    }
    for (var m = 1; m <= i; m++) {
        star += '*'
    }
    star += '\n'
}
// console.log(star)

//CARA LAIN
for (var i = 0; i < row; i++) {
    for (j = i + 1; j < row; j++) {
        star += ''
    }
    for (var k = 0; k < (i * 2 + 1); k++) {
        star += '*'
    }
    star += '\n'
}

//SEGITIGA SAMA KAKI TERBALIK
for (var i = 0; i < row; i++) {
    for (var j = 1; j <= i; j++) {
        star += ' '

    }
    for (var k = 1; k < row - i; k++) {
        star += '*'
    }

    for (var m = i; m < row; m++) {
        star += '*'
    }
    if (i < row - 1) {
        star += '\n'
    }

}
console.log(star)
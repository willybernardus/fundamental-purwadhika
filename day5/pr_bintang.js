// bintang segitiga biasa
// 0 1 2 3 4 5 6 7 8 * 10 11 12 13 14 15 16 17 18 i = 0 
// 0 1 2 3 4 5 6 7 * * * 11 12 13 14 15 16 17 18 i = 1
// 0 1 2 3 4 5 6 * * * * * 12 13 14 15 16 17 18 i = 2
// 0 1 2 3 4 5 * * * * * * * 13 14 15 16 17 18 i = 3
// 0 1 2 3 4 * * * * * * * * * 14 15 16 17 18 i = 4
// 0 1 2 3 * * * * * * * * * * * 15 16 17 18 i = 5
// 0 1 2 * * * * * * * * * * * * * 16 17 18 i = 6
// 0 1 * * * * * * * * * * * * * * * 17 18 i = 7
// 0 * * * * * * * * * * * * * * * * * 18 i = 8
// * * * * * * * * * * * * * * * * * * * i = 9

var bintang = ''
var rows = 10
var columns = 19
var batasbawah = 9
var batasatas = 9

for(var i=0; i<rows; i++){
    for(var j=0; j<columns;j++){
        bintang+=' '
        if(j <= batasbawah && j >= batasatas){
            bintang+='*'
        }else{
            bintang+=' '
        }
    }
    bintang+='\n'
    batasbawah++
    batasatas--
}
console.log(bintang)




// bintang segitiga up-side down
// * * * * * * * * * * * * * * * * * * * 
// 0 * * * * * * * * * * * * * * * * * 18
// 0 1 * * * * * * * * * * * * * * * 17 18
// 0 1 2 * * * * * * * * * * * * * 16 17 18 
// 0 1 2 3 * * * * * * * * * * * 15 16 17 18 
// 0 1 2 3 4 * * * * * * * * * 14 15 16 17 18 
// 0 1 2 3 4 5 * * * * * * * 13 14 15 16 17 18 
// 0 1 2 3 4 5 6 * * * * * 12 13 14 15 16 17 18 
// 0 1 2 3 4 5 6 7 * * * 11 12 13 14 15 16 17 18 
// 0 1 2 3 4 5 6 7 8 * 10 11 12 13 14 15 16 17 18 

var bintang = ''
var rows = 10
var columns = 19
var batasbawah = 0
var batasatas = 18

for(var i=0; i<rows; i++){
    for(var j=0; j<columns;j++){
        bintang+=' '
        if(j >= batasbawah && j <= batasatas){
            bintang+='*'
        }else{
            bintang+=' '
        }
    }
    bintang+='\n'
    batasbawah++
    batasatas--
}
console.log(bintang)




// bintang ketupat
// 0 1 2 3 * 5 6 7 8    i = 0   
// 0 1 2 * * * 6 7 8    i = 1   
// 0 1 * * * * * 7 8    i = 2   
// 0 * * * * * * * 8    i = 3   
// * * * * * * * * *    i = 4   
// * * * * * * * * *    i = 5   
// 0 * * * * * * * 8    i = 6
// 0 1 * * * * * 7 8    i = 7
// 0 1 2 * * * 6 7 8    i = 8
// 0 1 2 3 * 5 6 7 8    i = 9

var bintang = ''
var rows = 11
var columns = 9
var batasbawah = 4
var batasatas = 4

for(var i=0; i<rows; i++){
    for(var j=0; j<columns;j++){
        bintang+=' '
        if(j >= batasbawah && j <= batasatas){
            bintang+='*'
        }else{
            bintang+=' '
        }
    }if(i<4){
        batasbawah--
        batasatas++
    }else if(i>4){
        batasbawah++
        batasatas--
    }
    bintang+='\n'
    
}
console.log(bintang)





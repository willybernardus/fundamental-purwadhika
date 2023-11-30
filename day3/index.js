// conditional statement
// var angka=5
// var angkastring='5'
// var perbandingan = !(angka == angkastring) || 5 == 5

// false || true = true
// var bool=true
// var perbandingantes= !true

// console.log(perbandingantes)

// if pattern 1
// var umur = 18

// if(umur >= 18){
//     // jika didalam kurung true maka 
//     //akan menjalankan perintah di kurung kurawal
//     console.log('kirim email')
// }

// if pattern 2
// var umur = 100

// if(umur >= 18){
//     console.log('kirim email buat sim')
// }else{
//     console.log('kirim email penolakan')
// }

// if else if pattern 3


// var scores = 100

// if (scores >= 85 && scores <= 100){
//     // score 85-100
//     console.log('Grade A')
// }else if(scores >=75 && scores < 85){
//     console.log('Grade B')
// }else if(scores >= 60 && scores < 74){
//  console.log('Grade C')
// }else if(scores > 0 && scores < 59){
//     console.log('Grade D')
// }else{
//     console.log('Grade F')
// }

var pekerjaan ='sopir'

switch (pekerjaan){
    case 'sopir':
        console.log('kerjanya nyetir')
        break
    case 'petani':
        console.log('kerjanya bertani')
        break
    default:
        console.log('ada aja kerjaannya bos')
        break;        
}

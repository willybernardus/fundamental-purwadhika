// variable adalah tempat kita untuk menyimpan data
// biasanya data yang disimpan adalah inputan user atau hasil dari sebuah proses
// untuk menyimpan data biasa, misal harga barang
// data yang ditampung bisa digunakan untuk proses lainnya lagi
// penamaan variable:
// untuk awal nama variable hanya boleh huruf, _ , atau $
// selanjutnya itu boleh angka tetapi selain itu tidak boleh

// coding itu dibaca oleh ke komputer dari atas kebawah dari kiri ke kanan
// pada saat kita menuliskan var maka pada saat program berjalan akan dibuatkan 
// suatu tempat untuk menyimpan data didalam ram
// kita bisa menggantikan isi data dengan cara seperti dibawah ini
var kata1, kata2, kata3
kata1 = 'aku'
kata2 = 'dia'
kata3 = kata1 + 'dan' + kata2 // kalau mau kasih spasi dalam tipe data string maka tambahkan spasi diantara ''
// console.log(kata3) //akudandia
// backtick adalah tombol yang ada dibawah tombol esc ``
// fitur khususnya adalah dalam penggunaan variable bisa dibungkus dengan ${....}
kata3 = `${kata1} dan ${kata2}`
// console.log(kata3) // aku dan dia

// type data
// string, number(integer dan float), array, object, boolean
// boolean hanya ada 2 value true dan false
// string ke integer parseInt() contoh yang hanya bisa di parseInt adalah sebuah string yang hanya berisi angka
// string ke float parseFloat (), kalau mau di parsing ke float baik itu integer atau string pakai parseFloat()
// number ke string .toString() atau bisa ditambah dengan +''

var angka = '5'
var angkaint = parseInt(angka)
var kataint = parseInt(kata1) // NaN : Not a Number
// console.log(angkaint)

var operasi = 20 % 2 // 0
// jika angka disebalh kiri lebih kecil sudah pasti jawabannya angka disebalah kiri
// modulus % adalah angka yang habis dibagi
// console.log(operasi)

angkaint += 10 // angkaint=angkaint+10 
angkaint *= 10 // angkaint=angkaint*10
angkaint++ // angkaint=angkaint+1
angkaint-- // angkaint=angkaint-1

// conditiional statement
// if sama switch
// keduanya membutuhkan sebuah boolean
// cara mengubah angka string dan lain2 menjadi sebuah boolean dibutuhkan comparison operator
// dalam javascript true = 1 dan false = 0
// bilangan negatif juga true

// if (condition){
//      task
// }
var nomor = 4
if (nomor == 5) { // kalau value di if true, else if tidak dibaca sama komputer
    nomor = 4
} else if (nomor == 4) { // kalau value di if adalah true, else if tidak dibaca sama komputer
    nomor = 3 // else if itu seperti percabangan
}
console.log(nomor)
// kalau setelah if ada if lagi, berikutnya akan dibaca terus
// else if harus punya persyaratan lain lagi
// kalau else, mau nomor berapa pun akan masuk ke else
// else tidak ada tanda kurung () langsung kurung kurawal {} alias menjalankan task tanpa kondisi
// else if butuh kondisi, else tidak butuh kondisi artinya semua pasti keterima di else
// console.log(nomor)





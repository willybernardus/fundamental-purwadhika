// latihan 1
// var x = 4
// var y = 3
// var z = 2
// var w = Math.pow((x + (y * z) / x * z), z)
// console.log(w)


// latihan 2 (di file HTML)
// latihan 3
// var x = 8
// var y = Math.cbrt(8)
// console.log(y)


// latihan 4
// var haritotal = 485
// var tahun = Math.floor(haritotal / 360) // 1
// var sisahari = haritotal - 360
// var bulan = Math.floor(sisahari / 30)
// var hari = sisahari % 30
// console.log(`485 hari adalah ${tahun} tahun ${bulan} bulan ${hari} hari`)


// latihan 5
// jumlah umur andi dan budi 49
// rasio umur andi dan budi adalah 0,4 = 4 : 10; andi=4 budi 10; andi+budi=14
// 49/14 = 3.5
// andi = 4 * 3.5
// budi = 10 * 3.5
// umur andi dan budi 2 tahun lagi?

var andi_dan_budi = 49
var andirasio = 4
var budirasio = 10
var totalrasio = andirasio + budirasio
var andi = (andi_dan_budi * andirasio) / totalrasio
var budi = (andi_dan_budi * budirasio) / totalrasio
var andi2tahun = andi + 2
var budi2tahun = budi + 2
console.log(andi2tahun)
console.log(budi2tahun)


// latihan 6
// jarak A & B = 120km
// kecepatan A = 60km / j
// kecepatan B = 40km / j
// mulai jalan pukul 9
// a+b = 100km
// jam brp akan bertabrakan?

var AkeB = 120
var a = 60
var b = 40
var jamawal = 9
var menitawal = 0
var pemangkasjarak = a + b
var waktutabrakanperjam = AkeB / pemangkasjarak
var jamkemenit = waktutabrakanperjam * 60
jamtambah = Math.floor(jamkemenit / 60)



// tugas 1
var x = 4;
var y = 3;
var z = 2;

var w = ((x + y * z) / (x * y)) ** z;

console.log(w);

// tugas 3
var pangkat = Math.cbrt(8);

console.log(pangkat);

// tugas 4
// hari awal 485
// var totalhari = 485
// var sisahari=totalhari
// var tahun=Math.floor(sisahari/360) // 1
// sisahari=sisahari%360
// var bulan = Math.floor(sisahari/30)
// // var hari = 

// console.log(`${tahun} tahun ${bulan} bulan`)

// tugas 5
// jumlah umur andi dan budi 49
// rasio andi : budi = 0.4 4:10 andi=4, budi=10 andi+budi=14
// 49/14 = 3.5
// andi = 3.5 * 4
// budi = 3.5 * 10
// umur andi dan budi 2 tahun lagi

var andi_dan_budi = 49;
var andirasio = 4;
var budirasio = 10;
var totalrasio = andirasio + budirasio;
var andi = (andi_dan_budi * andirasio) / totalrasio;
var budi = (andi_dan_budi * budirasio) / totalrasio;
// 2 tahun lagi
var andi2tahun = andi + 2;
var budi2tahun = budi + 2;
console.log(andi);
console.log(budi);



// tugas 6
// jarak a dan b=120km
// a bergerak = 60 km/j
// b bergerak = 40 km/j
// a+b = 100 km/j
// jam 9
var AkeB = 120;
var A = 60;
var B = 40;
var pemangkas_jarak;
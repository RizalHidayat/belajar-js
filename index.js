// if(true){
//     var a = 'rizal'
// }
// console.log(a);
// if(true){
//     let b ='rizal'
//     console.log(b)
// }
// let c ='aku'
// console.log(c)
// const d ='kamu'
// console.log(d)

// let menikah = true
// console.log(typeof 'menikah');
// var a ='apa kabar'
// console.log(a.length);
// let a = parseInt('123');
// let b = parseFloat('123');
// let c = parseInt('1234.5678'); 
// let d = parseFloat('1234.5678'); 
// let e = parseInt('Halo Dunia'); 
// let f = parseFloat('Halo Dunia'); 

// console.log(a) 
// console.log(b) 
// console.log(c) 
// console.log(d) 
// console.log(e) 
// console.log(f) 
// console.log(typeof(a)) 
// var usiaAyah = 60; 
// var usiaBunda = 45;
 
// console.log(usiaAyah * usiaBunda); 
// console.log(usiaAyah / usiaBunda); 
// console.log(usiaAyah + usiaBunda); 
// console.log(usiaAyah - usiaBunda); 
// console.log(usiaAyah % usiaBunda);

// console.log(Math.PI); 
// console.log(Math.abs(-4.7)); 
// console.log(Math.pow(8, 2)); 
// console.log(Math.sqrt(64)); 
// console.log(Math.cbrt(8));

// console.log(Math.round(4.7)); 
// console.log(Math.round(4.4)); 
// console.log(Math.floor(4.7)); 
// console.log(Math.ceil(4.4)); 

// console.log(Math.random()); 
// console.log(Math.max(1,3,5)); 
// console.log(Math.min(1,3,5)); 

// let a = new Date() 
// console.log(a.getFullYear()); 
// console.log(a.getMonth());
// console.log(a.getDate()); 
// console.log(a.getDay());
// console.log(a.getHours()); 
// console.log(a.getMinutes());
// console.log(a.getSeconds());
// console.log(a.getMilliseconds()); 

// case 1
let firstNumber = prompt('input angka pertama : ');
let secondNumber = prompt('input angka kedua : ');
let pangkat = (Math.pow(firstNumber,secondNumber))
let bagi = (firstNumber/secondNumber)

alert(`hasil pangkatnya ${pangkat} hasil pembagiannya ${bagi}`)


// case 3
let hariIni = new Date();

console.log(`Tanggal Hari Ini adalah: ` + hariIni.toDateString());

let kemarin = new Date();
kemarin.setDate(kemarin.getDate() - 1);
console.log(`Tanggal Hari kemarin adalah: `+kemarin.toDateString());

let besok = new Date();
besok.setDate(besok.getDate() + 1);
console.log(`Tanggal Hari besok adalah: `+besok.toDateString());

// case 5
let jml = prompt('Masukkan kata:')
alert('banyak karakter yang dimasukkan adalah ' + jml.length)


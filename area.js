const arguments = process.argv.slice(2);
const yaricap = Number(arguments[0]);

function alanHesapla(r) {
    const PI = 3.14159;
    const alan = PI * Math.pow(r, 2);
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${alan}`);
}

if (yaricap) {
    alanHesapla(yaricap);
} else {
    console.log("Lütfen bir yarıçap değeri giriniz!");
}
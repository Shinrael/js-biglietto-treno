// 1.

const kilometres = prompt ('Quanti km si desidera percorrere?');

// 2.

const age = prompt ('Quanti anni hai?');

// 3.

const rate = 0.21
const price = rate * kilometres
console.log(kilometres, age, price);

// 4.

document.getElementById ('output').innerHTML += price

// 5.

const priceUnderage = ''
const priceAncient = ''

if (age > 18){
  priceUnderage = ((price * 20) / 100);
} 

if (age > 65){
  priceAncient = ((price * 40) / 100);
}

console.log(priceUnderage, priceAncient);

document.getElementById ('discount').innerHTML = `
<h2> ma hai diritto ad uno sconto, perciò il prezzo finale è di <strong> ${}
`
// 1.

const kilometres = prompt ('Quanti km si desidera percorrere?');

// 2.

const age = prompt ('Quanti anni hai?');

// 3.

const rate = 0.21
const price = rate * kilometres
console.log(kilometres, age, price);

// 4.

document.getElementById ('output').innerHTML += price.toFixed(2);

// 5.

let priceUnderage = ''
let priceAncient = ''

if (age < 18){
  priceUnderage = price * 0.2;
} 

if (age > 65){
  priceAncient = price * 0.4;
}

const discountedPrice = price - priceUnderage - priceAncient;

console.log('Il prezzo del viaggio è '+ discountedPrice.toFixed(2) );

const discountMessage = (priceUnderage > 0 || priceAncient > 0) ? 'ma hai diritto ad uno sconto, perciò il prezzo finale è di € ' : '';

document.getElementById ('discount').innerHTML = `
 <h2> ${discountMessage} <strong> ${discountedPrice.toFixed(2)}! </strong> </h2>
 `
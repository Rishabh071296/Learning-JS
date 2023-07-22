const score =400
// console.log(score);

const balance = new Number (100)
console.log(balance);
console.log(balance.toFixed(2));

const otherNumber = 145.1254
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(math.ceil(4.9));
// console.log(math.floor(7.8));
// console.log(Math.min(4,54,45,5));
// console.log(Math.max(54,2,56,232));

console.log(math.random());
console.log((math.random()*10)+1);
console.log(math.floor(math.random()*10)+1);

const min = 10
const max = 20
console.log(math.floor(math.random()*(max-min+1))+min);
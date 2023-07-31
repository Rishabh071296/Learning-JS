//Question :- can i change the value of PI?? it means 3 or 4..
// Answer is No coz  writable: false,  enumerable: false,configurable: false
   
// const descripter = Object.getOwnPropertyDescriptors(Math, "PI")
// console.log(descripter);

// console.log(Math.PI);
//************************************************************************************************************** 
const chai = {
    name: 'Rishabh Singh',
    price : 450,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

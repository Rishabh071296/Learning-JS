// console.log(null > 0);
// console.log(null==0);
// console.log(null>=0);


// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);


console.log("2"===2);

/*
The reason is that an equality check == and comparisions ><>= <= work differently .
 Comparisions convert null to a number , treating it as 0 that's why (3) null >= is true and (1)> 0 is false.
*/
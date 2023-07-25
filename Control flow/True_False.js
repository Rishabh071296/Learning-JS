// const userEmail = "R@ishabh.chatGPT"

// if (userEmail) {
//     console.log("got user email");
// }
// else{
//     console.log("Don't have user email ");
// }

//**********************Falsy Value********************

// false, 0 , -0 , BigInt(0n) , "" , nul , undefined , NaN

 // *****************Truthy Value**************************
 // "0" , 'false' , " " , {} , [] , function(){} , 

 // Nullish coalescing Operator (??) null undifined

 let val1;
//  val1 = 5 ?? 10
// val1 = null??10
// val = undefined??10
// val1= null??undefined
val1= null ?? 10 ?? 15
 
 
 console.log(val1);

 // Terniary Operator********************************

//  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80? console.log("less than 80"): console.log("more than 80");



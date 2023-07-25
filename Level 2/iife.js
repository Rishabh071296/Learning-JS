// Immediately Invoked Function Expressions (IIFE)
//Part 1++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function RRR() {   //************Named IIFE */
//     console.log(`DB CONNECTED`);
// }
// RRR()
//Part 2+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
(function RRR(name) { //**********IIFE */
    console.log(`DB CONNECTED ${name}`);
})("Rishabh Singh");

//If entered two case then ; written is more important 

(()=>{
    console.log(`DB CONNECTED TWO`);
})()
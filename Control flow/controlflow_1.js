//IF

if (true) {
    // (true) then excuted code otherwise not
}
// == is show the equal the value and === is show that value + data type 

// const score = 200
//  if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
//  }
//  console.log(`user power ${power}`); //***if you are using var then code will be excuted  */

//Short hand notastion+++++++++++++++++++++++++++++++++++++++++++

const balance = 1000

// if (balance< 500) {
//     console.log("less than 500");
// } else if(balance<750){
//     console.log("less than 750");
// }else if(balance<950){
//     console.log("less than 950");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard =true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true
if (userLoggedIn && debitCard) {
    // && means all conditions should be meet
    console.log("Allow to buy course");
}
// **************|| pipes symbol(or symbol) to compair together which one is true or match**************************
if (LoggedInFromEmail || LoggedInFromGoogle) {
    console.log("user logged in");
}

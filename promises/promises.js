//+++++++++++++++++++ Promise 1st++++++++++++++++++++++++++++++++++++++++
// const promiseOne = new Promise(function(resolve , reject){
//       //Do an async task++++++++++++++++++++
//       //BD calls,cryptography,network++++++++++++++++++++++++
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })
// promiseOne.then (function(){
//     console.log("promise Consumed");
// })
//+++++++++++++++++++ Promise 2nd++++++++++++++++++++++++++++++++++++++++

// new Promise(function (resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })
//+++++++++++++++++++ Promise 3rd++++++++++++++++++++++++++++++++++++++++
// const promiseThree = new Promise(function(resolve,rejected){
//  setTimeout(function(){
//     resolve({username: "chai",email: "Rishi@singh.com"})
//  },1000)
// })
// promiseThree.then(function(user){
// console.log(user);
// })

//+++++++++++++++++++ Promise 4th++++++++++++++++++++++++++++++++++++++++

// const promiseFour = new Promise (function(resolve,reject){
//  setTimeout(function(){
//     let error = true 
//     if (!error) {
//         resolve({username: "Rishabh",password:"123456"})
//     }else{
//         reject('ERROR: Something went error')
//     }
//  },1000)
// // })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then ((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>console.log("The promise is either resolve or rejected"))

//++++++++++++++++++++++++++++++++ Promise 5th++++++++++++++++++++++++++++++++++++++

// const promiseFive = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         let error = true 
//         if (!error) {
//             resolve({username: "Raunak Singh",password:"654321"})
//         }else{
//             reject('ERROR: Raunak went error')
//         }
//      },1000)
//     })

    // async function consumePromiseFive(){
    //     try {
    //         const response = await promiseFive
    //         console.log(Response);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // consumePromiseFive()

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // async function getAllUsers(){
    //     try {
    //         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
    //         const data = await response.json()
    //         console.log(data);
    //     } catch (error) {
            // console.log("E:",error);
        // }
    // }

// getAllUsers()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

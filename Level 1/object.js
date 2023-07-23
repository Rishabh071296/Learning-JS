//singleton
//2nd way to make object.++ Object.create for these object is created singleton
//object literals
const mySym = Symbol("Key1")
const jsUser = {
    name: "Rishabh Singh",
    age:22,
    [mySym]: "myKey1",
    loaction:"Lucknow",
    email:"xyz@.com",
    isLoggedIn:false,
}

// console.log(jsUser.email); 1 way to print 
// console.log(jsUser["email"]); 2 way to print (Impornant)
// console.log(jsUser[mySym]);

//If change the value++++++++++++++++++

jsUser.email = "rishabh@google.com"

// console.log(jsUser.email);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(jsUser.greetingTwo());
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
// console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
// console.log(jsUser.greetingTwo());

//*****************************Part-2************************************************************************/



// const RS7user= new Object();++++ Singelton Object
// const RS7user = {} +++++ Non singelton Object

// console.log(RS7user);

const regularUser={
    email: "xyz@gmail.com",
    fullname:{
        userfullname:{
        Firstname:"Rishabh",
        lastname: "Singh"
    }
}
}

// console.log(regularUser.fullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3 ={obj1,obj2}********************1st way****************
// const obj3= Object.assign({},obj1,obj2)********************2nd Way*********************
// const obj3= {...obj1, ...obj2}***************3rd way (important)***********
// console.log(obj3);

console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
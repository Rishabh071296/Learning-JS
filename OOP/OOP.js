// const user = {
//     username : "rishabh",
//     loginCount : 7,
//     SignedIn : true,

//     getUserDetails:function(){
//         console.log("Got user details from database");
//         console.log(`Username : ${this.username}`);
//         console.log(this);
//     }
// }


// console.log(user.username);
// console.log(user.getUserDetails);
// console.log(this);


// Why we use new keyword******************************

//- Constructor function uses*********************************

function user(username,loginCount,isloggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn

    return this
}

const userOne= new user ("Rishabh",12,true)
const userTwo= new user ("Raunak" , 7 , false)  //Overrigth the value if you are not written new keyword
console.log(userOne);
console.log(userTwo);

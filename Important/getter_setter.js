class user {
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password (){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}
// const Rishabh = new user ("Rishabh@xyz.com","1235654")
// const Rishabh = new user ("Rishabh@xyz.com","sdgfsdg")
// console.log(Rishabh.password);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\
//Objectbase get set.......

const User = {
    _email: "R@RS.com",
    _password : "abhadvfbu",


get email (){
    return this._email.toUpperCase()
},
set email(value){
    this._email = value
}

}

const Rishi = Object.create(User)
console.log(Rishi.email);
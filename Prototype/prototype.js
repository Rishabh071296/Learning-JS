let myHeros = ["thor","spiderman"]

let heropower={
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }

}
Object.prototype.Rishabh = function(){
    console.log(`Rishabh is present in all objects`);
}

// heropower.Rishabh()

//Inheritance

const User ={
    name:"chai",
    email: "chai@google.com"
}

const Teacher = {
    makeCideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chai aur code      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lenght is : ${this.trim().length}`);
}

anotherUsername.trueLength()
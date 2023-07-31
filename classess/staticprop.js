class User {
    constructor(username){
        this.username = username
    }
logme (){
    console.log(`username: ${this.username}`);
  }
  static createid(){
    return `123645`
  }

}
const Rishabh = new User ("Rishabh")
console.log(Rishabh.createid());
 
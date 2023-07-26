//Forin******************************************
const myObject ={
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
//    console.log(programming [key]);
}

//For each loops*******************************************

const coding = ["js","ruby","java","python"]

coding.forEach(function (item){
    // console.log(item);
}  )

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
}) // Foreach also print item,index and array**************************

const myCoding =[
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "j"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]
myCoding.forEach((item)=>{
// console.log(item.languageName);
console.log(item.languageFileName);

})
//For of Loops**************************************************

//["", "", ""]
//[{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello Rishabh!"
for (const greet of greetings) {
    // console.log(greet);
}

// Maps********************************************

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"USA")
map.set('JNP',"JAPAN")
map.set('IN',"INDIA") // Two entery is not allowed 

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-', value);
}


const myObject = {
    'game1':'NFS',
    'game2':'PUBG'
}

// for (const [key,value] of myObject) {
//         console.log(key, ':-', value);

// } // Not working forof Loops in Object**********************



// function addTwoNumber(number1,number2) {
//     console.log(number1+number2);
// }

function addTwoNumber(number1,number2) {
    // let result = number1+number2
    // return result
    return number1+number2

}
const result =addTwoNumber(7,7)

// console.log("Result: ",result);


function loginUserMessage(username) {
    if (username===undefined) {
        console.log("Please enter a username");
        return
        
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Rishabh"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {                      //using rest operator
    return num1
    }
// console.log(calculateCartPrice(200,400));

const user = {
    username: "Rishabh",
    price: 777
}
function handleObject(anyobject) {
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
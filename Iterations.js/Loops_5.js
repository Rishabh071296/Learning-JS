// const myNum = [1,2,3,4,5,6,7,8,9,10]

//  const NewNums = myNum.filter((num)=>{
//     return num > 4    If enter {} then use return otherwise show the error.
// })

// console.log(NewNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((bk)=>bk.genre === "History")
userBooks = books.filter ((bk)=>{
    return bk.publish >= 1995 && bk.genre === "History"
})

// console.log(userBooks);

//*************************Map ****************************************

const MyNumbers = [1,2,3,4,5,6,7,8,9,10]
// const NewNums = MyNumbers.map ((num)=> num + 10)

// const newNums = MyNumbers
.map((num)=> num * 10 )
.map ((num)=> num + 1)
.filter ((num) => num >= 40)

// console.log(newNums);

// +++++++++++++++++REDUCE METHOD +++++++++++++++++++++++++++++++++++++++++++++++++++

const myNums = [1,2,3]
const myTotal = myNums.reduce (function (acc,currentvalue) {
    console.log(`acc: ${acc} and currentvalue: ${currentvalue}`);
    return acc + currentvalue 
}, 0)
// console.log(myTotal);


//Question:- Add the price of all ShoppingCart...........
//Answer :- 
const ShoppingCart = [
    {
        cousreName: "JS Course",
        Price : 1999
    },
    {
        cousreName: "py Course",
        Price : 11999
    },
    {
        cousreName: "Java Course",
        Price :3999
    },
    {
        cousreName: "FSWD Course",
        Price : 3503
    },
]

const PriceToPay= ShoppingCart.reduce ((acc , item)=> acc + item.Price, 0)
console.log(PriceToPay);


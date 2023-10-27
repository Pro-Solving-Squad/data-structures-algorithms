const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];

//double each element using map
const doubleArray = array.map((number, index, arr) => {
  return `${index}: ${number}`;
});

//console.log(doubleArray);

//filter out all the odd numbers using filter

const oddNumbers = array.filter((item) => item % 2 !== 0);

//console.log(oddNumbers)


//console.log each element and it's index using forEach

array.forEach((element,index) => { 
    if (element % 2 === 0) {
        return element
    }
    //console.log(element)
})

//extract the second half of the array using slice

//const slicedArray = array.slice(6)
const slicedArray = array.slice(-2, -1)
//[10]

//console.log(slicedArray)



const shoppingList = ["bread", "eggs", "bananas", "milk", "butter"];

//remove bananas from shopping list using splice

const newArray = shoppingList.splice(2, 1, "apples", "grapes", "oranges")

//console.log(newArray)
//console.log(shoppingList)
//["bread", "eggs", ["apples", "grapes"], "milk", "butter"]


//add apples to list using splice




const mixedArray = [3, "bread", 60, 8, 10, 6];

//check if mixedArray have only number data types using every

const allNumbers = mixedArray.every(value => !isNaN)

//console.log(allNumbers)

//check if all number is smaller that 12 using every
//array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const lessThanTwelve = array.every(value => value < 12)

//console.log(lessThanTwelve)

//check if at least there is at least 1 string in the mixed array using some
//mixedArray = [3, "bread", 60, "eggs", 10, "bananas"];

const haveString = mixedArray.some(value => typeof value === "string")

//console.log(haveString)

//check if the number 2 occur at least once in the mixedArray

//order array from largest to smallest using reverse

//Make a string of the shoppingList array using join

//add up all elements in array using the reduce method
//array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];

const sum = array.reduce((acc, currentValue) => {
    return acc + currentValue
})

//console.log(sum)


const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "grapes",
];

//store item and how of each item in an object using reduce


//Write a function that accepts an array of strings and console.logs each element using a for loop.
const items=["book","car","apple","girl","pen"]
function arrayOfStrings(items){
for(let i=0;i<items.length;i++){
    console.log(items[i])
}
}
arrayOfStrings(items)

//Write a function that accepts an array of numbers 
//and uses the forEach() method to console.log each number multiplied by 2.
let nums=[23,45,67,12,33,7]
let num=[]
function Numbers(nums){
 nums.forEach(Numbers)
 nums.push(nums*2)
}
console.log(nums)

//Write a function that takes in an array of numbers and consoles the first four
// items multiplied by 8 and the last two added by 5. Console the array with the new values
let numbers=[2,9,20,54,3,66,]
let y=[]
function arrayOfNumbers(numbers){
    for(let a=0;a<numbers.length; a++)
    if(a<4){
        y.push(numbers[a]*8)
    }
    else{
        y.push(numbers[a]+5)
    }
    console.log(y)
}
arrayOfNumbers(numbers)

//Write a function that takes in the following array and use a while loop
// to iterate and break when the item is equal to the fourth index

let arrNum = [1,2,3,4,5,6,7,8,9];
let x=0;

function looping(arrNum){
    while(x<arrNum.length){
        console.log(arrNum[x])
        if(x===4){
            break;
        }
        x++
    }
}
looping(arrNum)

//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index

let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruit(fruits){
    for(let w=0;w<fruits.length;w++){
        if(x===2){
            continue;
        }
        console.log(fruits[w])
    }
}
fruit(fruits)
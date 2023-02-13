const fruits = ["Apple","Banana","mongo"];

//add element in array
fruits.push("Pineapple")

//remove last element
console.log(fruits.pop());

//remove first element
console.log(fruits.shift());

// add new element on first possition
console.log(fruits.unshift("Gwava"));


//for each loop
fruits.forEach((fruit)=>{
  console.log(`This is ${fruit}`);
  
})
//array length
console.log("array length",fruits.length);


//to string
console.log(fruits.toString())

//join
console.log(fruits.join("||"))

//delete element using "delete"
console.log(delete fruits[2])

//concat two arrays
const otherFruits = ["Kiwi","Lemon"]
console.log(fruits.concat(otherFruits));

//splice method
console.log(fruits.splice(3,0,"Watermelon"));
console.log(fruits.splice(1,1));

//slice method
const array1 = fruits.slice(0,2)
console.log(array1);


const numbers = [3,2,6,2,4,6,8,0]

//sort
console.log(numbers.sort((a,b)=>a-b));

//reverse
console.log(numbers.reverse());


//max
console.log(Math.max.apply(null,numbers));

//map function
const squere = numbers.map(number => number * number)
console.log(squere);

//filter method
console.log(numbers.filter(number => number <=5));

//reduse method
console.log(numbers.reduce((total=0,value)=> total + value))

//every method
console.log(numbers.every(n=>n <= 5));

//some method
console.log(numbers.some(n=>n <=5));

//indexOf method
console.log(numbers.indexOf(6));

//lastIndexOf method
console.log(numbers.lastIndexOf(6));


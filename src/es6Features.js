let fruits = ["Banana", "Mango", "Watermelon", "Gwava", "Strobarry", "Pineapple"]

//-----------------------------arrow function-----------------------------
const stringLength = (fruits)=> {
  fruits.forEach((fruit) => {
    console.log(fruit, fruit.length);
  })
}
// stringLength(fruits)

//-----------------------------spread operator-----------------------------
const addFruits = (newFruits) => {
  fruits = [...fruits, ...newFruits];
  console.log(fruits);
}
// addFruits(["Apple","Grapes"]);

//-----------------------------forof loop-----------------------------
const text = "is delecious"
// for (let fruit of fruits) {
//   fruit = fruit + " " + text;
//   console.log(fruit);
// }


//-----------------------------Map-----------------------------
const cars = new Map([
  ["volvo", 2500000],
  ["tesla", 10000000]
])

cars.set("nexon", 2000000);
// console.log(cars.get("nexon"));

cars.delete("volvo")

const car = cars.entries()
// console.log(cars,car,cars.keys(),cars.values(),typeof cars);


//-----------------------------Set-----------------------------
const phones = new Set(["apple", "one plus", "realme", "realme", "Samsung"])
phones.add("oppo")
phones.add("oppo")
phones.add("vivo")
// console.log(phones, phones.values(), phones.keys(), phones.entries(), typeof phones);


//-----------------------------Class-----------------------------
class Phone {

  constructor(brand, model, storage, gamming) {
    this.brand = brand,
      this.model = model,
      this.storage = storage,
      this.gamming = gamming || false
  }

  detail() {
    console.log(`brand:${this.brand} , model:${this.model} , storage:${this.storage} , gamming:${this.gamming}`);
  }

}

const rog = new Phone("Asus", "rog", 256, true)
const a50 = new Phone("Samsung", "a50", 128)

// rog.detail()
// a50.detail()

//-----------------------------Promises-----------------------------

const fetchData = new Promise((resolve, reject) => {
  let req = new XMLHttpRequest();
  req.open("GET", "text.txt");
  req.onload = function () {
    if (req.status == 200) {
      resolve(req.response);
    } else {
      reject("File not Found");
    }
  }
  req.send()
})

fetchData.then(res => console.log(res)).catch(err => console.log(err))

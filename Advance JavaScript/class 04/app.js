// console.log("HELLO WORLD");

// console.log(1)  =>>
// console.log(2) => call api
// console.log(3) =>

// const myPromise = new Promise((resolve, reject) => {
//   const isMethaiDone = false;

//   if (isMethaiDone) {
//     resolve("shaadi mubarak");
//   } else {
//     reject("wapsi shaadi kr bhai");
//   }
// })
//   .then((success) => {
//     console.log("success", success);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// const myPromise2 = new Promise((resolve, reject) => {
//   const isMethaiDone = false;

//   if (isMethaiDone) {
//     resolve("shaadi mubarak");
//   } else {
//     reject("wapsi shaadi kr bhai");
//   }
// });

// myPromise2
//   .then((success) => {
//     console.log("success", success);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });
// console.log("myPromise", myPromise);

// fetch("https://fakestoreapi.com/products12321asdasd")
//   .then((res) => res.json())
//   .then((response) => console.log(response, "response"))
//   .catch((error) => console.log(error, "error"));

// const getData = async () => {
//   // const data = new Promise()
//   const data = await apiCall();

// };

// const getData = async () => {
//   try {
//     const data = await fetch(
//       "https://fakestoreapi.com/products"
//     ).then((res) => res.json());

//     console.log("data", data);
//   } catch (error) {
//     alert("api error");
//   }
// };

// classes
// OOP=>

// function Std(name,age){
//     this.stdName = name
// }

// class Std {
//   constructor(name, age) {
//     this.stdName = name;
//     this.stdAge = age;
//   }
//   getName() {
//     return this.stdName;
//   }
// }

// const std = new Std("jaffar", 22);
// const std2 = new Std("jaffar", 22);
// console.log(std, "std1");
// console.log(std2, "std2");
// std2.getName()

class Std {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    // this.isVol = isVol;
  }
}

class StdVol extends Std {
  constructor(name, age, isVol) {
    super(name, age);
    this.isVol = isVol;
  }
}

// const std1 = new Std("jaffar", 22);

const stdAll = new StdVol("Jaffar", 22, true);
console.log(stdAll);

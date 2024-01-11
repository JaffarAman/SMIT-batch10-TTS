// Advance JS

// console.log(fullName);
// let fullName = "Jaffar";

// var arr = ["apple", "mango", "lemon"];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// arr[0]

// array destructuring

// var arr = ["apple", "mango", "lemon"];

// var [fruit1, fruit2, fruit3] = ["apple", "mango", "lemon"];

// console.log(fruit1);

// object destructuring
// const obj = {
//   firstName: "Jaffar",
//   lastName: "Aman",
// };

// const { firstName, lastName } = obj;

// console.log(firstName);
// console.log(lastName);

// var array = ["apple", "mango"];

// const [f2 , f1] = array

// var a = {
//   firstName: "Jaffar",
// };

// var b = {
//   lastName: "Aman",
// };

// var a = [10, 20, 30];
// var b = [40, 50, 60];

// //spread opt aka three dots
// var c = [...a, ...b];

// console.log(c);

// var a = {
//   firstName: "Jaffar",
//   lastName: "Iqbal",
// };

// var b = {
//   ...a,
//   lastName: "Aman",
// };

// console.log("b", b);

// var arr1 = [10, 20];

// var arr2 = [40, 30];

// // ES6
// // var arr3 = [...arr1, ...arr2];

// // ES5
// var arr3 = arr1.concat(arr2);

// console.log(arr3);

// Arrow Functions
// ES5
// function foo(num1) {

//     return "Jaffar"
// }
// foo(10);

// const foo = (num1) => {
//   console.log("foo", num1);
// };

// foo(100);

// const foo = num1 => {
//   console.log("foo", num1);
// };

// foo(100);

// const foo = () =>
//    "Jaffar";
// ;

// var name = foo();
// console.log(name, "name");

// const foo = function(){

// }

// console.log(this);

// const obj = {
//   firstName: "Jaffar",
//   getFirstName: function () {
//     console.log(this);
//   },
// };

// const obj1 = {
//   firstName: "Jaffar",
//   getFirstName: () => {
//     console.log(this);
//   },
// };

// obj.getFirstName();
// obj1.getFirstName();

// array method's
// filter ,map , find, findIndex,forEach,

// var arr = [2, 4, 6, 8, 10];
// var mapArr = arr.map((value, index, array) => {
// //   return value * 2;
//     return "jaffar"
// });

// console.log("mapArr", mapArr);
// console.log("arr", arr);

// const newArr = arr.map((value, index, array) => {
//   //   console.log(value, "value");
//   //   console.log(index, "index");
//   //   console.log(array, "array");
//   return value * 2;
// });

// console.log(newArr, "newArr");

// var arr = [2, 4, 6, 8, 10];

// arr.forEach((number, index) => {
//   //   console.log(number);
//   arr[index] = number * 2;
// });

// // console.log(newArr, "newArr");
// console.log(arr, "arr");

// filter
const arr = [2, 4, 6, 8, 10, 10];
const filterArr = arr.filter((value, index) => {
  if (value === 10) {
    return true;
  }
});
// var mapArr = arr.map((value, index, array) => {
//   if (value === 2) {
//     return value;
//   }
//   //   return value * 2;
//   // return "jaffar"
// });
console.log(filterArr);
// console.log(mapArr, "mapArr");

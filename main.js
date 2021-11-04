// // numbers
// console.log(2021);
// console.log(20 * "hello");
// console.log(1 / 0);
// // strings
// console.log("Hello", "Hello", `Hello`);
// // boolean
// console.log(true, false);
// // null
// console.log(null); //имеет единственное значение
// // undefined
// console.log(undefined); // также единственное значание

// // Обьекты
// console.log({ name: "Denis", age: 30 });
// // преобразование в типы данных
// let value;
// value = String(10);
// value = String(10 + 40);
// value = (40).toString();
// value = 30 + '';
// value = 30 - 'sad'; // NaN
// value = true;
// value = String([1, 2, 3]); // array to string
// value = String({ name: "Denis" }); // object to string
// value = 30 - '5' // number 25
// value = true + 10; // 11
// value = true + '10'
// value = false + undefined // NaN
// //String to number
// value = Number('23') // NaN
// value = Number(true) // 1
// value = Number(null) // 0
// value = Number('null') // NaN
// value = Number([1, 2, 3]) // NaN

// value = parseInt('1sdafasdfa')
// value = parseFloat('123.323')

// // Boolean
// value = Boolean('1')
// value = Boolean('')
// value = Boolean(undefined)
// value = Boolean(false)
// value = Boolean([])
// value = Boolean({})

// console.log(value);
// console.log(typeof value);
// console.clear()
// Numbers
// const num1 = 10;
// const num2 = 20;
// let value;

// value = num1 + num2;
// value += 100;
// value = 0.6 + 0.7;
// value = +value.toFixed(1)
// value = (0.6 * 10 + 0.7 * 10 ) / 10
// // Math
// value = Math.random()
// value = Math.round(2.3)
// value = Math.ceil(2.2)
// value = Math.floor(3.9)
// value = Math.min(2, 12, 15, 0, 12)
// let arr = ['black', 'red', 'yellow', 'blue', 'green', 'orange', 'brown', 'pink']
// value = Math.floor(Math.random() * arr.length)

// value = arr[value]
// console.log(value);

// const firstName = 'Denis';
// const lastName = 'Ivanov';
// const age = 30;
// const str = 'Hello my name is Denis';

// let value;
// value = firstName + ' ' + lastName;
// value = firstName[firstName.length - 1]
// value = firstName.indexOf('n')
// value = str.indexOf('n', 11)
// value = str.indexOf('my')
// value = str.lastIndexOf('my')
// value = str.includes('my')
// value = str.slice(0, 5)
// value = str.slice(0, -3)
// value = str.replace('Denis', 'Roman')

// console.log(value);

// Objects
// const user = {
//   firstName: "Denis",
//   age: 30,
//   isAdmin: true,
//   email: "test@mail.ru",
//   "user-address": {
//     city: "Kyev",
//   },
//   skills: ["html", "css", "js"],
// };

// let prop = 'skills'

// let value;
// value = user[prop]

// value = user.firstName = 'ROman'
// user.info = 'some info'
// value = user;
// value = user['user-address'].country = 'Ukraine'
// value = user;
// user.plan = {}
// user.plan.basik = 'basic'

// console.log(value);

// let a = -1;
// let b = 0;

// if (a > 0) {
//   b = a;
// } else {
//   b += 1;
// }

// b = a > 1 ? a : b + 1;
// b = a > 1 ? a : a < 0 ? 3 : 0;

// console.log(b);
// while, do while, for, for 0f, for in

// let i = 0;

// while(i < 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log('action');
// } while(i > 0)

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let str = 'Hello my name is Roman';
// let res = '';

// for(let i = 0; i < str.length; i++) {
//   res = str[i];
//   console.log(res);
// }

// let colors = ["orange", "yellow", "blue"];

// for (let i = 0; i < colors.length; i++) {
//   colors[i] = colors[i].toUpperCase();
// }

// console.log(colors

// const users = [
//   { name: "Denis", age: 30 },
//   { name: "Oleg", age: 22 },
//   { name: "Roman", age: 27 },
//   { name: "Maks", age: 34 },
// ];

// const usersObject = {};

// for (let i = 0; i < users.length; i++) {
//   usersObject[users[i].name] = users[i];
// }

// console.log(usersObject.Roman);

// const user = { name: "Denis", age: 30 };

// for(let key in user) {
//   console.log(user[key]);
// }

// ########****************************########
// ########    function Declaration    ########
// ########****************************########

// sayHello()

// function sayHello(firstName, lastName) {
//   console.log(firstName, lastName);
//   console.log('hello');
//   return `Hello ${firstName} ${lastName}`
// }

// let res = sayHello('Roman', 'Matsypula')

// console.log(res);

// ########****************************########
// ########    function expression    ########
// ########****************************########

// const squaere = function(x) {
//   return x * x;
// }

// let result = squaere(5);
// console.log(result);

// ########****************************########
// ########    function IIFE    ########
// ########****************************########

// (function(msg){
//   console.log(msg);
// }('hello world'))

// ########****************************########
// ########    methods Arrays    ########
// ########****************************########
// const numArr = [2, 22, 32, 12, 43];
// let value;

// value = numArr.length;
// value = Array.isArray(numArr);
// value = numArr.indexOf(22);
// value = numArr.push(3721);
// value = numArr.pop(3721);
// value = numArr.unshift(21);
// value = numArr.shift(21);
// value = numArr.slice(0, 2); //не изменяет исходный массив
// value = numArr.splice(1, 0, "one", "two"); // изменяет массив
// value = numArr.reverse(); // изменят массив
// value = numArr.concat(2, 3, 4);
// value = numArr.join(" ");
// value = "hello world".split();

// console.log(value, numArr);

// function start() {
//   let result = [];
//   for (let i = 0; i < arguments.length; i++) {
//     if (!Array.isArray(arguments[i])) {
//       return console.error('elemen not array');
//     }

//      result.push(arguments[i].slice(1));
//   }
//   return console.log(result);
// }

// start([1, 2, 3], ['a', 'b', 'c']);

// ########****************************########
// ########    callback functions      ########
// ########****************************########

// let arr = ["Roman", "Ivan", "Maks"];

// function mapArray(arr, cb) {
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     res.push(cb(arr[i]));
//   }

//   return res;
// }

// console.log(mapArray(arr, nameLength));

// function nameLength(element) {
//   return element.length;
// }

// function namesToUpperCase(element) {
//   return element.toUpperCase();
// }

// console.log(mapArray(arr, namesToUpperCase));

// function greeting (firstName) {
//   return function (lastName) {
//     return `Hello ${firstName} ${lastName}`;
//   }
// }

// let result = greeting('Roman');
// console.log(result('Matsypula'))

// function answer(job) {
//   const jobDictionary = {
//     developer: 'что такое  javascript?',
//     teacher: 'какой предмет вы ведете?'
//   }
//   return function (name) {
//     return `${name}, ${jobDictionary[job]}`
//   }
// }
// const developerQuerstion = answer('developer');
// console.log(developerQuerstion('Roman'));

// const teaherQuestion = answer('teacher');
// console.log(teaherQuestion('Roman'))

// const teaherQuestion2 = answer('ss');
// console.log(teaherQuestion2('Romcccan'))

// function firstFunc(arr, fn) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(fn(arr[i]));
//   }
//   return `New value: ${result.join('')}`;
// }

// function handler1(el) {
//   let result = el[0].toUpperCase();
//   let result2 = el.replace(el[0], result);
//   return result2;
// }

// function handler2(el) {
//   return `${el * 10)+', '}`;
// }

// console.log(firstFunc(["my", "name", "is", "Trinity"], handler1));

// console.log(firstFunc([10, 20, 30], handler2) )

// function handler3(el) {
//   return `${el.name} is ${el.age}, `
// }

// console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

// function handler4(el) {
//   let result = `${el.split('').reverse().join('')}, `;
//   return result;
// }

// console.log(firstFunc(['abs', '123'], handler4));

// let arr = [1, 2, 3, 4, 5, 3, 2, 21, 4, 5, 3, 2, 23, 33, 3721];

// function every(arr, fn) {
//   let result = [];

//   for (let j = 0; j < arguments.length; j++) {
//     if(!Array.isArray(arguments[0]) && typeof arguments[1] !== 'function') {
//       console.error('Not array');
//       console.log(arguments[j])
//     }
//   }

//   return result;
// }

// function handler1(el) {
//   return el;
// }

// console.log(every(arr, handler1));

// function getThis() {
//   console.log(this)
// }

// getThis()

// ########****************************########
// ########    this     ########
// ########****************************########

// function getPrice(currency = '$') {
//   console.log(currency + this.price);
//   return this;
// }

// function getName() {
//   console.log(this.name);
//   return this;
// }

// const product1 = {
//   name: "Intel",
//   price: 100,
//   getPrice,
//   getName,
//   info: {
//     information: ["2.3ghz"],
//     getInfo: function () {
//       console.log(this);
//     },
//   },
// };

// product1.getPrice();
// product1.getName();
// product1.info.getInfo();

// getPrice();

// const product2 = {
//   name: "AMD",
//   price: 50,
//   getPrice,
// };

// product2.getPrice();

// product2.getName = product1.getName;
// product2.getName();

// let str = "Hello world";
// const reverseString = str.split("").reverse().join("");
// console.log(reverseString);

// const prod3 = {
//   name: "ARM",
//   price: 157,
//   // getName,
//   getPrice,
// };

// // prod3.getName().getPrice()
// getPrice.call(prod3)

// getName.apply(prod3)

// const getPriceBind = prod3.getPrice.bind(prod3);

// setTimeout(getPriceBind, 1000)

// ########****************************########
// ########    arrow functions      ########
// ########****************************########

const plus = (x = 0, y = 0) => x + y;
console.log(plus());

const withOutArgs = () => console.log("Hello world");
const singleArgs = x => x * 2;
console.log(singleArgs(2));
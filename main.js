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

// const getPriceBind = prMath.random().toString(36).substr(2, 9)

// ########****************************########
// ########    arrow functions      ########
// ########****************************########

// const plus = (x = 0, y = 0) => x + y;
// console.log(plus());

// const withOutArgs = () => console.log("Hello world");
// const singleArgs = (x) => x * 2;
// console.log(singleArgs(2));
// const moreActtions = (a, b) => {
//   a *= 2;
//   b *= 3;
//   return a + b;
// };

// console.log(moreActtions(2, 3));

// const returnObj = (str = "") => ({ value: str, length: str.length });

// console.log(returnObj("Hello world"));

// const testObject = {
//   age: 30,
//   getFirstName2() {
//     return console.log(this);
//   },
//   getAgeArrow: null,
//   getAge() {
//     console.log((this.getAgeArrow = () => console.log(this)));
//   },
// };

// testObject.getFirstName2();
// testObject.getAge();
// testObject.getAgeArrow()

// ########****************************########
// ########    array methods      ########
// ########****************************########

// forEach ничего не возвращает мутируя массив
// filter
// map возвращает новый массив
// reduce формируем структуры из массива сделать обьект
// some - boolean есть ли хотябы один елемент удовлятворяя условие
// every
// sort
// find

let users = [
  {
    id: Math.random().toString(36).substr(2, 9),
    index: 0,
    isActive: false,
    balance: 2397.64,
    age: 39,
    name: "Lucie Finley",
    gender: "female",
    company: "ZOXY",
    email: "lucie@gmail.com",
    phone: "+1 (842) 522-1243",
    registered: "2015-0214T11:45:27 -02:00",
  },

  {
    id: Math.random().toString(36).substr(2, 9),
    index: 1,
    isActive: true,
    balance: 1393.64,
    age: 33,
    name: "Woodvart Grims",
    gender: "male",
    company: "FORTEAN",
    email: "lucie@gmail.com",
    phone: "+1 (960) 012-3328",
    registered: "2015-0214T11:45:27 -02:00",
  },

  {
    id: Math.random().toString(36).substr(2, 9),
    index: 2,
    isActive: true,
    balance: 1699.99,
    age: 25,
    name: "Robinson Coleman",
    gender: "male",
    company: "GENNOM",
    email: "lucie@gmail.com",
    phone: "+1 (852) 542-3113",
    registered: "2019-0214T11:45:27 -02:00",
  },

  {
    id: Math.random().toString(36).substr(2, 9),
    index: 3,
    isActive: true,
    balance: 1297.1,
    age: 18,
    name: "Casandra Stout",
    gender: "female",
    company: "ANACHO",
    email: "casandra@gmail.com",
    phone: "+1 (929) 465-1111",
    registered: "2020-0214T11:45:27 -02:00",
  },

  {
    id: Math.random().toString(36).substr(2, 9),
    index: 4,
    isActive: true,
    balance: 1500,
    age: 25,
    name: "Alex Grown",
    gender: "male",
    company: "Convidera",
    email: "alex@gmail.com",
    phone: "+1 (852) 542-3113",
    registered: "2021-0214T11:45:27 -02:00",
  },

  {
    id: Math.random().toString(36).substr(2, 9),
    index: 5,
    isActive: false,
    balance: 2165.48,
    age: 20,
    name: "Valencia Carridano",
    gender: "male",
    company: "XEREX",
    email: "valencia@gmail.com",
    phone: "+1 (988) 522-1243",
    registered: "2014-0214T11:45:27 -02:00",
  },
];

// forEach
// user.forEach((user, i, arr) => {
//   console.log(user, i, arr);
//   return user.name + '!'
// });

// filter вернет новый массив
// let less30 = user.filter((user) => user.age < 30)
// console.log(less30);
// let activeUsers = user.filter(user => user.isActive)
// console.log(activeUsers);

//map создает новый массив из колбека

// let usersName = users.map(user => ({name: user.name, age: user.age}))
// console.log(usersName);

// reduce
// let totalBalance = users.reduce((acc, element) => {
//   acc += element.balance;
//   return acc;
// }, 0)

// console.log(totalBalance);
// let usersObject = users.reduce((acc, user) => {
//   acc[user.id] = user;
//   return acc;
// }, {})

// console.log(usersObject);

//some
// const isMale = users.every(user => user.age >= 18)
// console.log(isMale);

// find
// const user = users.find(user => user.name === 'Valencia Carridano')
// console.log(user);

// sort

// const strArr = ['Roman', 'Denis', 'Bill', 'Anna']
// strArr.sort()
// const numArr = [10, 9, 7, 44, 32];
// users.sort((prevUser, nextUser) => prevUser.age - nextUser.age)
// console.log(strArr);
// console.log(users);

// ########****************************########
// ########    closure      ########
// ########****************************########

// function getFullName(firstName, lastName) {
//   return function() {
//     return `${firstName} ${lastName}`
//   }
// }

// let getParam = getFullName('Roman', 'Matsypula')
// console.log(getParam());

// function updateValue(val) {
//   let x = val;
//   return function(num){
//     return x += num;
//   }
// }

// let result = updateValue(10);
// console.log(result(3));

// function checkCred() {
//   const login = "test";
//   const password = "somePassword";

//   return {
//     checkLogin(value) {
//       return login === value;
//     },

//     checkPassword(value) {
//       return password === value;
//     },
//   };
// }

// ########****************************########
// ########    methods Objects      ########
// ########****************************########

// Object.assign() делает только поверхносное копирование без вложенных обьектов

// let obj1 = {
//   name: "Roman",
//   age: 27,
//   info: {
//     skills: ["html", "css"],
//   },
// };

// let obj2 = {
//   name: "Ivan",
//   age: 20,
// };

// let newObj = Object.assign(obj1, obj2);
// newObj = Object.assign({}, obj1)
// let objJson = JSON.stringify(obj1);
// newObj = JSON.parse(objJson)

// console.log(newObj);

// console.log(newObj === obj1);
// console.log(obj1.info === newObj.info)

// let keys = Object.keys(obj1)
// let values = Object.values(obj1)
// let entries = Object.entries(obj1)
// let fromEntries = Object.fromEntries(entries)
// console.log(keys)
// console.log(values)
// console.log(entries)
// console.log(fromEntries)

// ########****************************########
// ########    destructurization      ########
// ########****************************########

// let user = {
//   firstName: "Roman",
//   lastName: "Matsypula",
//   age: 27,
//   info: {
//     work: "easy code",
//     skills: ["html", "css"],
//   },
// };

// let { firstName: name, lastName, age: years = 30 } = user;
// const {
//   info: { work, skills },
// } = user;

// console.log(name, lastName, years);
// console.log(work, skills);

// const colors = ["white", "black", "red", "#dsdf"];
// const [w, b, red, green = "green"] = colors;

// const names = ["Denis", "Ivan", "Roman"];

// const [name1, ...otherNames] = names;

// console.log(name1, otherNames); // rest

// let str = {...otherNames}

// const [...newNames] = names; // rest
// const newNames2 = [...names]; // spred

// console.log(...newNames2);

// const [den, , r] = names;

// console.log(w, b, red, green);
// console.log(den, r);

// let nestedArr = ["hello world", ["key", "value"]];

// const [, [k, value]] = nestedArr

// console.log(k, value);

// let user = {
//   firstName: "Roman",
//   lastName: "Matsypula",
//   age: 27,
//   info: {
//     work: "easy code",
//     skills: ["html", "css"],
//   },
// };

// const names = ["Denis", "Ivan", "Roman"];
// const colors = ["orange", "white", "black"];

// const colorNames = [...colors, ...names];

// let newArr = names.concat(colors);

// console.log(colorNames);

// let newUser = { ...user, age: 22 };

// const {
//   info: { skills: [html, css] },
// } = user;

// console.log(html, css);

// function myPerson({
//   lastName = "default lastName",
//   firstName = "default firstName",
//   info: { skills: [html, css] } = {},
// } = {}) {
//   console.log(lastName, firstName, html, css);
// }

// myPerson(newUser);

// function foo(x, y, ...others) {
//   console.log(arguments);
//   console.log(Array.from(arguments));
//   console.log([].slice.call(arguments));
//   const [...args] = arguments;
//   console.log(args);
//   console.log(others);
// }

// foo(1, 2, 5, 4, 2);

// const numbers = [11,2,3,4,5]

// function foo2 (x, y) {
//   console.log(x, y);

// }

// foo2(...numbers)

// let user = {
//   company: "Convidera",
//   year: 2019,
//   firstName: "Roman",
//   lastName: "Matsypula",
//   get job() {
//     return `Roman работал в компании ${this.company} в ${this.year} году`;
//   },
//   get age() {
//     return this.year;
//   },
//   set age(value) {
//     this.year = value;
//   },
// };

// Object.defineProperty(car, "age", {
//   // configurable: false,
//   // enumerable: false
//   // writable: false,
//   get: function() {
//     return `Машина выпущена в ${this.year}`;
//   },
// });

// ########****************************########
// ########    work with attributes      ########
// ########****************************########

// let str = 'Hello world';
// console.dir(String)

// const strObj = new String('Hello world')
// console.log(strObj);

// const link = document.querySelector(".link");
// console.log(link);

// const div = document.querySelector(".content");
// div.classList.add('article', 'custom')
// console.log(div.classList);
// let hasClass = div.classList.contains('article')
// console.log(hasClass);
// div.classList.toggle('RM')
// console.log(div.className);
// console.log(link.href);
// div.setAttribute('data-scroll', '#header')
// // console.log(div.getAttribute('data-scroll'));
// // console.log(div.removeAttribute('data-scroll'))
// div.dataset.scroll = 'Roman Myhailovich'
// console.log(div.dataset.scroll);
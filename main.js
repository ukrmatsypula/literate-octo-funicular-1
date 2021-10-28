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

// numbers
console.log(2021);
console.log(20 * "hello");
console.log(1 / 0);
// strings
console.log("Hello", "Hello", `Hello`);
// boolean
console.log(true, false);
// null
console.log(null); //имеет единственное значение
// undefined
console.log(undefined); // также единственное значание

// Обьекты
console.log({ name: "Denis", age: 30 });
// преобразование в типы данных
let value;
value = String(10);
value = String(10 + 40);
value = (40).toString();
value = 30 + '';
value = 30 - 'sad'; // NaN
value = true;
value = String([1, 2, 3]); // array to string
value = String({ name: "Denis" }); // object to string
value = 30 - '5' // number 25
value = true + 10; // 11
value = true + '10'
value = false + undefined // NaN
//String to number
value = Number('23') // NaN
value = Number(true) // 1
value = Number(null) // 0
value = Number('null') // NaN
value = Number([1, 2, 3]) // NaN


console.log(value);
console.log(typeof value);

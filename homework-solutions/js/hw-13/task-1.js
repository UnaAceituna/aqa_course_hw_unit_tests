"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('hello')1. Объявите переменные для каждого из следующих типов данных с явным указанием типа после символв "двоеточие":
// - Число: переменная num1, значение 42.
const num1 = 42;
// - Строка: переменная str, значение "Hello, TypeScript!".
const str = "Hello, TypeScript!";
// - Булево: переменная isComplete, значение true.
const isComplete = true;
// - Массив чисел: переменная numbers, значения [1, 2, 3, 4, 5].
const numbers = [1, 2, 3, 4, 5];
// - Массив строк: переменная cities, значения ["Minsk", "Warsaw", "London"].
const cities = ["Minsk", "Warsaw", "London"];
// - Объект: переменная person, объект с полями name: "Alice", age: 30, city: "Minsk".
const person = {
    name: "Alice",
    age: 30,
    city: "Minsk"
};
// 6. Создайте функцию calculateDiscount, которая принимает объект типа DiscountedProduct и возвращает итоговую цену с учетом скидки. 
// Затипизировать явно и входные и выходные данные. Используйте следующие данные:
const product = {
    id: 1,
    name: "Laptop",
    price: 1000,
    discount: 10
};
function calculateDiscount(product) {
    const finallyPrice = product.price - (product.price * product.discount) / 100;
    return finallyPrice;
}
console.log(calculateDiscount(product)); // Ожидается: 900
//# sourceMappingURL=task-1.js.map
"use strict";
let num = 123456;
let text = "Hello World";
console.log("This is the number : " + num);
console.log(typeof num);
console.log(typeof text);
function math(a, cba) {
    return cba(a);
}
console.log("the result of sum: " +
    math(new Array(10, 20, 30, 40), (a) => {
        let sum = 0;
        a.forEach((value) => (sum += value));
        return sum;
    }));
console.log("the result of multiply: " +
    math([10, 20, 30, 40, 50, 60], (a) => {
        let mul = 1;
        a.forEach((value) => (mul *= value));
        return mul;
    }));
if (Object instanceof String) {
    console.log("text is a string");
}
const me = {
    name: "John Doe",
};
const me2 = {
    name: "Johnson",
    age: 30,
    isMarried: true,
};
console.log("Me", me2);
let fruits = ["apple", "banana", "orange"];
let vegetables = ["carrot", "spei", "broccoli"];
console.log(typeof fruits);
console.log(typeof vegetables);

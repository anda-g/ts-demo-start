let num: number = 123_456;
let text: string = "Hello World";
console.log("This is the number : " + num);
console.log(typeof num);
console.log(typeof text);
function math(a: Array<number>, cba: (a: Array<number>) => number) {
  return cba(a);
}

console.log(
  "the result of sum: " +
    math(new Array(10, 20, 30, 40), (a) => {
      let sum: number = 0;
      a.forEach((value) => (sum += value));
      return sum;
    })
);

console.log(
  "the result of multiply: " +
    math([10, 20, 30, 40, 50, 60], (a) => {
      let mul: number = 1;
      a.forEach((value) => (mul *= value));
      return mul;
    })
);
if (Object instanceof String) {
  console.log("text is a string");
}

interface Person {
  name?: string;
  age?: number;
  isMarried?: boolean;
}

const me: Person = {
  name: "John Doe",
};

const me2: Required<Person> = {
  name: "Johnson",
  age: 30,
  isMarried: true,
};

console.log("Me", me2);

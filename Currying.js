//currying using bind method
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplybytwo = multiply.bind(this, 2, 3);
multiplybytwo(5);

let multiplybythree = multiply.bind(this, 3);
multiplybythree(5);

//currying using closures

let multi = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
let multifour = multi(4);
multifour(5);

let multifive = multi(5);
multifive(5);


// Currying is the process of taking a function with multiple arguments and
// turning it into a sequence of functions each with only a single argument.
// Currying is named after a mathematician Haskell Curry. By applying
// currying, a n-ary function turns it into a unary function.
// 19Let’s take an example of n-ary function and how it turns into a currying
// function,
// const multiArgFunction = (a, b, c) => a + b + c;
// console.log(multiArgFunction(1, 2, 3)); // 6
// const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
// curryUnaryFunction(1); // returns a function: b => c => 1 + b + c
// curryUnaryFunction(1)(2); // returns a function: c => 3 + c
// curryUnaryFunction(1)(2)(3); // returns the number 6
// Curried functions are great to improve code reusability and functional
// composition.
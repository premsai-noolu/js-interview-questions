/* The bind() method creates a new function, when invoked, has the this sets to a provided value.
The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript */


let name1 = {
  firstName: "premsai",
  lastName: "Noolu",
};

let printfullName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      hometown +
      " " +
      state +
      " " +
      country
  );
};
let printmyname = printfullName.bind(name1, "Vizag", "Ap");
console.log(printmyname);
printmyname("Ind");

//polyfill for bind method
Function.prototype.mybind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printmyname1 = printfullName.mybind(name1, "Vizag", "Ap");
console.log(printmyname1);
printmyname1();

printmyname1("India");

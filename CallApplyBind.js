/*All these methods are user for method/functions borrowing/sharing.
1. call method is used to call the function with the given this value and argument can be passed individually.
2. apply method is similar to call method, the only difference is that instead of passing argument individually, will pass the argument in a list/array.
3. bind method is similar to call method. It is also used to override this value, but the difference is it will not invoke the function instantly but return a function with attached this and argument which can be called later.
*/


let name1 = {
  firstName: "premsai",
  lastName: "Noolu",
};

let printfullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};

let name2 = {
  firstName: "Anil Kumar",
  lastName: "Noolu",
};

//call
printfullName.call(name1, "Vizag", "Ap");
printfullName.call(name2, "Rjmnundry", "Ap");
//Apply
printfullName.apply(name1, ["kakinada", "Ap"]);

//bind
let printmyname = printfullName.bind(name2, "amlapuram", "AP");
console.log(printmyname);
printmyname();

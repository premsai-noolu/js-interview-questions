/*
inheritance in JS => When an object trying to access variables and properties of another object

prototype is an Object that get attach to function/method/object and this object has some hidden properties

Whenever we create object/ function/ methods/ array/ variable , these all are attached with some hidden properties, which we call prototype

 _proto_ is reference to prototype ( or it points towards prototype ), if we want to access prototype, we do _proto_

prototype object has a prototype of its own, and so on until an object is reached with null as its prototype,  this is called prototype chaining
*/
let arr = ["srinu", "radha"];
const obj = {
  name: "prem",
  city: "Vizag",
  userdetails: function () {
    console.log(this.name + " " + this.city + " " + this.age);
  },
};

const obj2 = {
  name: "Anil",
  age: 23,
};

const obj3 = {
  name: "lux",
};

obj2.__proto__ = obj;
obj3.__proto__ = obj2;

obj.userdetails();

obj2.userdetails();

obj3.userdetails();

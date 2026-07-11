let sum = function (a) {
    return function (b){
        if(b) {
            return sum(a+b)
        }
        return a
        // return b?sum(a+b): a                     Using ternary operator condition
    }
}

console.log(sum(1)(2)(3)(4)(5)(6)())

let sum1 = (a) => (b) => b?sum(a+b): a

console.log(sum1(1)(2)(3)(4)(5)(6)(7)())
/*Debouncing is a programming technique used to limit the rate at which a function is executed.

Example: Imagine a search bar where a function fetches data and updates the frontend on each keypress. 
We don't want this function to be invoked for every single keystroke. Instead, we want it to trigger only after the user stops typing for at least 300 milliseconds. 
Debouncing achieves this by waiting for a pause in the user input before executing the function, reducing unnecessary API calls and improving performance.
*/

let counter = 0;
function getData() {
  console.log("fetching Data.....", counter++);
}

function doSomemagic(fn, d) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
}

const betterfunction = doSomemagic(getData, 1000);

/*Capturing phase – the event goes down to the element.
Target phase – the event reached the target element.
Bubbling phase – the event bubbles up from the element.

elem.addEventListener( event, callback,  capture)
If capture is false (default), then the handler is set on the bubbling phase.
If capture is true, then the handler is set on the capturing phase.

// if there are some true and false then the event first follows capturing and after it follows bubbling.
event.stopPropagation() it stops the event propagation
*/

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parent Clicked");
    e.stopPropagation();
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child Clicked");
  },
  true
);

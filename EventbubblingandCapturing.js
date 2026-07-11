/*Capturing phase – the event goes down to the element.
Target phase – the event reached the target element.
Bubbling phase – the event bubbles up from the element.

elem.addEventListener( event, callback,  capture)
If capture is false (default), then the handler is set on the bubbling phase.
If capture is true, then the handler is set on the capturing phase.

// if there are some true and false then the event first follows capturing and after it follows bubbling.
event.stopPropagation() it stops the event propagation
*/

//  Note : Always Capturing Phase is executed first
//                  Then Bubbling Phase
//          means
//                  Event propagation always starts from
//                  Capturing Phase and then move  to Bubbling Phase

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked");
  },
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent Clicked");
  },
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child Clicked");
  },
  true
);

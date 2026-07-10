document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e);
  console.log("category clicked");
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.id;
  }
});

document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

/*

📘 Concept Notes: Event Delegation (JavaScript)
🔹 1. What is Event Delegation?

👉 Event Delegation is a technique where:

Instead of adding event listeners to multiple child elements
You add a single event listener to a parent element

📌 It works because of event bubbling (events move from child → parent)

🔹 2. Why Do We Need Event Delegation?

❌ Without Delegation

1000 elements → 1000 event listeners 😬
High memory usage
Poor performance

✅ With Delegation
document.querySelector("ul").addEventListener("click", (e) => {
  console.log("Item clicked", e.target);
});

👉 Only ONE listener handles all child elements

🔹 3. How It Works (Core Idea)
🔄 Event Flow:
Click happens on child (li)
Event bubbles up to parent (ul)
Parent handles the event

👉 This is possible because of event bubbling mechanism

🔹 6. Benefits of Event Delegation
✅ Performance
Fewer event listeners
Less memory usage
✅ Works for Dynamic Elements
Handles elements added later
✅ Cleaner Code
Centralized event handling

🔹 7. Limitations
❌ Not all events bubble
Example:
blur
focus
❌ Need filtering logic
Must check event.target carefully

*/

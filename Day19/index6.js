// NOT PART OF VIDEO BUT IT DEMONSTRATE TARGET CAN TARGET INDIVIDUAL VALUE
// const listItems = document.querySelectorAll("li.list-element");

// listItems.forEach((listItem) => {
//     listItem.addEventListener("click", function (event) {
//         console.log(event.target.innerText);
//     })
// })


// EVENT BUBBLING, CAPTURING, DELEGATION
console.log("Event Bubbling, Capturing and Delegation");


document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked")
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("parent clicked")
});

document.getElementById("child").addEventListener("click", () => {
    console.log("child clicked")
});

// CAPTURING
// In event capturing, the event flows from the outmost ancestor down to the target element.
// I happens before the actual target handles the event.

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent captured")
}, true);

document.getElementById("parent").addEventListener("click", () => {
    console.log("parent captured")
}, true);

document.getElementById("child").addEventListener("click", () => {
    console.log("child captured")
}, true);
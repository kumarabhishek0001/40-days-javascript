// event object

const searchElement = document.getElementById("search-id");

// the event object is imlicit object that get passed by js to all the handler event
function handleChange(event) {
    console.log(event);

    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(event.type);

    // search this
    console.log(event.currentTarget);

    // this refers to the element on which the event listern is added
    console.log(this)

}

searchElement.addEventListener("change", handleChange);
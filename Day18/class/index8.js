const mainDivElement = document.getElementById("main-id");
// console.log(mainDivElement.className);


// mainDivElement.className = "secondary-class";
// console.log(mainDivElement.className);


// ------------ Class list -------------
console.log("List: ", mainDivElement.classList);
mainDivElement.classList.add("test");
mainDivElement.classList.remove("layout-class");

mainDivElement.classList.replace("main-class", "secondary-class")

console.log("does it have test: ", mainDivElement.classList.contains("test"));

// .toggle  -> if class is there it remove it and if it doesn't it addes it';

mainDivElement.classList.toggle("test")
// mainDivElement.classList.toggle("test")
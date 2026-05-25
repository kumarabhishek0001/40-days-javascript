// create, read, update and delete attributes
const imgElem = document.querySelector("img");

console.log(imgElem);

imgElem.setAttribute("src", "https://picsum.photos/id/237/200/300");
imgElem.setAttribute("alt", "Dog image");
imgElem.setAttribute("height", "200px");
imgElem.setAttribute("width", "200px");


imgElem.removeAttribute("height");

imgElem.hasAttribute("src");
imgElem.hasAttribute("height");
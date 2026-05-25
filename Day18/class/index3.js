// modifying the content 

const pElm = document.querySelector("p");
pElm.innerHTML = "<u>Hello how</u> are you doing?";

// inner html -> you can add html tags between the qoutes
// security -> xss(cross site scripting)
// inner text -> cannot do this.

const div = document.querySelector('div');

console.log("Inner text: ", div.innerText);
// css visibilty is taken in account
console.log("text content: ", div.textContent);
// css visibilty is not taken in account
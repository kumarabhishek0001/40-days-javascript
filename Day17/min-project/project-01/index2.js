// normal highlighter
function highlightText() {
    console.log("About to highlight message");

    const pinfoElms = document.querySelectorAll("p.info");

    pinfoElms.forEach((elem) => {
        elem.style.backgroundColor = "yellow";
    })
}
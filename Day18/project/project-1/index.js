function toggleVisibility() {
    const button = document.getElementById("toggle-visibility");
    const inputBox = document.getElementById("input-box");



    if (button.innerText === "Show") {

        button.innerText = "Hide";
        inputBox.setAttribute("type", "text")

    } else {
        button.innerText = "Show";
        inputBox.setAttribute("type", "password")
    }
}
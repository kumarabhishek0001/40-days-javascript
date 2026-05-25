// 
function filterList() {
    const inputElem = document.getElementById('searchInput');
    const input = inputElem.value;
    // console.log(input);

    const items = document.querySelectorAll('ul#itemList li');
    // console.log(items);

    items.forEach((item) => {
        item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none"
    })
}
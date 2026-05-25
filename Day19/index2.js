const countButtonElem = document.getElementById("countBtn");
let counter = 1;

const handleCount = function () {
    console.log("counter", counter);
    counter++;

    // if (counter === 2) {
    //     countButtonElem.removeEventListener("click", handleCount)
    // }
}

const greetMe = function () {
    console.log("Thank you!!")
}

countButtonElem.addEventListener("click", handleCount)
countButtonElem.addEventListener("click", greetMe)

countButtonElem.removeEventListener("click", handleCount)


// DON'T DEFINE FUNCTION INSIDE ADD EVENT LISTENR
// FUNCTION IN ADD AND REMOVE THEY JUST BOTH ARE DIFFRENT INSTACES
// SO AFTER REMOVE THE ADD EVEN LISTENER STILL COUNTINOUS SINCE BOTH FUNCTION ARE DIFFERNT
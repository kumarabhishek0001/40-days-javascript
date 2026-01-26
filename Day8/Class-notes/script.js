console.log("Inside global execution context")

var a = 5;

function testMe(){

    console.log("Inside testMe Execution context");

    var b = 10;
    var user = {
        name: "tapas",
        country : "India"
    };

    function testAgain(){
        console.log("Inside testAgain Execution Context");
        console.log("Exiting testAgain Execution Context");
    }

    testAgain();
    console.log("Exiting testMe Execution context");

}

testMe();
console.log("Exiting Global Execution Contest")
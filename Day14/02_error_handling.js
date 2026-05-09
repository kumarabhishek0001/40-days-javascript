// real-world example

function divideNumber(num1, num2){
    try {
        if(num2 == 0){
            throw new Error("Cannot divide a number by zero", {cause: `Num2: ${num2}`})
        }

        const result = num1/num2; 
        console.log(`result: ${result}`)
    } catch (error) {
        console.error(error);
    }
}


divideNumber(10,0)


// example-2

const person = {
    name: 'Tapas',
    address: {
        city: "Banglore"
    }
}

function getPostalCode(user){
    try{
        if(!user.address.pincode){
            throw new Error("Cannot access the property")
        }
        console.log("Postal Code: ", user.address.pincode)
    }catch(error){
        console.error(error)
    }
}

getPostalCode(person)



function ValidationErro(message){
    this.name = "Validation Error"
    this.message = message
    this.stack = new Error().stack
}

ValidationErro.prototype = Object.create(Error.prototype)

function validateSeniorCitizen(age){
    if(age<60){
        throw new ValidationErro("Your are not a senior citizen");
    }
    console.log("You are a senior citizen");
}

try{
    validateSeniorCitizen(40)
}
catch(error){
    console.error(error.name);
    console.error(error.message);
}
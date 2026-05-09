function validateForm(formData){
    try{
        if(!formData.username) throw new Error("Cannot access property username");
        if(!formData.email.includes("@")) throw new Error("Invalid Email syntax");

        console.log("Form Validated", formData)
    }

    catch(error){
        console.error(error)
        throw error //re-throw
    }
}

const formData1 = {
    user_name: 'jj123',
    email: "test@jj.com"
}

try{
    validateForm(formData1)
}catch(err){
    console.error(err)
}
// example:1 try-cathc with error
try{
    console.log("Starting execution");
    console.log(abc);
    console.log("ending execution");

    
}catch(error){
    console.log("Error while running the program", error);
}


// example:2 try-cathc with error
try{
    console.log("Starting execution");
    console.log(abc);
    console.log("ending execution");

    
}catch(error){
    console.log("Error while running the program", error);
}

const err = new Error("This is my error", {cause: "my mistake"});
throw err
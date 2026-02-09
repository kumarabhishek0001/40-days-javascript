let studentProfile1 = {
    name: "abhishek",
    department: "engineering",
    address: {
        state: "new delhi",
        district: "north west",
        pincode: 110085
    }
}

const studentProfile2 = JSON.parse(JSON.stringify(studentProfile1));
studentProfile2['address']['state'] = 'punjab';

console.log(studentProfile2);
console.log(studentProfile1);

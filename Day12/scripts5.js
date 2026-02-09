let studentProfile1 = {
    name: "abhishek",
    department: "engineering",
    address: {
        state: "new delhi",
        district: "north west",
        pincode: 110085
    }
}

// deep cloning

const studentProfile2 = structuredClone(studentProfile1);
console.log(studentProfile2);

// change in profile2
studentProfile2['address']['state'] = 'Punjab'

console.log(studentProfile2);
console.log(studentProfile1);

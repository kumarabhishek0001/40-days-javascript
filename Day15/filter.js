const customers = [
    {
        id: 1,
        f_name: 'Abby',
        l_name: 'Thomas',
        gender: 'Male',
        married: true,
        age: 32,
        expense: 500,
        purchased: ['shampoo', 'toys', 'book']
    },

    {
        id: 2,
        f_name: 'Sarah',
        l_name: 'Johnson',
        gender: 'Female',
        married: false,
        age: 27,
        expense: 1200,
        purchased: ['laptop', 'bag', 'mouse']
    },

    {
        id: 3,
        f_name: 'Michael',
        l_name: 'Brown',
        gender: 'Male',
        married: true,
        age: 45,
        expense: 800,
        purchased: ['phone', 'charger']
    },

    {
        id: 4,
        f_name: 'Emma',
        l_name: 'Wilson',
        gender: 'Female',
        married: false,
        age: 22,
        expense: 350,
        purchased: ['dress', 'makeup']
    },

    {
        id: 5,
        f_name: 'David',
        l_name: 'Miller',
        gender: 'Male',
        married: true,
        age: 38,
        expense: 2200,
        purchased: ['tv', 'speaker', 'remote']
    },

    {
        id: 6,
        f_name: 'Sophia',
        l_name: 'Davis',
        gender: 'Female',
        married: true,
        age: 30,
        expense: 670,
        purchased: ['perfume', 'watch']
    },

    {
        id: 7,
        f_name: 'James',
        l_name: 'Anderson',
        gender: 'Male',
        married: false,
        age: 89,
        expense: 940,
        purchased: ['keyboard', 'monitor']
    }
];

const seniorCustomer = customers.filter((customer) => customer.age >= 60);
console.log(seniorCustomer);





// get senior citizen
// age >= 60

// filter method syntax
// const newArray = customers.filter((element, index, array) => {
// Do something...
// })

// test function - TRUE -> element will be part of new array
// - FALSE -> element will not be part of new array


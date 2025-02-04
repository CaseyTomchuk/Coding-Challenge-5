// Task 1: Object Properties
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};
for (let key in customer) {
    console.log(`${key}: ${customer[key]}`) //for each key, the name of the key is listed alongside the data in it
};
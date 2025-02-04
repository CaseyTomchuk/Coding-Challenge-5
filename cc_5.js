// Task 1: Object Properties
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};
for (let key in customer) {
    console.log(`${key}: ${customer[key]}`) //for each key, the name of the key is listed alongside the data in it
};

// Task 2: Object Methods
let order = {
    orderID: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function() {
        console.log(this)
    }
};
order.displayOrder();
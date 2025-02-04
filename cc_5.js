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

// Task 3: Array Manipulation
let cartItems = ["lettuce, carrots, apples"];
cartItems.push("cheese");
cartItems.pop(); //removing the item just added
cartItems.unshift("milk");
cartItems.shift();
console.log(`Items in cart: ${cartItems}`);

// Task 4: Map Method
let prices = [100,200,300];
let discountPrices = prices.map(price => price * 0.9); // multiplying the number by 0.9 to take of 10%
console.log(`The discounted prices are: ${discountPrices}`);

// Task 5: Filter Method
let inventory = [10,12,0,14,20];
let filteredInv = inventory.filter(inv => inv > 0) // assigning any value greater than 0 to a new variable called filteredInv
console.log(`Inventory information: ${filteredInv}`);

// Task 6: Reduce Method
let sales = [500, 300, 200, 400];
let sum = sales.reduce((currentTotal, currentValue) => currentTotal + currentValue, 0); // The 0 value is added to avoid potential errors
console.log(`Total revenue: $${sum}`);

// Task 7: find() method
customers = ["Alice", "Bob", "Charlie", "David"];
customersFind = customers.find(customer => customer === "Charlie")
console.log(`Customer Search Results: ${customersFind}`);

// Task 8 Function Declaration
let amount = 1000;
let taxRate = 0.1; //10% tax rate
function calculateTax() {
    return (amount * taxRate)
}
console.log(`The base cost was $${amount} and $${calculateTax()} was paid in tax`);

// Task 9 Function expression
const applyDiscount = function (price, discount) {
    return price * discount;
  };
  
  console.log(applyDiscount(50, 0.80)); //Can plug in any combination of price/discount after applyDiscount()

  // Task 10: Arrow Functions
let purchase2 = 40;
let addPoints = (purchase2) => (purchase2 / 10); //simplifies the process so return is not necessary 
console.log(`Your added points after your $${purchase2} purchase is: ${addPoints(purchase2)}`);
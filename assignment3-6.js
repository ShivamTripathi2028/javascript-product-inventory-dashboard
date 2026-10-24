// Assignment 3: Conditional Logic

const score = 85;

// 1. Use if...else to evaluate the score
if (score >= 90) {
    console.log("Score: " + score);
    console.log("Performance: Excellent");
} else if (score >= 80) {
    console.log("Score: " + score);
    console.log("Performance: Very Good");
} else if (score >= 70) {
    console.log("Score: " + score);
    console.log("Performance: Good");
} else {
    console.log("Score: " + score);
    console.log("Performance: Needs Improvement");
}

// 2. Use switch to determine the letter grade
const grade = "B";

switch (grade) {
    case "A":
        console.log("Grade: A");
        break;
    case "B":
        console.log("Grade: B");
        break;
    case "C":
        console.log("Grade: C");
        break;
    case "D":
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}

// 3. Use ternary operator to display pass/fail status
const status = score >= 40 ? "Passed" : "Failed";
console.log("Status: " + status);



// Assignment 4: Loops

// 1. Use a for loop to print the multiplication table of 5
console.log("\nMultiplication Table of 5:");

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

// 2. Use while loop and break to find the first number greater than 10
// that is divisible by 6
console.log("\nFirst number greater than 10 divisible by 6:");

let number = 11;

while (number <= 100) {
    if (number > 10 && number % 6 === 0) {
        console.log(number);
        break;
    }
    number++;
}

// 3. Use do...while and continue to skip selected numbers
console.log("\nDo...while loop with continue:");

let count = 0;

do {
    count++;

    if (count === 3 || count === 5) {
        continue;
    }

    console.log(count);
} while (count < 7);



// Assignment 5: Functions and Scope


// 1. Standard function with default parameters
function calculateRectangleArea(length = 5, width = 4) {
    return length * width;
}

console.log(
    "Standard Function Area: " + calculateRectangleArea()
);

// 2. Arrow function with custom parameters
const calculateArea = (length, width) => {
    return length * width;
};

console.log(
    "Arrow Function Area: " + calculateArea(10, 3)
);

// 3. Demonstrate block scope
{
    let blockVar = "I am inside the block";
    console.log(blockVar);
}

// Accessing blockVar outside its block causes a ReferenceError.
// We use try...catch to demonstrate this safely.

try {
    console.log(blockVar);
} catch (error) {
    console.log("ReferenceError: blockVar is not defined");
}


// Assignment 6: Arrays, Objects, and Core Methods

// 1. Create an array of product objects

const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 },
    { name: "Monitor", price: 150 },
    { name: "Headphones", price: 60 }
];

// 2. Use forEach() to display all products
console.log("\nAll Products:");

products.forEach(function (product) {
    console.log(product.name + ": $" + product.price);
});

// 3. Use filter() to find products priced below $50
const affordableProducts = products.filter(function (product) {
    return product.price < 50;
});

console.log("\nProducts Under $50:");

affordableProducts.forEach(function (product) {
    console.log(product.name + ": $" + product.price);
});

// 4. Use map() to create formatted uppercase product strings
const formattedProducts = products.map(function (product) {
    return product.name.toUpperCase() + ": $" + product.price;
});

console.log("\nFormatted Product Report:");
console.log(formattedProducts);
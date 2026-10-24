// Assignment 2: Operators, Expressions, and Input Handling

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter bill amount: ", function (billInput) {
    rl.question("Enter tip percentage: ", function (tipInput) {
        const billAmount = Number(billInput);
        const tipPercentage = Number(tipInput);

        if (
            billInput.trim() === "" ||
            tipInput.trim() === "" ||
            !Number.isFinite(billAmount) ||
            !Number.isFinite(tipPercentage) ||
            billAmount < 0 ||
            tipPercentage < 0
        ) {
            console.log("Invalid input. Please enter valid non-negative numbers.");
        } else {
            const tipAmount = billAmount * tipPercentage / 100;
            const totalAmount = billAmount + tipAmount;

            console.log("\nSubtotal: $" + billAmount);
            console.log("Tip Percentage: " + tipPercentage + "%");
            console.log("Calculated Tip: $" + tipAmount);
            console.log("Total Amount to Pay: $" + totalAmount);
        }

        rl.close();
    });
});
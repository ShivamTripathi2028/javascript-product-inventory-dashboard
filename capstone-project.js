 // ==================================================
// CAPSTONE PROJECT
// Interactive Product Inventory & Analytics Dashboard
// ==================================================

// 1. Initial product inventory
const inventory = [
    { name: "Laptop", price: 800, category: "Premium" },
    { name: "Mouse", price: 25, category: "Budget" }
];

// 2. Function to assign product categories
function getCategory(price) {
    if (price < 50) {
        return "Budget";
    } else if (price >= 500) {
        return "Premium";
    } else {
        return "Standard";
    }
}

// 3. Function to calculate total inventory value
function calculateInventoryValue(products) {
    let total = 0;

    products.forEach(function (product) {
        total += product.price;
    });

    return total;
}

// 4. Arrow function for tax calculation
const calculateTax = (amount, taxRate = 10) => {
    return amount * taxRate / 100;
};

// 5. Function for discount calculation
function calculateDiscount(amount, discountRate = 5) {
    return amount * discountRate / 100;
}

// 6. Add a new product using input
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("======================================");
console.log(" PRODUCT INVENTORY & ANALYTICS");
console.log("======================================");

console.log("\nExisting Inventory:");

inventory.forEach(function (product) {
    console.log(
        product.name + " - $" + product.price +
        " (" + product.category + ")"
    );
});

rl.question("\nEnter new product name: ", function (nameInput) {
    rl.question("Enter product price: ", function (priceInput) {
        const productName = nameInput.trim();
        const productPrice = Number(priceInput);

        if (
            productName === "" ||
            priceInput.trim() === "" ||
            !Number.isFinite(productPrice) ||
            productPrice <= 0
        ) {
            console.log("\nInvalid product name or price.");
            console.log("Please enter a name and a positive price.");
            rl.close();
            return;
        }

        // 7. Add product and assign category
        const newProduct = {
            name: productName,
            price: productPrice,
            category: getCategory(productPrice)
        };

        inventory.push(newProduct);

        // 8. Use switch to display category information
        console.log("\nProduct added successfully!");

        switch (newProduct.category) {
            case "Budget":
                console.log("Category: Budget");
                break;
            case "Standard":
                console.log("Category: Standard");
                break;
            case "Premium":
                console.log("Category: Premium");
                break;
            default:
                console.log("Category: Unknown");
        }

        // 9. Display complete inventory
        console.log("\n========== COMPLETE INVENTORY ==========");

        inventory.forEach(function (product) {
            console.log(
                product.name.toUpperCase() +
                ": $" + product.price +
                " | Category: " + product.category
            );
        });

        // 10. Calculate inventory value
        const totalValue = calculateInventoryValue(inventory);

        console.log("\n========== INVENTORY ANALYTICS ==========");
        console.log("Total Inventory Value: $" + totalValue);

        // 11. Filter products below $200
        const affordableProducts = inventory.filter(function (product) {
            return product.price < 200;
        });

        console.log("\nAffordable Products Under $200:");

        affordableProducts.forEach(function (product) {
            console.log(product.name);
        });

        // 12. Map products into formatted report
        const formattedReport = inventory.map(function (product) {
            return product.name.toUpperCase() + ": $" + product.price;
        });

        console.log("\nFormatted Product Report:");
        console.log(formattedReport);

        // 13. Demonstrate tax and discount calculations
        const tax = calculateTax(totalValue, 10);
        const discount = calculateDiscount(totalValue, 5);

        console.log("\n========== FINANCIAL SUMMARY ==========");
        console.log("Tax at 10%: $" + tax);
        console.log("Discount at 5%: $" + discount);
        console.log("Value After Discount: $" + (totalValue - discount));

        // 14. Demonstrate while loop and break
        console.log("\nSearching for the first product priced above $100:");

        let index = 0;

        while (index < inventory.length) {
            if (inventory[index].price > 100) {
                console.log(inventory[index].name);
                break;
            }
            index++;
        }

        // 15. Demonstrate continue
        console.log("\nProducts priced at $50 or more:");

        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].price < 50) {
                continue;
            }

            console.log(inventory[i].name);
        }

        console.log("\n========== PROJECT COMPLETE ==========");

        rl.close();
    });
});
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Monitor", price: 150 }
];

const productForm = document.getElementById("productForm");
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const inventoryBody = document.getElementById("inventoryBody");
const affordableProducts = document.getElementById("affordableProducts");
const productReport = document.getElementById("productReport");
const formMessage = document.getElementById("formMessage");

function getCategory(price) {
    if (price < 50) {
        return "Budget";
    } else if (price >= 500) {
        return "Premium";
    } else {
        return "Standard";
    }
}

function formatPrice(price) {
    return "$" + price.toFixed(2);
}

function renderInventory() {
    inventoryBody.replaceChildren();
    affordableProducts.replaceChildren();
    productReport.replaceChildren();

    inventory.forEach(function (product) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = product.name;

        const categoryCell = document.createElement("td");
        const categoryBadge = document.createElement("span");
        const category = getCategory(product.price);

        categoryBadge.textContent = category;
        categoryBadge.className =
            "category-badge category-" + category.toLowerCase();

        categoryCell.appendChild(categoryBadge);

        const priceCell = document.createElement("td");
        priceCell.textContent = formatPrice(product.price);

        row.append(nameCell, categoryCell, priceCell);
        inventoryBody.appendChild(row);
    });

    const totalValue = inventory.reduce(function (total, product) {
        return total + product.price;
    }, 0);

    const affordable = inventory.filter(function (product) {
        return product.price < 200;
    });

    const report = inventory.map(function (product) {
        return product.name.toUpperCase() + ": " + formatPrice(product.price);
    });

    document.getElementById("totalProducts").textContent = inventory.length;
    document.getElementById("totalValue").textContent = formatPrice(totalValue);
    document.getElementById("affordableCount").textContent = affordable.length;
    document.getElementById("inventoryCount").textContent =
        inventory.length + (inventory.length === 1 ? " item" : " items");

    affordable.forEach(function (product) {
        const item = document.createElement("div");
        item.className = "affordable-item";

        const name = document.createElement("span");
        name.textContent = product.name;

        const price = document.createElement("strong");
        price.textContent = formatPrice(product.price);

        item.append(name, price);
        affordableProducts.appendChild(item);
    });

    report.forEach(function (line) {
        const item = document.createElement("li");
        item.textContent = line;
        productReport.appendChild(item);
    });

    const tax = totalValue * 0.10;
    const discount = totalValue * 0.05;

    document.getElementById("taxValue").textContent = formatPrice(tax);
    document.getElementById("discountValue").textContent =
        formatPrice(discount);
    document.getElementById("discountedValue").textContent =
        formatPrice(totalValue - discount);
}

productForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = productNameInput.value.trim();
    const price = Number(productPriceInput.value);

    if (name === "" || !Number.isFinite(price) || price <= 0) {
        formMessage.textContent =
            "Please enter a valid product name and price.";
        return;
    }

    inventory.push({
        name: name,
        price: price
    });

    renderInventory();

    formMessage.textContent = name + " added successfully!";

    productForm.reset();
    productNameInput.focus();
});

renderInventory();
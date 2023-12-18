document.addEventListener("DOMContentLoaded", function () {
    const itemNameInput = document.getElementById("item-name-input");
    const itemPriceInput = document.getElementById("item-price-input");
    const addButton = document.getElementById("add-button");
    const itemList = document.getElementById("item-list");
    const grandTotal = document.querySelector("[data-ns-test='grandTotal']");

    addButton.addEventListener("click", function () {
        const itemName = itemNameInput.value.trim();
        const itemPrice = parseFloat(itemPriceInput.value);

        // Check for invalid input
        if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
            alert("Please enter a valid item name and price.");
            return;
        }

        // Check if the list is empty before adding the first item
        if (itemList.rows.length === 1) {
            itemList.deleteRow(0); // Remove the initial empty row
        }

        // Create a new row in the table
        const newRow = itemList.insertRow();
        const nameCell = newRow.insertCell(0);
        const priceCell = newRow.insertCell(1);

        // Set data attributes for name and price
        nameCell.setAttribute("data-ns-test", "item-name");
        priceCell.setAttribute("data-ns-test", "item-price");

        // Populate the cells with data
        nameCell.textContent = itemName;
        priceCell.textContent = itemPrice.toFixed(2); // Display price with 2 decimal places

        // Clear input fields
        itemNameInput.value = "";
        itemPriceInput.value = "";

        // Calculate and update the grand total
        let total = 0;
        const priceCells = document.querySelectorAll("[data-ns-test='item-price']");
        priceCells.forEach((cell) => {
            total += parseFloat(cell.textContent);
        });
        grandTotal.textContent = total.toFixed(2); // Display total with 2 decimal places
    });
});

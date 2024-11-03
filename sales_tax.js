"use strict";

const $ = selector => document.querySelector(selector);

function processEntries() {
  // Gather user inputs
  const subtotalEntry = parseFloat($("#subtotal").value);

  const taxRateEntry = parseFloat($("#tax_rate").value);

  // Validate Subtotal Entry
  if (isNaN(subtotalEntry) || subtotalEntry <= 0 || subtotalEntry >= 10000) {
    alert("Subtotal must be > 0 and < 10000");
    $("#subtotal").focus();
    return;
  }

  // Validate Tax Rate Entry
  if (isNaN(taxRateEntry) || taxRateEntry <= 0 || taxRateEntry >= 12) {
    alert("Tax Rate must be > 0 and < 12");
    $("#tax_rate").focus();
    return;
  }

  // Calculate the sales tax and total
  const salesTax = subtotalEntry * (taxRateEntry / 100);
  const total = subtotalEntry + salesTax;

  // Display the sales tax and the total
  $("#sales_tax").value = salesTax.toFixed(2);
  $("#total").value = total.toFixed(2);

  // Move cursor back to Subtotal field
  $("#subtotal").focus();
}

function clearAllEntries() {
  // Clear all inputs
  $("#subtotal").value = "";
  $("#tax_rate").value = "";
  $("#sales_tax").value = "";
  $("#total").value = "";

  // Move cursor to subtotal field
  $("#subtotal").focus();
}

// A function to clear the field when the input is selected
function clearSelectedField(event) {
  event.target.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  // Attach event handlers to buttons
  $("#calculate").addEventListener("click", processEntries);
  $("#clear").addEventListener("click", clearAllEntries);

  // Clear fields when clicked
  $("#subtotal").addEventListener("click", clearSelectedField);
  $("#tax_rate").addEventListener("click", clearSelectedField);

  // Move cursor to Subtotal field on load
  $("#subtotal").focus();
});

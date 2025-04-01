document.addEventListener("DOMContentLoaded", function() {
    // Get the input fields and button
    const firstNumInput = document.getElementById("first_num");
    const secNumInput = document.getElementById("sec_num");
    const addResInput = document.getElementById("add_res");
    const subResInput = document.getElementById("sub_res");
    const mulResInput = document.getElementById("mul_res");
    const divResInput = document.getElementById("div_res");
    const form = document.querySelector("form");

    // Add event listener to the form
    form.addEventListener("submit", function(event) {
        // Prevent form submission
        event.preventDefault();

        // Get input values
        const firstNum = parseFloat(firstNumInput.value);
        const secNum = parseFloat(secNumInput.value);

        // Check if inputs are valid
        if (isNaN(firstNum) || isNaN(secNum)) {
            alert("Please enter valid numbers.");
            return;
        }

        // Perform calculations
        addResInput.value = firstNum + secNum;
        subResInput.value = firstNum - secNum;
        mulResInput.value = firstNum * secNum;
        divResInput.value = secNum !== 0 ? (firstNum / secNum).toFixed(2) : "Cannot divide by zero";
    });

    // Clear results when inputs are cleared
    form.addEventListener("reset", function() {
        addResInput.value = "";
        subResInput.value = "";
        mulResInput.value = "";
        divResInput.value = "";
    });
});

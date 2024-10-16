let StartFunc = () => {
    // Get form and input elements
    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalGrossAmountId = document.getElementById("GrossAmoutId");
    let jVarLocalReturnAmountId = document.getElementById("ReturnAmountId");

    // Add validation class to form
    jVarLocalForm.classList.add('was-validated');

    // Check form validity
    if (jVarLocalForm.checkValidity() === false) {
        return false;
    }

    // Convert input values to numbers for comparison
    let grossAmount = parseFloat(jVarLocalGrossAmountId.value);
    let returnAmount = parseFloat(jVarLocalReturnAmountId.value);

    // Validate the numeric values
    if (grossAmount < returnAmount) {
        console.log(`${grossAmount} < ${returnAmount}`);
        return false;
    }

    // All validations passed
    return true;
};

export { StartFunc };

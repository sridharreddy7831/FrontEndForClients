let StartFunc = () => {
    if ((jFCustomerNumber()) === false) {
        return false;
    };

    return true;
};
const jFCustomerNumber = () => {
    let jVarLocalSalesRef = document.getElementById('SalesRef');

    if (jVarLocalSalesRef.value === "") {
        jVarLocalSalesRef.classList.add("is-invalid");
        jVarLocalSalesRef.focus();
        return false;
    };

    if ((jVarLocalSalesRef.value === "") === false) {
        jVarLocalSalesRef.classList.remove("is-invalid");
        return true;
    };
    return true;
};

export { StartFunc }
const StartFunc = () => { 
    if ((jFCustomerNumber()) === false) {
        return false;
    };
    if ((jFCustomerName()) === false) {
        return false;
    };

    return true;
 };
 const jFCustomerNumber = () => {
    let jVarLocalCustomerNumber = document.getElementById('CustomerNumber');

    if (jVarLocalCustomerNumber.value === "") {
        jVarLocalCustomerNumber.classList.add("is-invalid");
        jVarLocalCustomerNumber.focus();
        return false;
    };
    if ((jVarLocalCustomerNumber.value.length === 10) === false) {
        document.getElementById("error-msg").innerHTML = "must be 10"
        jVarLocalCustomerNumber.classList.add("is-invalid");
        jVarLocalCustomerNumber.focus();
        return false;
    }
    if ((jVarLocalCustomerNumber.value === "") === false && (jVarLocalCustomerNumber.value.length === 10) === false) {
        jVarLocalCustomerNumber.classList.remove("is-invalid");
        return true;
    };
    return true;
};

const jFCustomerName = () => {
    let jVarLocalCustomerName = document.getElementById('CustomerName');

    if (jVarLocalCustomerName.value === "") {
        jVarLocalCustomerName.classList.add("is-invalid");
        jVarLocalCustomerName.focus();
        return false;
    };

    if ((jVarLocalCustomerName.value === "") === false) {
        jVarLocalCustomerName.classList.remove("is-invalid");
        return true;
    };
    return true;
};


export {StartFunc};
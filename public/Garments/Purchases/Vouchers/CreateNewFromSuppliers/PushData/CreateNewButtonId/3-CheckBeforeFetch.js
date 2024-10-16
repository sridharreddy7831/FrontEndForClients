let StartFunc = () => {
    if (jFLocalBillNumberId() === false) return false;

    return true;
};

let jFLocalBillNumberId = () => {
    let jVarLocalBillNumberId = document.getElementById("BillNumberId");
    let jVarLocalHtmlValue = jVarLocalBillNumberId.value;

    if (jVarLocalHtmlValue === "") {
        jVarLocalBillNumberId.classList.add("is-invalid");
        jVarLocalBillNumberId.focus();
        return false;
    } else {
        jVarLocalBillNumberId.classList.remove("is-invalid");
        jVarLocalBillNumberId.classList.add("is-valid");
    };

    return true;

};

export { StartFunc };
let StartFunc = () => {
    if ((jFCustomerName()) === false) {
        return false;
    };
   
    return true;
};
const jFCustomerName = () => {
    let jVarLocalBranchName = document.getElementById('CustomerName');

    if (jVarLocalBranchName.value === "") {
        jVarLocalBranchName.classList.add("is-invalid");
        jVarLocalBranchName.focus();
        return false;
    };
    if ((jVarLocalBranchName.value === "") === false ) {
        jVarLocalBranchName.classList.remove("is-invalid");
        return true;
    };
    return true;
};

export { StartFunc }
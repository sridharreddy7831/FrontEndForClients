let StartFunc = () => {
    if ((jFCustomerNumber()) === false) {
        return false;
    };
   
    return true;
};
const jFCustomerNumber = () => {
    let jVarLocalBranchName = document.getElementById('CustomerNumber');

    if (jVarLocalBranchName.value === "") {
        jVarLocalBranchName.classList.add("is-invalid");
        jVarLocalBranchName.focus();
        return false;
    };
    if ((jVarLocalBranchName.value.length === 10) === false) {
        document.getElementById("CustomerNumberClass").innerHTML = "must be 10"
        jVarLocalBranchName.classList.add("is-invalid");
        jVarLocalBranchName.focus();
        return false;
    };
    if ((jVarLocalBranchName.value === "") === false && (jVarLocalBranchName.value.length === 10) === false) {
        jVarLocalBranchName.classList.remove("is-invalid");
        return true;
    };
    return true;
};

export { StartFunc }
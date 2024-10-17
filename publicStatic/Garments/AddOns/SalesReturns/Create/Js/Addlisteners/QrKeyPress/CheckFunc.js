let StartFunc = () => {
    let jVarLocalForm = document.getElementById("AccountNameId");

    if (jVarLocalForm.value === "") {
        jVarLocalForm.classList.add('was-validated');
        return false;
    }

    return true;
};

export { StartFunc }
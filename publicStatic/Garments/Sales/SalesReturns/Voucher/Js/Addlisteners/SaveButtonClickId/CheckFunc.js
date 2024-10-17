let StartFunc = async () => {
    return await jFSalesRefCheck();
};



const jFSalesRefCheck = () => {
    let jVarLocalFactory = document.getElementById('SalesRef');

    if (jVarLocalFactory.value === "") {
        jVarLocalFactory.classList.add("is-invalid");
        jVarLocalFactory.focus();
        return false;
    };

    if ((jVarLocalFactory.value === "") === false) {
        jVarLocalFactory.classList.remove("is-invalid");
        return true;
    };
    return true;
};

export { StartFunc }
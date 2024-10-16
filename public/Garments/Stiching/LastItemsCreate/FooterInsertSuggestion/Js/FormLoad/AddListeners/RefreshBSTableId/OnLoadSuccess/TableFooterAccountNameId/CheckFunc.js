let StartFunc = () => {

    return true;
};

let StartFunc_Old = () => {
    let jVarLocalForm = document.getElementById("FormId");

    jVarLocalForm.classList.add('was-validated');

    if (jVarLocalForm.checkValidity() === false) {
        return false;
    };

    return true;
};

export { StartFunc }
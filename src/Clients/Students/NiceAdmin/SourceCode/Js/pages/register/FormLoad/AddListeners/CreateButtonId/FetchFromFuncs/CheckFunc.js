import acceptFileTypesJson from './acceptFileTypes.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalRequiredElements = jVarLocalForm.querySelectorAll("[required]");
    let jVarLocalReturnTF = true;

    jVarLocalRequiredElements.forEach(LoopItem => {
        if (LoopItem.value.trim().length === 0) {
            LoopItem.classList.add("is-invalid");
            jVarLocalReturnTF = false;
            return jVarLocalReturnTF;
        };

        LoopItem.classList.remove("is-invalid");
        LoopItem.classList.add("is-valid");
    });

    let jVarLocalFromSelectFile = jFLocalSelectFile();

    if (jVarLocalFromSelectFile === false) {
        return jVarLocalFromSelectFile;
    };

    return jVarLocalReturnTF;
};

let jFLocalSelectFile = () => {
    let fileInput = document.getElementById("formFile");
    let file = fileInput.files[0];

    if (acceptFileTypesJson.includes(file.type)) {
        return true;
    } else {
        alert(`Only ${acceptFileTypesJson.toString()} file types are accepted...`);
        return false;
    };
};

// const jFLocalSelectFile = () => {
//     let jVarLocalformFile = document.getElementById('formFile');

//     if (jVarLocalformFile.files.length === 0) {
//         jVarLocalformFile.classList.add("is-invalid");

//         return false;
//     };

//     jVarLocalformFile.classList.remove("is-invalid");
//     jVarLocalformFile.classList.add("is-valid");

//     return true;
// };

export { StartFunc }
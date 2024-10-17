let StartFunc = async (row, $element, field) => {
     jFLocalToInputTableFooterAccountNameId(row.AccountName);

     const container = document.getElementById("largeModal");
     const modal = new bootstrap.Modal(container);
     modal.toggle();
};

let jFLocalToInputTableFooterAccountNameId = (inValue) => {
    let jVarLocalHtmlId = 'TableFooterAccountNameId';
   let jVarLocalTableFooterAccountNameId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalTableFooterAccountNameId === null === false) {
      jVarLocalTableFooterAccountNameId.value = inValue;
   };
};

let LocalFuncForjVarLocalTableFooterAccountNameId = () => {
    let jVarLocalTableFooterAccountNameId = document.getElementById('TableFooterAccountNameId');

    if (jVarLocalTableFooterAccountNameId === null === false) {
        return jVarLocalTableFooterAccountNameId.value.trim();
    };
};

let jFLocalRowClick = (row, $element, field) => {
    console.log("aaa : ", row);

};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalShowModal = () => {
    const myModal = new bootstrap.Modal('#largeModal', {
        keyboard: true
    });

    myModal.show();
};

export { StartFunc }
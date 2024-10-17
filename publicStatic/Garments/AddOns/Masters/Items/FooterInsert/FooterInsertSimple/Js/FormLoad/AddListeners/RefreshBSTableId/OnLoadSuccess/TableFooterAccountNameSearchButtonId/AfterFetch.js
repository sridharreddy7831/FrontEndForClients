import { StartFunc as StartFuncRowClick } from "./RowClick.js";

let StartFunc = async ({ inFetchData }) => {
    let jVarLocalData = await inFetchData.json();
    jFLocalHideSpinner();

    var $table = $('#ModalTable');

    $table.bootstrapTable({
        data: jVarLocalData,
        onClickRow: StartFuncRowClick
    });

    jFLocalShowModal();
};

let jFLocalRowClick = (row, $element, field) => {
    console.log("aaa : ", row);
    let k1 = document.getElementById("RateInputId");
    k1.value = row.DryWashRate;
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalShowModal = () => {
    const container = document.getElementById("largeModal");
    const modal = new bootstrap.Modal(container);
    modal.toggle();

    // const myModal = new bootstrap.Modal('#largeModal', {
    //     keyboard: false
    // });

    // myModal.show();
};

export { StartFunc }
import { StartFunc as StartFuncBSTableLoad } from "./BSTableLoad.js";

let StartFunc = () => {
    jFLocalHideSpinner();

    var $table = $('#table');

    $table.bootstrapTable({
        onClickRow: StartFuncBSTableLoad
    });
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }
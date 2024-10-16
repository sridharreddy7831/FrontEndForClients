import { StartFunc as StartFuncOnClickRowFunc } from "../onClickRow/EntryFile.js";

let StartFunc = () => {
    jFLocalHideSpinner();
    var $table = $('#table');
    $table.bootstrapTable({
        onClickRow: StartFuncOnClickRowFunc
    });
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }
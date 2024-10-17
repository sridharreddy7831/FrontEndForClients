let StartFunc = ({ inDataToShow }) => {
    jFLocalHideSpinner();
    let jVarLocalDataToShow = inDataToShow;
    let LocalArrayReverseData = jVarLocalDataToShow.slice().reverse();
    localStorage.setItem("ReportsData", JSON.stringify(LocalArrayReverseData));

    var $table = $('#table');
    $table.bootstrapTable("load", LocalArrayReverseData);

};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

export { StartFunc }
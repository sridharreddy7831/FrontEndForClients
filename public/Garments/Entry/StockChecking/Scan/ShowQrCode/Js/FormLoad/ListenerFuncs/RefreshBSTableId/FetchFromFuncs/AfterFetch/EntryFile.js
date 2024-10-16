// import { StartFunc as StartFuncKSMainTableRowDeleteClass } from "./KSMainTableRowDeleteClass/1-ClickAssign.js";
// import { StartFunc as StartFuncPrepareColumns } from "./BuildTable/PrepareColumns.js";

let StartFunc = ({ inDataToShow }) => {
    jFLocalHideSpinner();
    // let jVarLocalDataToShow = inDataToShow;
    let jVarLocalDataToShow = jFLocalToArray({ inDataToShow });


    var $table = $('#table');

    // StartFuncPrepareColumns({ data: jVarLocalDataToShow.DataFromServer[0].KData.TableColumns })

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow,
    });

    // StartFuncKSMainTableRowDeleteClass();
};

let jFLocalToArray = ({ inDataToShow }) => {
    let jVarLocalArray = [];
    Object.entries(inDataToShow).forEach(
        ([key, value]) => {
            jVarLocalArray.push({
                ...value,
                pk: key
            });
        }
    );

    return jVarLocalArray;
};

let jFLocalHideSpinner=()=>{
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

export { StartFunc }
import { StartFunc as StartFuncFetchFromEndPoint } from "./FetchFromEndPoint/EntryFile.js";
import { StartFunc as StartFuncFetchGetFunc } from "./FetchGetFunc/EntryFile.js";
import ConfigJson from '../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    await StartFuncFetchGetFunc();
    await StartFuncFetchFromEndPoint();

    jFLocalHideSpinner();

    let jVarLocalDataNeeded = localStorage.getItem(ConfigJson.tableName);
    let jVarLocalParseData = JSON.parse(jVarLocalDataNeeded);

    var $table = $('#table');
    $table.bootstrapTable("load", jVarLocalParseData);
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }
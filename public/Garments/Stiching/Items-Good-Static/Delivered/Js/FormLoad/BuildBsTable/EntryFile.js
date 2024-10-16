import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize().then();
};

const jFLocalInitialize = async () => {
    var $table = $('#table');
    let jVarLocalColumnsJson = ForColumns();

    $table.bootstrapTable({
        data: [],
        columns: jVarLocalColumnsJson
    });
};

export { StartFunc };

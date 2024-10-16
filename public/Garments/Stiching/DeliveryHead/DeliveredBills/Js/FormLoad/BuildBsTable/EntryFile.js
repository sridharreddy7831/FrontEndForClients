import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as StartFunconClickRow } from "../onClickRow/EntryFile.js";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        onClickRow: StartFunconClickRow
    });
};

export { StartFunc };

import { StartFunc as StartFuncTableTag } from "./TableTag.js";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: []
    });
};

export { StartFunc };

import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        onClickRow: StartFuncOnClickRowFunc
    });
};

export { StartFunc };

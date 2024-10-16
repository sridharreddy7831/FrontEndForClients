import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";

const StartFunc = () => {
    StartFuncTableTag();
    jFLocalInitialize();
};

const jFLocalInitialize = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        onPostBody: function () {
            $("#TableFooterAccountNameId").focus();
            StartFuncOnLoadSuccess();
        }
    });
};

export { StartFunc };

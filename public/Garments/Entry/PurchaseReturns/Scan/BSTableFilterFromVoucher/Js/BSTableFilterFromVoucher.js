import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAfterDomLoad } from "./AfterDomLoad/StartFunc.js";
import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./FormLoadBeforeAdmin/EntryFile.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoadBeforeAdmin();
        StartFuncFormLoad();

        StartFuncShowOnDom({}).then(() => {
            StartFuncAfterDomLoad();
        });
    };
};

StartFunc();
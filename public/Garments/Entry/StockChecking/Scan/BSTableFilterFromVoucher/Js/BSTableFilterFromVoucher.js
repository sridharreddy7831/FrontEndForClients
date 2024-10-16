import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAfterDomLoad } from "./AfterDomLoad/StartFunc.js";
import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./FormLoadBeforeAdmin/EntryFile.js";
import { StartFunc as StartFuncAdminData } from "./AdminData/StartFunc.js";

const StartFunc = () => {
    // let jVarLocalFromAdmin = true;
    let jVarLocalFromAdmin = StartFuncAdminData({ inFormLoadFuncToRun: StartFuncShowOnDom });

    if (jVarLocalFromAdmin) {
        StartFuncFormLoadBeforeAdmin();
        StartFuncFormLoad();

        StartFuncShowOnDom({}).then(() => {
            StartFuncAfterDomLoad();
        });
    };
};

StartFunc();
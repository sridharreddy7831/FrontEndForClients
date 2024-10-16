import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAfterDomLoad } from "./AfterDomLoad/StartFunc.js";
import { StartFunc as StartFuncAdminData } from "./AdminData/StartFunc.js";

const StartFunc = () => {
    // let jVarLocalFromAdmin = true;
    let jVarLocalFromAdmin = StartFuncAdminData({ inFormLoadFuncToRun: StartFuncShowOnDom });

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();

        StartFuncShowOnDom().then(() => {
            StartFuncAfterDomLoad();
        });
    };
};

StartFunc();
import { StartFunc as StartFuncBSTableURL } from "./BSTableURL/Entry.js";
import { StartFunc as StartFuncShowAlertURL } from "./ShowAlertURL/Entry.js";
import { StartFunc as StartFuncNoAlertUrL } from "./NoAlertUrL/Entry.js";

const StartFunc = () => {
    StartFuncBSTableURL();
    StartFuncShowAlertURL();
    StartFuncNoAlertUrL();
};

export { StartFunc };
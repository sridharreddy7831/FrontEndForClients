import { StartFunc as StartFuncBSTableURL } from "./BSTableURL/Entry.js";
import { StartFunc as StartFuncShowAlertURL } from "./ShowAlertURL/Entry.js";

const StartFunc = () => {
    StartFuncBSTableURL();
    StartFuncShowAlertURL();
};

export { StartFunc };
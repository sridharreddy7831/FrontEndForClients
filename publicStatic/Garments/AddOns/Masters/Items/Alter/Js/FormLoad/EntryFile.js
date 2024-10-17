import { StartFunc as StartFuncForAccountNames } from "./ForDataList/AccountNames/GetFetch.js";
import { StartFunc as StartFuncForRowShow } from "./ForRowShow/GetFetch.js";

const StartFunc = () => {
    StartFuncForRowShow();
    StartFuncForAccountNames();
};

export { StartFunc };

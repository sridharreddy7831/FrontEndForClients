import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncPostFunc } from "./5-PostFunc.js";

let StartFunc = () => {

    if (StartFuncCheckBeforeFetch()) {
        let jVarLocalPreparePostData = StartFuncPreparePostData();
        StartFuncPostFunc({ inFetchBody: jVarLocalPreparePostData });

    };
};

export { StartFunc };
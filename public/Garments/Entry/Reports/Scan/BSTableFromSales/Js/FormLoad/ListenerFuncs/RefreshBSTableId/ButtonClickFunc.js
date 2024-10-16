import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
// import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/ShowOnDom.js";

let StartFunc = () => {
    if (StartFuncCheckFunc()) {
        StartFuncFetchFromFuncs().then();
    };
};

export { StartFunc };

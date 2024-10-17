import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

const StartFunc = () => {
    let LocalCheck = StartFuncCheckFunc();
    if (LocalCheck) {
        StartFuncFetchFromFuncs().then();
    };
};

export { StartFunc };

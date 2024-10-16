import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = await StartFuncCheckFunc();

    if (jVarLocalFromCheck) {
        StartFuncFetchFromFuncs().then();
    };
};

export { StartFunc };

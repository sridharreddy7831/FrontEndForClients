import { StartFunc as StartFuncCheckFunc } from "./CheckFunc/EntryFile.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = await StartFuncCheckFunc();
    if (jVarLocalFromCheck) {
        StartFuncFetchFromFuncs().then();
    };
};

export { StartFunc };

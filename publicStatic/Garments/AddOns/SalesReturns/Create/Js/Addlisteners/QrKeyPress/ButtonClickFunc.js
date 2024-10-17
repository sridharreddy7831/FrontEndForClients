import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncPrepareData } from "./PrepareData.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";
import { StartFunc as StartFuncFetchForGrossAmount } from "./FetchForGrossAmount/Entry.js";

let StartFunc = () => {
    if (StartFuncCheckFunc()) {
        let LocalPrepareData = StartFuncPrepareData();
        StartFuncFetchFromFuncs({ inRowpk: LocalPrepareData }).then();

        StartFuncFetchForGrossAmount({ inRowpk: LocalPrepareData }).then();
    };
};

export { StartFunc };

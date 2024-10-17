import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async ({ inRowpk }) => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs({ inRowpk });

    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded) {
            StartFuncAfterFetch({ inData: jVarLocalDataNeeded.JsonData });
        };
    };
};

export { StartFunc }
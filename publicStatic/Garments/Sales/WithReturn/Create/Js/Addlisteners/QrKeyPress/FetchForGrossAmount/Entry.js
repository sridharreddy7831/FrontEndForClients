import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async ({ inRowpk }) => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs({ inRowpk });

    if (jVarLocalDataNeeded.status === 200) {
        let jVarLocalFetchData = await jVarLocalDataNeeded.json();

        StartFuncAfterFetch({ inData: jVarLocalFetchData.JsonData });
    };
};

export { StartFunc }
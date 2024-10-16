import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
    if(Object.keys(jVarLocalDataNeeded.JsonData).length === 0){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Items not found in DC"
        });
    }
    if (jVarLocalDataNeeded.JsonData !== null) {
        if (jVarLocalDataNeeded.KTF) {
            StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded.JsonData });
        }
    }
};

export { StartFunc }
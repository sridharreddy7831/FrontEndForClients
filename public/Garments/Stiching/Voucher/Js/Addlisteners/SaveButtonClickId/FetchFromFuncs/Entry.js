import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();

    if (jVarLocalDataNeeded.status === 200) {
        let jVarLocalFetchData = await jVarLocalDataNeeded.json();
        StartFuncAfterFetch({ InData: jVarLocalFetchData });
    } else {
        let jVarLocalReason = await jVarLocalDataNeeded.text();
        Swal.fire({
            title: `${jVarLocalReason}`,
            confirmButtonText: "ok",
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById("CustomerNumber").focus();
            }
        });
        document.getElementById("CustomerNumber").focus();
    }
};

export { StartFunc }
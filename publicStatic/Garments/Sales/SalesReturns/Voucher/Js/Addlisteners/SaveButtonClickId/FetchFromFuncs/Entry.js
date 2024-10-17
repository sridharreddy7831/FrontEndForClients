import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();

    if (jVarLocalDataNeeded.status === 200) {
        StartFuncAfterFetch();
    } else {
        let jVarLocalReason = await jVarLocalDataNeeded.text();
        Swal.fire({
            title: `${jVarLocalReason}`,
            confirmButtonText: "ok",
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById("SalesRef").focus();
            }
        });
        document.getElementById("SalesRef").focus();

        // Swal.fire(jVarLocalReason);
    }
};

export { StartFunc }
import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";


let StartFunc = async () => {

    if (StartFuncCheckFunc()) {
        let jVarLocalDataNeeded = await StartFuncFetchFuncs();
        console.log("jVarLocalDataNeeded:",jVarLocalDataNeeded);

        if (jVarLocalDataNeeded.status === 200) {
            await StartFuncAfterFetch({ inFetchData: jVarLocalDataNeeded });
        } else {
            swal.fire({ icon: "error", title: "No data" })
        }
    };
};

export { StartFunc }
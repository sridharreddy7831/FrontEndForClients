import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
    let jVarLocalFromFetch = await StartFuncGetFetch();
    await StartFuncAfterFetch({ inFetchData: jVarLocalFromFetch });
};

export { StartFunc }
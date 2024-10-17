import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";

let StartFunc = async () => {

    let response = await StartFuncFetchFunc();

    return await response;
};

export { StartFunc };
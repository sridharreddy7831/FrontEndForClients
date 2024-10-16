import { StartFunc as PromiseAll } from "./PromiseAll.js";

let StartFunc = async ({ inFromDate, inToDate }) => {
    let jVarLocalArray = await PromiseAll({ inFromDate, inToDate });

    return await jVarLocalArray;
};

export { StartFunc };
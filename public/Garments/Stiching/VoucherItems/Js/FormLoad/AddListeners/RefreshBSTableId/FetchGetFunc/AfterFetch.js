import { StartFunc as StartFuncShowOnDom } from './ShowOnDom.js';

let StartFunc = async ({ inFetchData }) => {
    let jVarLocalData = await inFetchData.json();
    StartFuncShowOnDom({ inData: jVarLocalData })
};

export { StartFunc }
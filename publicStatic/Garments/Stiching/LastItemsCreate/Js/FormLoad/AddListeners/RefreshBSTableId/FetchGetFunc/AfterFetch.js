import { StartFunc as StartFuncShowOnDom } from './ShowOnDom.js';

let StartFunc = async ({ inFetchData }) => {
    let jVarLocalData = await inFetchData.json();
    console.log("jVarLocalData: ", jVarLocalData);
    localStorage.setItem("StichRef", jVarLocalData.pk);
    StartFuncShowOnDom({ inData: jVarLocalData })
};

export { StartFunc }
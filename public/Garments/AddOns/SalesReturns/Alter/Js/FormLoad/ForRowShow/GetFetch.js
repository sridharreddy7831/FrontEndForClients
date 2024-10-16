import { StartFunc as StartFuncShowToDom } from "./ShowToDom.js";

let StartFunc = async () => {
    let LocalRowPk = getUrlQueryParams({ inGetKey: "inRowPk" });
    let jVarLocalFetchUrl = `/bin/Accounts/${LocalRowPk}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();
    StartFuncShowToDom({ inDataToShow: data });
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
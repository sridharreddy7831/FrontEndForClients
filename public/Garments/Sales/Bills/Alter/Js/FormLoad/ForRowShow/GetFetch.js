import { StartFunc as StartFuncShowToDom } from "./ShowToDom.js";

let StartFunc = async () => {
    let jVarLocalPosData = await jFpos();
    let jVarLocalBillsQrCode = await jFBillsQrCode();

    StartFuncShowToDom({ inDataToShow: jVarLocalPosData, inBillsQrCodeData: jVarLocalBillsQrCode });
};

const jFpos = async () => {
    let LocalRowPk = getUrlQueryParams({ inGetKey: "RowPK" });
    let jVarLocalFetchUrl = `/bin/pos/${LocalRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();
    return data;

};

const jFBillsQrCode = async () => {
    let LocalRowPk = getUrlQueryParams({ inGetKey: "RowPK" });
    let jVarLocalFetchUrl = `/bin/BillsQrCode/FilterData/BillPk/${LocalRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();
    return data;

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
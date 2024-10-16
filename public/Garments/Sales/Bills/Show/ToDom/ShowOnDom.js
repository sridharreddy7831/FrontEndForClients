import { StartFunc as StartFuncPOS } from "../PullData/FetchFuncs.js";
import { FromNode as FetchFuncForBillsQrCode } from "../PullData/FetchFuncForBillsQrCode.js";
import { StartFunc as InvGridStartFunc } from "./InvGrid.js";
import { StartFunc as StartFuncTableFooterTotals } from "./TableFooterTotals/ShowToDom.js";

let StartFunc = async () => {

    let jVarLocalData = await StartFuncPOS();

    if (jVarLocalData.status === 500) {
        console.log("Status-500");

    } else {
        const data = await jVarLocalData.json();

        ShowOnDom({ inData: data[0] });
        await localInventeryShow();
    };

};

let localInventeryShow = async () => {

    let jVarLocalDataToShow = await FetchFuncForBillsQrCode();

    if (jVarLocalDataToShow.status === 500) {
        console.log("Status-500");
        return

    } else {
        const data = await jVarLocalDataToShow.json();
        let localdata = data;

        await InvGridStartFunc({ inDataAsArray: localdata });
        StartFuncTableFooterTotals({ inData: localdata });
    };
};

let ShowOnDom = ({ inData }) => {
    let jVarLocalVoucherNameId = document.getElementById("VoucherNameId");
    let jVarLocalBillNumberId = document.getElementById("BillNumberId");
    let jVarLocalDateId = document.getElementById("DateId");

    if (jVarLocalVoucherNameId !== null) {
        jVarLocalVoucherNameId.innerHTML = inData.CustomerName;
    };
    if (jVarLocalBillNumberId !== null) {
        jVarLocalBillNumberId.innerHTML = inData.pk;
    };

    if (jVarLocalDateId !== null) {
        jVarLocalDateId.innerHTML = inData.Date;
    };

};

export { StartFunc };
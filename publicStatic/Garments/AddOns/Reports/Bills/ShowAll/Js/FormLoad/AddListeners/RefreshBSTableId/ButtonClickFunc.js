import { StartFunc as StartFuncBillsQrCodeExpenFile } from "./OnExpandRowFunc.js";
import posUrlJson from './posUrl.json' with {type: 'json'};
import BillQR from './BilllQr.json' with {type: 'json'};
import { StartFunc as fetchPos } from "./fetchPos.js";
import { StartFunc as fetchBillsQrCode } from "./fetchBillsQrCode.js";

let StartFunc = async () => {
    jFLocalHideSpinner();

    let jVarLocalQrCodeData = await jFLocalInsertAggValues();

    var $table = $('#table');

    $table.bootstrapTable({
        data: jVarLocalQrCodeData,
        detailView: true,
        onExpandRow: StartFuncBillsQrCodeExpenFile
    });
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalInsertAggValues = async () => {
    let jVarLocalPos = await fetchPos();
    let jVarLocalBillsQrCode = await fetchBillsQrCode();

    let jVarLocalReturnObject = jVarLocalPos.map(loopPos => {
        loopPos.AggValues = {};
        loopPos.AggValues.QrCodeDetails = jVarLocalBillsQrCode.filter(e => e.BillPk == loopPos.pk);

        return loopPos;
    });

    return jVarLocalReturnObject;
};

let jFLocalFetchpos = async () => {
    let jVarLocalFetchUrl = posUrlJson.url;
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchBillsQrCode = async () => {
    let jVarLocalFetchUrl = BillQR.url;
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

export { StartFunc }
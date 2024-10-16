import { FromNode } from "../PullData/FetchFuncs.js";
import { ReturnRowPK } from "../urlSearchParams.js";
import { StartFunc as InvGridStartFunc } from "./InvGrid.js";
import { StartFunc as TableFootSuccessStartFunc } from "../FetchFuncs/HtmlPull/TableFootSuccess.js";
import { StartFunc as StartFuncFetchFuncs } from "../PullData/PurchaseItems/FetchFuncs.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName, inShowSuccess }) => {
    let jVarLocalRowPk = ReturnRowPK();

    let jVarLocalData = await FromNode();
    let jVarLocalPurchaseItems = await StartFuncFetchFuncs();

    await ShowOnDom({ inData: jVarLocalData[0], inShowSuccess });
    await InvGridStartFunc({ inData: jVarLocalPurchaseItems });

};

let ShowOnDom = async ({ inData, inShowSuccess }) => {
    let jVarLocalVoucherNameId = document.getElementById("VoucherNameId");
    let jVarLocalBillNumberId = document.getElementById("BillNumberId");
    let jVarLocalDateId = document.getElementById("DateId");
    let jVarLocalAliasName = document.getElementById("AliesNameId");
    let jVarLocalTotalAmount = document.getElementById("TotalAmountId");

    if (jVarLocalVoucherNameId !== null) {
        jVarLocalVoucherNameId.innerHTML = inData.SupplierName;
    };
    if (jVarLocalBillNumberId !== null) {
        jVarLocalBillNumberId.innerHTML = inData.BillNumber;
    };

    if (jVarLocalDateId !== null) {
        jVarLocalDateId.innerHTML = inData.Date;
    };

    if (jVarLocalAliasName !== null) {
        jVarLocalAliasName.innerHTML = inData.AliasName;
    };

    if (jVarLocalTotalAmount !== null) {
        jVarLocalTotalAmount.innerHTML = inData.TotalAmount;
    };

    await ShowSuccessFunc({ inShowSuccess });
    // jVarLocalShowInventorySerial({ inData });
};

let jVarLocalShowInventorySerial = ({ inData }) => {
    console.log("inData : ", inData);
    let jVarLocalSnoid = document.getElementById("Snoid");

    // if ("InvGrid" in inData) {
    //     jVarLocalSnoid.value = Object.keys(inData.InvGrid).length + 1;

    //     if (Object.keys(inData.InvGrid).length === 0) {
    //         // jVarLocalSnoid.value = 1;
    //     } else {

    //     };
    // };
};

let ShowSuccessFunc = async ({ inShowSuccess }) => {
    if (inShowSuccess) {
        let LocalFromHtml = await TableFootSuccessStartFunc();
        let LocalTableFooterSuccessId = document.getElementById("TableFooterSuccessId");

        if (LocalFromHtml.KTF) {
            LocalTableFooterSuccessId.innerHTML = LocalFromHtml.HtmlString;
        };
    };
};

export { StartFunc };
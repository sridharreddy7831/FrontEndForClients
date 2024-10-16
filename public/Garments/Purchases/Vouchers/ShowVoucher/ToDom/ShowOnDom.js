import { StartFunc as StartFuncPurchaseItems } from "../PullData/FetchFuncs.js";
import { ReturnRowPK } from "../urlSearchParams.js";
import { StartFunc as InvGridStartFunc } from "./InvGrid.js";
import { StartFunc as TableFootSuccessStartFunc } from "../FetchFuncs/HtmlPull/TableFootSuccess.js";
import { StartFunc as StartFuncQrCodesData } from "../FetchFuncs/QrCodesData/ToLocalStorage.js";
import { StartFunc as StartFuncButtonClickFunc } from "../PullData/ShowOnDom/2-ButtonClickFunc.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName, inShowSuccess }) => {
    let jVarLocalRowPk = ReturnRowPK();
    let jVarLocalData = await StartFuncButtonClickFunc();
    let jVarLocalPurchaseItems = await StartFuncPurchaseItems();


    if (jVarLocalData) {
        jVarLocalData.pk = jVarLocalRowPk.RowPK;
        await ShowOnDom({ inData: jVarLocalData[0], inShowSuccess });
        await InvGridStartFunc({ inData: jVarLocalPurchaseItems });

        jVarGlobalData = jVarLocalData;
    };

    await StartFuncQrCodesData({ inProjectName });
};

let ShowOnDom = async ({ inData, inShowSuccess }) => {
    let jVarLocalVoucherNameId = document.getElementById("VoucherNameId");
    let jVarLocalBillNumberId = document.getElementById("BillNumberId");
    let jVarLocalDateId = document.getElementById("DateId");
    let jVarLocalAliasName = document.getElementById("AliesNameId");
    let jVarLocalTotalAmount = document.getElementById("TotalAmountId");
    let jVarLocalPurchasePkId = document.getElementById("PurchasePkId");

    if (jVarLocalPurchasePkId !== null) {
        jVarLocalPurchasePkId.innerHTML = inData.pk;
    };
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
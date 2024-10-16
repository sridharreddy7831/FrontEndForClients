import { ReturnRowPK } from "../../urlSearchParams.js";

let jFLocalDisPersantage = () => {
    let jVarLocalDisPersantage = 'DisPersantage'
    let jVarLocalHtmlId = document.getElementById(jVarLocalDisPersantage);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalDisRate = () => {
    let jVarLocalDisRate = 'DisRate'
    let jVarLocalHtmlId = document.getElementById(jVarLocalDisRate);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalQty = () => {
    let jVarLocalQty = 'Qty'
    let jVarLocalHtmlId = document.getElementById(jVarLocalQty);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let StartFunc = () => {
    let jVarLocalItemNameId = document.getElementById("ItemsDataList");
    let jVarLocalRateId = document.getElementById("RateId1");
    let jVarLocalSno = document.getElementById("Snoid");
    let jVarLocalQrCode = document.getElementById("QrCode");
    let jVarLocalDisPersantage = jFLocalDisPersantage();
    let jVarLocalDisRate = jFLocalDisRate();
    let jVarLocalGrossAmout = document.getElementById("GrossAmout");
    let jVarLocalQty = jFLocalQty();

    let jVarLocalRowPK = localStorage.getItem("RowPk");

    let jVarLocalReturnData = {};
    jVarLocalReturnData.ProductName = jVarLocalItemNameId.value;

    if (!(jVarLocalRateId === null)) {
        jVarLocalReturnData.UnitRate = parseInt(jVarLocalRateId.value);
    };

    if (!(jVarLocalQrCode === null)) {
        let jVarLocalQrCodeArray = jVarLocalQrCode.value.split("/");
        let jVarLocalQrCodeArrayFirstValue = jVarLocalQrCodeArray[0];

        let localpk = (jVarLocalQrCodeArrayFirstValue).substring(2);

        jVarLocalReturnData.pk = parseInt(localpk);
    };

    if (!(jVarLocalSno === null)) {
        jVarLocalReturnData.sno = parseInt(jVarLocalSno.value);
    };

    if (!(jVarLocalQrCode === null)) {
        jVarLocalReturnData.Barcode = jVarLocalQrCode.value;
    };

    if (!(jVarLocalDisPersantage === null)) {
        jVarLocalReturnData.DisPercentage = parseInt(jVarLocalDisPersantage);
    };

    if (!(jVarLocalDisRate === null)) {
        jVarLocalReturnData.DisRate = parseInt(jVarLocalDisRate);
    };

    if (!(jVarLocalGrossAmout === null)) {
        jVarLocalReturnData.GrossAmout = parseInt(jVarLocalGrossAmout.value);
    };

    if (!(jVarLocalQty === null)) {
        jVarLocalReturnData.Qty = parseFloat(jVarLocalQty);
    };

    jVarLocalReturnData.BillPk = jVarLocalRowPK;

    // return jVarLocalReturnData;
    return jVarLocalReturnData

};


export { StartFunc };
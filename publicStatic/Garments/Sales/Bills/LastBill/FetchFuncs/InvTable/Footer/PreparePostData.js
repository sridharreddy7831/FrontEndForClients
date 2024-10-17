import { ReturnRowPK } from "../../../urlSearchParams.js";

let StartFunc = () => {
    let jVarLocalItemNameId = document.getElementById("ItemsDataList");
    let jVarLocalRateId = document.getElementById("RateId1");
    let jVarLocalSno = document.getElementById("Snoid");
    let jVarLocalQrCode = document.getElementById("QrCode");
    let jVarLocalDisPersantage = document.getElementById("DisPersantage");
    let jVarLocalDisRate = document.getElementById("DisRate");
    let jVarLocalGrossAmout = document.getElementById("GrossAmout");
    let jVarLocalQty = document.getElementById("Qty");

    let jVarLocalRowPK = ReturnRowPK().RowPK;

    let jVarLocalReturnData = {};
    jVarLocalReturnData.ProductName = jVarLocalItemNameId.value;

    if (!(jVarLocalRateId === null)) {
        jVarLocalReturnData.UnitRate = parseInt(jVarLocalRateId.value);
    };

    if (!(jVarLocalQrCode === null)) {
        let jVarLocalQrCodeArray = jVarLocalQrCode.value.split("/");
        let jVarLocalQrCodeArrayFirstValue = jVarLocalQrCodeArray[0];

        let localpk = parseInt((jVarLocalQrCodeArrayFirstValue).substring(2));

        jVarLocalReturnData.pk = localpk;
    };

    if (!(jVarLocalSno === null)) {
        jVarLocalReturnData.sno = parseInt(jVarLocalSno.value);
    };

    if (!(jVarLocalQrCode === null)) {
        jVarLocalReturnData.Barcode = jVarLocalQrCode.value;
    };

    if (!(jVarLocalDisPersantage === null)) {
        jVarLocalReturnData.DisPercentage = parseInt(jVarLocalDisPersantage.value);
    };

    if (!(jVarLocalDisRate === null)) {
        jVarLocalReturnData.DisRate = parseInt(jVarLocalDisRate.value);
    };

    if (!(jVarLocalGrossAmout === null)) {
        jVarLocalReturnData.GrossAmout = parseInt(jVarLocalGrossAmout.value);
    };

    if (!(jVarLocalQty === null)) {
        jVarLocalReturnData.Qty = parseInt(jVarLocalQty.value);
    };

    jVarLocalReturnData.BillPk = jVarLocalRowPK;

    return jVarLocalReturnData;
};

export { StartFunc };
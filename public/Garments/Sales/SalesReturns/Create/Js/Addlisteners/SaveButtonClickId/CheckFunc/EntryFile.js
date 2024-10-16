import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

let StartFunc = async () => {
    let jVarLocalGrossAmount = jFLocalGrossAmountId();

    if (parseInt(jVarLocalGrossAmount) > 0 === false) {
        return false;
    };

    let jVarLocalQrCode = await StartFuncFetchFromFuncs();

    if (jVarLocalQrCode.status === 500) {
        swal.fire({ icon: "erroe", title: "Check and Save" });

        return false;
    };
    if (jVarLocalQrCode.json().KTF === false) {

        return false;
    };

    // swal.fire({ icon: "erroe", title: "Not Sale" });
    return true;
};

let jFLocalCheckQrCode = async () => {
    let jVarLocalQrCode = jFLocalQrCode();
    let jVarLocalUrl = `/bin/BillsQrCode/Filter/pk/${jVarLocalQrCode}`;
    const response = await fetch(jVarLocalUrl);

    if (response.status === 200) {
        return true;
    };

    return false;
};

let jFLocalCheckSales = async () => {
    let jVarLocalQrCode = jFLocalQrCode();
    let jVarLocalUrl = `/bin/BillsQrCode/FilterData/pk/${jVarLocalQrCode}`;
    const response = await fetch(jVarLocalUrl);

    if (response.status === 200) {
        return true;
    };

    swal.fire({ icon: "erroe", title: "Not Sale" });
    return false;
};

let jFLocalQrCode = () => {
    let jVarLocalQrCode = 'QrCode'
    let jVarLocalHtmlId = document.getElementById(jVarLocalQrCode);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalGrossAmountId = () => {
    let jVarLocalGrossAmountId = 'GrossAmountId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalGrossAmountId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }
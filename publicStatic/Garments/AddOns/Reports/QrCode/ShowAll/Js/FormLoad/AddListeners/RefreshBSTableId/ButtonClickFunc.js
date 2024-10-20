import { StartFunc as fetchQrCodes } from "./fetchQrCodes.js";
import { StartFunc as fetchPurchases } from "./fetchPurchases.js";
import { StartFunc as fetchBillsQrCode } from "./fetchBillsQrCode.js";
import { StartFunc as fetchSalesReturns } from "./fetchSalesReturns.js";

let StartFunc = async () => {
    jFLocalHideSpinner();

    let jVarLocalQrCodeData = await jFLocalPromiseAll();

    // let jVarLocalQrCodeData = await jFLocalFetchQrCodes();

    var $table = $('#table');
    $table.bootstrapTable({
        data: jVarLocalQrCodeData
    });
};

let jFLocalPromiseAll = async () => {
    let jVarLocalPromises = [fetchQrCodes(), fetchPurchases(), fetchBillsQrCode(), fetchSalesReturns()];

    let [a, b, c, d] = await Promise.allSettled(jVarLocalPromises);

    let jVarLocalReturnArray = a.value.map(LoopQrCode => {

        LoopQrCode.Purchased = "false";
        LoopQrCode.Sold = "InStoke";
        LoopQrCode.ReturnStatus = "false";

        let LoopInideFind = b.value.find(LoopPurchase => LoopPurchase.pk === LoopQrCode.PurchasePk);
        // let LoopInideInvGrid = LoopInideFind.InvGrid[LoopQrCode.InventorySerial];

        if (LoopInideFind === undefined === false) if ("Date" in LoopInideFind) LoopQrCode.Purchased = "true";
        if (LoopInideFind === undefined === false) if ("Date" in LoopInideFind) LoopQrCode.PurchaseDate = LoopInideFind.Date;
        let LoopInideSales = c.value.find(LoopPurchase => LoopPurchase.pk == LoopQrCode.pk);

        // if (LoopQrCode.pk === "1") {
        //     console.log(" LoopQrCode.pk : ", LoopQrCode, LoopInideSales,c);
        // };
        if (LoopInideSales === undefined === false) LoopQrCode.Sold = "Sold";

        let LoopInideSalesReturn = d.value.find(LoopSaleReturn => LoopSaleReturn.QrCode == LoopQrCode.pk);

        if (LoopInideSalesReturn === undefined === false) LoopQrCode.ReturnStatus = "Return";



        return LoopQrCode;

    });

    return jVarLocalReturnArray
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalFetchQrCodes = async () => {
    let jVarLocalFetchUrl = "/bin/Generate/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchPurchases = async () => {
    let jVarLocalFetchUrl = "/bin/Vouchers/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchBillsQrCode = async () => {
    let jVarLocalFetchUrl = "/bin/BillsQrCode/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchSalesReturns = async () => {
    let jVarLocalFetchUrl = "/bin/SalesReturns/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

export { StartFunc }
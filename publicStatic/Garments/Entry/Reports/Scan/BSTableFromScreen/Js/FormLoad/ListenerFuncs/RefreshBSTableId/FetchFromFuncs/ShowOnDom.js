import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncShowQrDetails } from "./Promises/ShowQrDetails/PostFetch.js";
import { StartFunc as StartFuncSaleBillsQrCodeDetails } from "./Promises/ShowItemDetails/EntryFile.js";
import { StartFunc as StartFuncShowPurchaseReturnsDetails } from "./Promises/ShowPurchaseReturnsDetails/PostFetch.js";
import { StartFunc as StartFuncSalePosDetails } from "./Promises/SalePosDetails/PostFetch.js";
import { StartFunc as StartFuncVoucherDetails } from "./Promises/ShowVoucherDetails/PostFetch.js";

let StartFunc = async () => {
    const [a, b, c, d, e] = await Promise.all([
        StartFuncShowQrDetails(),
        StartFuncSaleBillsQrCodeDetails(),
        StartFuncShowPurchaseReturnsDetails(),
        StartFuncSalePosDetails(),
        StartFuncVoucherDetails()]);

    if (a.KTF && b.KTF && c.KTF, e.KTF) {
        console.log("e", e);
        let jVarLocalQrData = a.JsonData;
        let jVarLocalSalesData = b.JsonData;
        let jVarLocalPurchaseReturnsData = c.JsonData;
        let jVarLocalPOSData = d.JsonData;
        let jVarLocalVoucherData = e.JsonData;

        let jVarLocalQrCodeData = jFLocalToArray({ inDataToShow: jVarLocalQrData });
        let jVarLocalShowOnDomData = jFLocalCheck({
            QrCodeData: jVarLocalQrCodeData,
            SaleData: jVarLocalSalesData,
            PurchaseReturns: jVarLocalPurchaseReturnsData,
            POSData: jVarLocalPOSData,
            VoucherData:jVarLocalVoucherData
        });

        StartFuncAfterFetch({ inDataToShow: jVarLocalShowOnDomData });
    };
};

const jFLocalCheck = ({ QrCodeData, SaleData, PurchaseReturns, POSData,VoucherData }) => {

    let localReturnArray = [];

    localReturnArray = QrCodeData.map((element) => {
        // element.Status = "In Stock";

        if (element.pk in SaleData) {
            element.SaleStatus = "Sold";
            element.saleDateTime = SaleData[element.pk].DateTime
        };
        if (element.pk in PurchaseReturns) {
            element.purchaseStatus = "yes";
            element.purchaseDateTime = PurchaseReturns[element.pk].DateTime
        };

        if (element.pk in POSData) {
            element.PosDate = POSData[element.pk].Date
        };

        if (element.PurchasePk in VoucherData) {
            element.VoucherDate = VoucherData[element.PurchasePk].Date
        };

        return element;
    });


    return localReturnArray;

};

let jFLocalToArray = ({ inDataToShow }) => {
    let jVarLocalArray = [];
    Object.entries(inDataToShow).forEach(
        ([key, value]) => {
            jVarLocalArray.push({
                ...value,
                pk: key
            });
        }
    );

    return jVarLocalArray;
};

export { StartFunc }
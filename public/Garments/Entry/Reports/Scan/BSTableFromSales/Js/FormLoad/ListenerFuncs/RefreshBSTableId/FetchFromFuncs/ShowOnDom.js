import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncVoucherDetails } from "./Promises/ShowVoucherDetails/PostFetch.js";
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";
// import { StartFunc as StartFuncShowPurchaseReturnsDetails } from "./Promises/ShowPurchaseReturnsDetails/PostFetch.js";

let StartFunc = async () => {
    const [a, b] = await Promise.all([StartFuncItemDetails(), StartFuncVoucherDetails()]);

    if (a.KTF && b.KTF) {
        let jVarLocalDcData = a.JsonData;
        let jVarLocalSalePOS = b.JsonData;

        let jVarLocalQrCodeData = jFLocalToArray({ inDataToShow: jVarLocalDcData });
        let jVarLocalShowOnDomData = jFLocalCheck({ QrCodeData: jVarLocalQrCodeData, SaleDataPOS: jVarLocalSalePOS })

        StartFuncAfterFetch({ inDataToShow: jVarLocalShowOnDomData });
    };
};

const jFLocalCheck = ({ QrCodeData, SaleDataPOS }) => {

    let localReturnArray = [];

    localReturnArray = QrCodeData.map((element) => {
        element.Status = "In Stock";

        if (element.BillPk in SaleDataPOS) {
            element.Status = "Sold";
            element.salePOSDateTime = SaleDataPOS[element.BillPk].Date
            let OnlyYear = new Date(element.salePOSDateTime);
            let OnlyMonth = new Date(element.salePOSDateTime);
            element.PosOnlyYear = OnlyYear.getFullYear();
            element.PosOnlyMonth = OnlyMonth.getMonth() + 1;
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
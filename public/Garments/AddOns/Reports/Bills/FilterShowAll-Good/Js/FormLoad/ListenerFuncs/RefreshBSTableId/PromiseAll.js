import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";
import { StartFunc as StartFuncShowPos } from "./Promises/ShowPos/PostFetch.js";
import { StartFunc as StartFuncItems } from "./Promises/Items/PostFetch.js";

let StartFunc = async () => {
    const [a, b, c] = await Promise.all([StartFuncItemDetails(), StartFuncShowPos(), StartFuncItems()]);

    let jVarLocalDcData = a;
    let jVarLocalSalePOS = b;
    let jVarLocalItems = c;
    let jVarLocalQrWithItemsData = jFLocalGstCheck({ itemData: jVarLocalItems, productData: jVarLocalDcData });
console.log("jVarLocalQrWithItemsData:",jVarLocalQrWithItemsData);
    let jVarLocalShowOnDomData = jFLocalCheck({ QrCodeData: jVarLocalQrWithItemsData, SaleDataPOS: jVarLocalSalePOS })

    StartFuncAfterFetch({ inDataToShow: jVarLocalShowOnDomData });
};

let jFLocalCheck = ({ SaleDataPOS, QrCodeData }) => {
    let jVarLocalPos = SaleDataPOS;
    let jVarLocalBillsQrCode = QrCodeData;

    let jVarLocalReturnObject = jVarLocalPos.map(loopPos => {
        // console.log("loopPos::",loopPos);
        loopPos.AggValues = {};
        let SaleItemData = jVarLocalBillsQrCode.filter(e => e.BillPk == loopPos.pk);
        loopPos.AggValues.DisRate = SaleItemData.map(el => el.DisRate).reduce((a, b) => a + b, 0);
        loopPos.AggValues.UnitRate = SaleItemData.map(el => el.UnitRate).reduce((a, b) => a + b, 0);
        loopPos.AggValues.GrossAmout = SaleItemData.map(el => el.GrossAmout).reduce((a, b) => a + b, 0);
        loopPos.AggValues.DisPercentage = SaleItemData.map(el => el.DisPercentage).reduce((a, b) => a + b, 0);
        loopPos.AggValues.GST = parseFloat(SaleItemData.map(el => el.GSTAmount).reduce((a, b) => a + b, 0)).toFixed(2);
        loopPos.AggValues.SGST = parseFloat(SaleItemData.map(el => el.SGSTAmount).reduce((a, b) => a + b, 0)).toFixed(2);
        loopPos.AggValues.CGST = parseFloat(SaleItemData.map(el => el.CGSTAmount).reduce((a, b) => a + b, 0)).toFixed(2);
        loopPos.AggValues.AmountExcludingGST = parseFloat(SaleItemData.map(el => el.AmountExcludingGST).reduce((a, b) => a + b, 0)).toFixed(2);
        loopPos.AggValues.AmountIncludingGST = parseFloat(SaleItemData.map(el => el.AmountIncludingGST).reduce((a, b) => a + b, 0)).toFixed(2);

        loopPos.AggValues.GSTPercentage = SaleItemData.map(el => el.GSTPercentage);
        return loopPos;
    });

    return jVarLocalReturnObject;
};
const jFLocalGstCheck = ({ productData, itemData }) => {
    let LocalArray = [];
    productData.forEach(product => {
        const matchingItem = itemData.find(item => item.ItemName === product.ProductName);
        if (matchingItem) {
            const gstRate = parseFloat(matchingItem.GST);
            const gstAmount = product.GrossAmout * (gstRate / 100);
            const cgstAmount = gstAmount / 2;
            const sgstAmount = gstAmount / 2;
            const amountIncludingGST = product.GrossAmout + gstAmount; // Amount including GST
            const amountExcludingGST = product.GrossAmout; // Initial amount excluding GST

            // Injecting calculated GST values into productData
            product.GSTPercentage = gstRate;
            product.GSTAmount = gstAmount;
            product.CGSTAmount = cgstAmount;
            product.SGSTAmount = sgstAmount;
            product.AmountIncludingGST = amountIncludingGST; // Optional: If you need to track this
            product.AmountExcludingGST = amountExcludingGST;
            LocalArray.push(product);
        }
    });
    return LocalArray;
};


const jFLocalGstCheck1 = ({ productData, itemData }) => {
    let LocalArray = [];
    productData.forEach(product => {
        const matchingItem = itemData.find(item => item.ItemName === product.ProductName);
        if (matchingItem) {
            const gstRate = parseFloat(matchingItem.GST);
            const gstAmount = product.GrossAmout * (gstRate / 100);
            const cgstAmount = gstAmount / 2;
            const sgstAmount = gstAmount / 2;

            // Injecting calculated GST values into productData
            product.GSTPercentage = gstRate;
            product.GSTAmount = gstAmount;
            product.CGSTAmount = cgstAmount;
            product.SGSTAmount = sgstAmount;
            LocalArray.push(product);
        }
    });
    return LocalArray;
};

export { StartFunc }
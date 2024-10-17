import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";
import { StartFunc as StartFuncShowPos } from "./Promises/ShowPos/PostFetch.js";
import { StartFunc as StartFuncItems } from "./Promises/Items/PostFetch.js";
import { StartFunc as StartFuncInsertBillData } from "./AfterFetch/InsertBillData.js";
import { StartFunc as StartFuncInsertGst } from "./AfterFetch/InsertGst.js";
import { StartFunc as StartFuncGroupData } from "./AfterFetch/GroupData.js";
import { StartFunc as StartFuncCalculateTotal } from "./AfterFetch/CalculateTotal.js";
import { StartFunc as StartFuncEndArray } from "./AfterFetch/EndArray.js";

let StartFunc = async ({ inFromDate, inToDate }) => {
    const [ItemDetails, BillData, ItemsMaster] = await Promise.all([StartFuncItemDetails(), StartFuncShowPos(), StartFuncItems()]);

    let jVarLocalItemDetails = ItemDetails;
    let jVarLocalBillData = Object.create(BillData);
    let jVarLocalItemsMaster = ItemsMaster;

    let jVarLocalWithBillData = StartFuncInsertBillData({
        inItemDetails: jVarLocalItemDetails,
        inBillData: jVarLocalBillData
    });

    let jVarLocalDateFilter = jVarLocalWithBillData.filter(element => element === undefined === false).filter(element => {
        return Date.parse(element.Date) >= Date.parse(inFromDate) && Date.parse(element.Date) <= Date.parse(inToDate)
    });

    let jVarLocalClubbedData = StartFuncInsertGst({
        inItemDetails: jVarLocalDateFilter,
        inItemsMaster: jVarLocalItemsMaster
    });

    let jVarLocalGroupedData = StartFuncGroupData({ inArray: jVarLocalClubbedData });

    StartFuncCalculateTotal({ inObject: jVarLocalGroupedData });

    let jVarLocalReturnArray = StartFuncEndArray({
        inObject: jVarLocalGroupedData,
        inBillData: BillData
    });
    jFLocalHideSpinner();

    return jVarLocalReturnArray;
};
let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

export { StartFunc }
import { StartFunc as StartFuncItemDetails } from "./Promises/ShowItemDetails/EntryFile.js";
import { StartFunc as StartFuncShowPos } from "./Promises/ShowPos/PostFetch.js";
import { StartFunc as StartFuncGroupData } from "./AfterFetch/GroupData.js";
import { StartFunc as StartFuncCalculateTotal } from "./AfterFetch/CalculateTotal.js";
import { StartFunc as StartFuncEndArray } from "./AfterFetch/EndArray.js";

let StartFunc = async ({ inFromDate, inToDate }) => {
    const [Delivery, POS] = await Promise.all([StartFuncItemDetails(), StartFuncShowPos()]);

    let jVarLocalItemDetails = Delivery;
    let jVarLocalBillData = POS;

    let jVarLocalWithBillData = jFLocalMerge({ inPOSData: jVarLocalBillData, inDeleryData: jVarLocalItemDetails });


    let jVarLocalDateFilter = jVarLocalWithBillData.filter(element => element === undefined === false).filter(element => {
        return Date.parse(element.Date) >= Date.parse(inFromDate) && Date.parse(element.Date) <= Date.parse(inToDate)
    });

    jFLocalHideSpinner();

    return jVarLocalDateFilter;
};

const jFLocalMerge = ({ inPOSData, inDeleryData }) => {
    let jVarLocalPOSData = inPOSData;
    let jVarLocalDeleryData = inDeleryData;

    let jVarLocalReturnArray;


    jVarLocalReturnArray = jVarLocalPOSData.map(element => {

        let LocalFilterData = jVarLocalDeleryData.filter(e => parseInt(e.FK) === element.pk);
        element.GAmount = LocalFilterData.map(el => el.GAmount).reduce((a, b) => a + parseInt(b), 0);
        element.deliveryItemDisAmount = LocalFilterData.map(el => el.deliveryItemDisAmount).reduce((a, b) => a + parseInt(b), 0);
        element.TotalAmount = ((element.GAmount) - element.deliveryItemDisAmount)
        return element

    });

    return jVarLocalReturnArray
}
let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

export { StartFunc }
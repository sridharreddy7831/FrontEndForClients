import { StartFunc as StartFucToFooter } from "../ToDom/ToFooter.js";
import { StartFunc as StartFuncDiscount } from "../ToDom/ProductDetails/Table/Footer/Discount.js";


let StartFunc = async ({ inProjectName, inJsonPK }) => {
    let jVarLocalQrCodeData = await jFLocalFetchQrCodeData({ inProjectName, inJsonPK });

    if (jVarLocalQrCodeData === undefined) {
        swal.fire({ title: "No Data", icon: "error" })
        return;
    };

    StartFucToFooter({ inJSONData: jVarLocalQrCodeData.JsonData });

    let jVarLocalDiscountData = await jFLocalFetchQrDiscountData({ inProjectName, inRowPK: inJsonPK });

    if (jVarLocalDiscountData.status === 200) {
        let jVarLocalMaxPk = jFLocalLatestDiscount({ inDiscountArray: jVarLocalDiscountData.JsonData });

        StartFuncDiscount({ inJSONData: jVarLocalDiscountData.JsonData[jVarLocalMaxPk] });
    };
};

const jFLocalLatestDiscount = ({ inDiscountArray }) => {
    let jVarLocalKeys = Object.keys(inDiscountArray);
    const numArr = jVarLocalKeys.map((item) => parseInt(item, 0));
    const max = Math.max(...numArr);

    return max;
};

let jFLocalFetchQrCodeData = async ({ inJsonPK }) => {

    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
        let jVarLocalRowPK = inJsonPK;
        //  jVarLocalRowPK = 2;

        let jVarLocalFetchUrl = `/bin/Generate/${jVarLocalRowPK}`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();
        LocalReturnObject.JsonData = data;
        Object.freeze(LocalReturnObject);
        return await data;

    } catch (error) {
        console.log("error:", error);
    }

};

let jFLocalFetchQrDiscountData = async ({ inRowPK }) => {
    try {
        let jVarLocalRowPK = inRowPK;

        let jVarLocalFetchUrl = `/bin/Discounts/${jVarLocalRowPK}`;

        const response = await fetch(jVarLocalFetchUrl);

        return await response;

    } catch (error) {
        console.log("error:", error);
    };
};

export { StartFunc };
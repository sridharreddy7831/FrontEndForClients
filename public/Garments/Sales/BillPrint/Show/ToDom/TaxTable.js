import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPullForGST/TableRow.js";
//  import { StartFunc as TableRowStartFunc } from "../HtmlForGST/ForHbs/TableRow.js";

// import {  } from "../HtmlForGST/ForHbs/TableRow";

let StartFunc = async () => {
    let inData = localStorage.getItem('InventoryData');
    let jVarLocalGroupedData = LocalGroupDataFunc(JSON.parse(inData));

    ShowOnDomTableBody({ inData: jVarLocalGroupedData });
    // LocalTotalFunc(inData);
    jFLocalShowTaxTotals({ inData: jVarLocalGroupedData });
};

let jFLocalShowTaxTotals = ({ inData }) => {
    jFLocalShowTotalTaxAmount({ inData });
    jFLocalShowCGSTTotalAmount({ inData });
    jFLocalShowSGSTTotalAmount({ inData });
};

let jFLocalShowTotalTaxAmount = ({ inData }) => {
    let jVarLocalTotalTaxAmountId = document.getElementById("TotalTaxAmountId");

    let jVarLocalGstAmountArray = inData.map(element => {
        return parseFloat(element.GstAmount);
    });

    const jVarLocalAmountSum = jVarLocalGstAmountArray.reduce((a, b) => a + b, 0).toFixed(2);

    if (jVarLocalTotalTaxAmountId === null === false) jVarLocalTotalTaxAmountId.innerHTML = jVarLocalAmountSum;
};

let jFLocalShowCGSTTotalAmount = ({ inData }) => {
    let jVarLocalTotalAmountId = document.getElementById("TotalCGSTAmountId");

    let jVarLocalGstAmountArray = inData.map(element => {
        return parseFloat(element.CGSTValue);
    });

    const jVarLocalAmountSum = jVarLocalGstAmountArray.reduce((a, b) => a + b, 0).toFixed(2);

    if (jVarLocalTotalAmountId === null === false) jVarLocalTotalAmountId.innerHTML = jVarLocalAmountSum;
};

let jFLocalShowSGSTTotalAmount = ({ inData }) => {
    let jVarLocalTotalAmountId = document.getElementById("TotalSGSTAmountId");

    let jVarLocalGstAmountArray = inData.map(element => {
        return parseFloat(element.CGSTValue);
    });

    const jVarLocalAmountSum = jVarLocalGstAmountArray.reduce((a, b) => a + b, 0).toFixed(2);

    if (jVarLocalTotalAmountId === null === false) jVarLocalTotalAmountId.innerHTML = jVarLocalAmountSum;
};

let ShowOnDomTableBody = async ({ inData }) => {
    console.log("inData For GstValues:", inData);
    localStorage.setItem("GstData", JSON.stringify(inData))
    let jVarLocalTableBodyId = document.getElementById("GstTableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTableBodyId === null === false) {
        if (jVarLocalTemplate.KTF) {
            jVarLocalTableBodyId.innerHTML = "";
            var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

            Object.entries(inData).forEach(
                ([key, value]) => {

                    let jVarLocalToShowHtml = template(value);

                    jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
                }
            );
        };
    };
};

const groupBy = (arr, groupFn) =>
    arr.reduce(
        (grouped, obj) => ({
            ...grouped,
            [groupFn(obj)]: [...(grouped[groupFn(obj)] || []), obj],
        }),
        {}
    );

let LocalGroupDataFunc1 = (inData) => {
    let jVarLocalGroupedData = groupBy(inData, (person) => person.GST);

    let jVarLocalReturnArray = [];

    Object.entries(jVarLocalGroupedData).forEach(
        ([key, value]) => {
            console.log("key:", key);
            console.log("value:", value);
            let jVarLoopInsideAmount = value.map(element => {
                return element.GrossAmout;
            });

            const sum = jVarLoopInsideAmount.reduce((a, b) => a + b, 0);

            jVarLocalReturnArray.push({
                GST: key,
                Amount: sum
            });
        }
    );

    let jVarLocalWithTaxAmountArray = jVarLocalReturnArray.map(element => {
        element.GstAmount = (element.Amount * (element.GST / (100 + element.GST))).toFixed(2);
        return element;
    });
    console.log("jVarLocalWithTaxAmountArray:", jVarLocalWithTaxAmountArray);

    return jVarLocalWithTaxAmountArray;
};



let LocalGroupDataFunc = (inData) => {
    let jVarLocalGroupedData = groupBy(inData, (person) => person.GST);

    let jVarLocalReturnArray = [];

    Object.entries(jVarLocalGroupedData).forEach(
        ([key, value]) => {
            let jVarLoopInsideAmount = value.map(element => {
                return element.GrossAmout;
            });

            const sum = jVarLoopInsideAmount.reduce((a, b) => a + b, 0);

            jVarLocalReturnArray.push({
                GST: key,
                Amount: sum
            });
        }
    );

    let jVarLocalWithTaxAmountArray = jVarLocalReturnArray.map(element => {
        let jVarLocalGst = (element.Amount * (element.GST / (100 + parseInt(element.GST)))).toFixed(2);
        let jVarlocalTaxbelValue = parseInt(element.Amount - jVarLocalGst);
        let jVarLocalCGST = (jVarlocalTaxbelValue * (parseInt(element.GST) / 100 / 2)).toFixed(2);

        element.GstAmount = jVarlocalTaxbelValue;
        element.CGSTValue = jVarLocalCGST;
        element.SGSTValue = jVarLocalCGST;
        element.SGSTKey = parseInt(element.GST) / 2;
        element.CGSTKey = parseInt(element.GST) / 2;
        return element;
    });

    return jVarLocalWithTaxAmountArray;
};

export { StartFunc };
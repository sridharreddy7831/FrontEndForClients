import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPull/TableRow.js";

let StartFunc = async ({ inData }) => {
    await ShowOnDomTableBody({ inData });
    LocalTotalFunc({ inData });
};

let LocalTotalFunc = ({ inData }) => {
    let jVarLocalInvArrayNeeded = inData.map(element => element.Qty);

    let jVarLocalItemsQtyTotal = document.getElementById("ItemsQtyTotal");
    jVarLocalItemsQtyTotal.innerHTML = jVarLocalInvArrayNeeded.reduce((a, b) => a + b, 0);;

    let jVarLocalInvArrayAmount = inData.map(element => element.Amount);

    let jVarLocalAmountTotal = document.getElementById("AmountTotal");
    jVarLocalAmountTotal.innerHTML = jVarLocalInvArrayAmount.reduce((a, b) => a + b, 0);;

    let jVarLocalInvArrayRate = inData.map(element => element.UnitRate);

    let jVarLocalRateTotal = document.getElementById("rateTotal");
    jVarLocalRateTotal.innerHTML = jVarLocalInvArrayRate.reduce((a, b) => a + b, 0);;

    let jVarLocalInvArrayMRP = inData.map(element => element.MRP);

    let jVarLocalMRPTotal = document.getElementById("MRPTotal");
    jVarLocalMRPTotal.innerHTML = jVarLocalInvArrayMRP.reduce((a, b) => a + b, 0);;


};

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("InvTableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTemplate.KTF) {
        if ((jVarLocalTableBodyId === null) === false) {
            jVarLocalTableBodyId.innerHTML = "";
            var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

            inData.forEach((value, index) => {
                value.index = index + 1

                let jVarLocalToShowHtml = template(value);

                jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
            }
            );
        };
    };
};

export { StartFunc };
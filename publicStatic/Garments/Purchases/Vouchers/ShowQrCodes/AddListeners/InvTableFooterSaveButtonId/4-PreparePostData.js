let StartFunc = () => {
    let jVarLocalItemNameId = document.getElementById("ItemsDataListId");
    let jVarLocalRateId = document.getElementById("RateId1");
    let jVarLocalQty = document.getElementById("QtyId1");
    let jVarLocalSno = document.getElementById("Snoid");
    let jVarvalueAddition = document.getElementById("ValueAdditionId");
    let jVarvalueCostValue = document.getElementById("CostValueId");
    let jVarvalueMRP = document.getElementById("MRPId");
    let jVarvalueSaleValue = document.getElementById("SaleValueId");
    let jVarLocalAmountId = document.getElementById("AmountId");
    let jVarLocalRowPK = getUrlQueryParams({ inGetKey: "RowPK" });


    let jVarLocalReturnData = {};
    jVarLocalReturnData.ItemName = jVarLocalItemNameId.value;
    jVarLocalReturnData.FK = jVarLocalRowPK;

    if (!(jVarLocalRateId === null)) {
        jVarLocalReturnData.UnitRate = parseInt(jVarLocalRateId.value);
    };

    if (!(jVarLocalQty === null)) {
        jVarLocalReturnData.Qty = parseFloat(jVarLocalQty.value);
    };
    if (!(jVarLocalSno === null)) {
        jVarLocalReturnData.sno = parseInt(jVarLocalSno.value);
    };

    if (!(jVarvalueAddition === null)) {
        jVarLocalReturnData.PercentageValueAddition = parseInt(jVarvalueAddition.value);
    };

    if (!(jVarvalueCostValue === null)) {
        jVarLocalReturnData.CostValue = parseInt(jVarvalueCostValue.value);
    };

    if (!(jVarvalueMRP === null)) {
        jVarLocalReturnData.MRP = parseInt(jVarvalueMRP.value);
    };

    if (!(jVarvalueSaleValue === null)) {
        jVarLocalReturnData.SaleValue = parseInt(jVarvalueSaleValue.value);
    };

    if (!(jVarLocalAmountId === null)) {
        jVarLocalReturnData.Amount = parseInt(jVarLocalAmountId.value);
    };

    return jVarLocalReturnData;
};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
let StartFunc = ({ ItemDetails, BillData, ItemsMaster, inFromDate, inToDate }) => {
    jFLocalHideSpinner();
    let jVarLocalItemDetails = ItemDetails;
    let jVarLocalBillData = Object.create(BillData);
    let jVarLocalItemsMaster = ItemsMaster;

    let jVarLocalWithBillData = jFLocalInsertBillData({
        inItemDetails: jVarLocalItemDetails,
        inBillData: jVarLocalBillData
    });

    let jVarLocalDateFilter = jVarLocalWithBillData.filter(element => element === undefined === false).filter(element => {
        return Date.parse(element.Date) >= Date.parse(inFromDate) && Date.parse(element.Date) <= Date.parse(inToDate)
    });

    let jVarLocalClubbedData = jFLocalInsertGst({
        inItemDetails: jVarLocalDateFilter,
        inItemsMaster: jVarLocalItemsMaster
    });

    let jVarLocalGroupedData = jFLocalGroupData({ inArray: jVarLocalClubbedData });

    jFLocalCalculateTotals({ inObject: jVarLocalGroupedData });

    let jVarLocalReturnArray = jFLocalEndArray({
        inObject: jVarLocalGroupedData,
        inBillData: BillData
    });

    return jVarLocalReturnArray;
};

let jFLocalEndArray = ({ inObject, inItemDetails, inBillData }) => {
    let jVarLocalItemDetails = inItemDetails;
    let jVarLocalBillData = inBillData;

    let jVarLocalReturnArray = [];

    for (const [key, value] of Object.entries(inObject)) {
        for (const [SecondKey, SecondValue] of Object.entries(value)) {
            let jVarLoopInsideObject = {};

            let LoopInsideFindBill = jVarLocalBillData.find(LoopMaster => {
                return LoopMaster.BillNumber2425 === parseInt(key);
            });

            jVarLoopInsideObject.BillNumber = key;

            if (LoopInsideFindBill === undefined === false) {
                jVarLoopInsideObject.Date = LoopInsideFindBill?.Date;
                jVarLoopInsideObject.CustomerNumber = LoopInsideFindBill?.CustomerNumber;
                jVarLoopInsideObject.CustomerName = LoopInsideFindBill?.CustomerName;
                jVarLoopInsideObject.GSTPercentage = parseFloat(SecondKey);
                jVarLoopInsideObject.TotalAmount = SecondValue.TotalAmount;
                jVarLoopInsideObject.DisRate = SecondValue.TotalDisRate;
                jVarLoopInsideObject.UnitRate = SecondValue.UnitRate;
                jVarLoopInsideObject.CgstAmount = ((SecondValue.TotalAmount * jVarLoopInsideObject.GSTPercentage / (100 + jVarLoopInsideObject.GSTPercentage)) / 2).toFixed(2);
                jVarLoopInsideObject.SgstAmount = ((SecondValue.TotalAmount * jVarLoopInsideObject.GSTPercentage / (100 + jVarLoopInsideObject.GSTPercentage)) / 2).toFixed(2);
            };

            jVarLocalReturnArray.push(jVarLoopInsideObject);
        }
    }

    return jVarLocalReturnArray;
};

let jFLocalGroupData = ({ inArray }) => {
    // console.log("inArray::", inArray);
    function groupBy(arr, branch) {
        return Object.groupBy(arr, item => item[branch]);
    };

    const grouped = groupBy(inArray, "BillNumber");

    for (const prop of Object.keys(grouped)) {
        grouped[prop] = groupBy(grouped[prop], "ItemGst");
    };
    // console.log("grouped:", grouped);
    return grouped;
    // GrossAmout
};

let jFLocalCalculateTotals = ({ inObject }) => {
    for (const [key, value] of Object.entries(inObject)) {
        for (const [SecondKey, SecondValue] of Object.entries(value)) {
            let LoopInsideGrossAmout = SecondValue.map(element => element.GrossAmout);
            let LoopInsideDisRate = SecondValue.map(element => element.DisRate);
            let LoopInsideUnitRate = SecondValue.map(element => element.UnitRate);
            let LoopInsideTotal = LoopInsideGrossAmout.reduce((a, b) => a + b, 0); // 10
            let LoopInDisRateTotal = LoopInsideDisRate.reduce((a, b) => a + b, 0); // 10
            let LoopInUnitRate = LoopInsideUnitRate.reduce((a, b) => a + b, 0); // 10
            SecondValue.UnitRate = LoopInUnitRate
            SecondValue.TotalDisRate = LoopInDisRateTotal
            SecondValue.TotalAmount = LoopInsideTotal
        }
    };
};

let jFLocalInsertGst = ({ inItemDetails, inItemsMaster }) => {
    let jVarLocalItemDetails = inItemDetails;
    let jVarLocalItemsMaster = inItemsMaster;

    let jVarLocalClubbedData = jVarLocalItemDetails.map(element => {
        let LoopInsideFind = jVarLocalItemsMaster.find(LoopMaster => {
            return LoopMaster.ItemName === element.ProductName;
        });

        return { ...element, ItemGst: LoopInsideFind?.GST };
    });
    return jVarLocalClubbedData;
};

let jFLocalInsertBillData = ({ inItemDetails, inBillData }) => {
    let jVarLocalItemDetails = inItemDetails;
    let jVarLocalBillData = inBillData;

    let jVarLocalClubbedData = jVarLocalItemDetails.map(element => {
        let LoopInsideFind = jVarLocalBillData.find(LoopMaster => {
            return LoopMaster.pk === parseInt(element.BillPk);
        });

        if (LoopInsideFind === undefined === false) {
            return {
                ...element,
                CustomerNumber: LoopInsideFind?.CustomerNumber,
                Date: LoopInsideFind?.Date,
                BillNumber: LoopInsideFind?.BillNumber2425,
                CustomerName: LoopInsideFind?.CustomerName
            };
        };
    });

    return jVarLocalClubbedData;
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

export { StartFunc }
let StartFunc = ({ inObject, inItemDetails, inBillData }) => {
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
                jVarLoopInsideObject.PaymentMode = LoopInsideFindBill?.PaymentMode;
                jVarLoopInsideObject.ReturnAmount = LoopInsideFindBill?.ReturnAmount ?? 0;

                jVarLoopInsideObject.GSTPercentage = parseFloat(SecondKey);
                jVarLoopInsideObject.TotalAmount = SecondValue.TotalAmount;
                jVarLoopInsideObject.DisRate = SecondValue.TotalDisRate;
                jVarLoopInsideObject.UnitRate = SecondValue.UnitRate;
                jVarLoopInsideObject.CgstAmount = ((SecondValue.TotalAmount * jVarLoopInsideObject.GSTPercentage / (100 + jVarLoopInsideObject.GSTPercentage)) / 2).toFixed(2);
                jVarLoopInsideObject.SgstAmount = ((SecondValue.TotalAmount * jVarLoopInsideObject.GSTPercentage / (100 + jVarLoopInsideObject.GSTPercentage)) / 2).toFixed(2);
                jVarLoopInsideObject.BasicAmt = (SecondValue.TotalAmount - jVarLoopInsideObject.CgstAmount - jVarLoopInsideObject.SgstAmount).toFixed(2);;
                jVarLoopInsideObject.AllTotalAmount = SecondValue.TotalAmount - jVarLoopInsideObject?.ReturnAmount ?? 0;

            };

            jVarLocalReturnArray.push(jVarLoopInsideObject);
        }
    }

    return jVarLocalReturnArray;
};
export { StartFunc }
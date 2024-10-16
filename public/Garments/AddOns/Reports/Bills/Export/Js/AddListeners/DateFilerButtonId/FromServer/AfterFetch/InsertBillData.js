let StartFunc = ({ inItemDetails, inBillData }) => {
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
                CustomerName: LoopInsideFind?.CustomerName,
                PaymentMode: LoopInsideFind?.PaymentMode,
                ReturnAmount: LoopInsideFind?.ReturnAmount

            };
        };
    });

    return jVarLocalClubbedData;
};
export { StartFunc }
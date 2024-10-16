let StartFunc = ({ inItemDetails, inItemsMaster }) => {
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
export { StartFunc }
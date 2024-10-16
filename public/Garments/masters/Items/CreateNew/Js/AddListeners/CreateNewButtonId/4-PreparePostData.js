let StartFunc = () => {
    let jVarLocalItemNameId = document.getElementById("ItemNameId");
    let jVarLocalGSTId = document.getElementById("GSTId");
    let jVarLocalFactorId=document.getElementById("FactorId");

    let jVarLocalReturnData = {};
    jVarLocalReturnData.ItemName = jVarLocalItemNameId.value;
    jVarLocalReturnData.GST = jVarLocalGSTId.value;
    jVarLocalReturnData.Factor=jVarLocalFactorId.value;

    console.log("jVarLocalReturnData : ", jVarLocalReturnData);
    return jVarLocalReturnData;
};

export { StartFunc };
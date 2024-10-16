let StartFunc = () => {
    let jVarLocalReturnData = {};
    jVarLocalPaymentMode({
        inData: jVarLocalReturnData,
        inIdName: "PaymentModeId"
    });
console.log('jVarLocalReturnData---------:',jVarLocalReturnData);
    return jVarLocalReturnData;
};

let jVarLocalPaymentMode = ({ inData, inIdName }) => {
    let jVarLocalSupplierNameSelectId = inIdName;
    let jVarLocalHtmlSupplierNameSelectId = document.getElementById(jVarLocalSupplierNameSelectId);

    if ((jVarLocalHtmlSupplierNameSelectId === null) === false) {
        let jVarLocalSupplierName = jVarLocalHtmlSupplierNameSelectId.name;
        inData[jVarLocalSupplierName] = jVarLocalHtmlSupplierNameSelectId.value;
    };
};



export { StartFunc };
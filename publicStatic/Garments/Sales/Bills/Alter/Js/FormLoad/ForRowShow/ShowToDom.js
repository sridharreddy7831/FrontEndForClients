let StartFunc = ({ inDataToShow, inBillsQrCodeData }) => {
    let data = inDataToShow;
    jFLocalToInputBillNumberId(data.BillNumber2425);
    jFLocalToInputGrossAmout(inBillsQrCodeData)
};

let jFLocalToInputBillNumberId = (inValue) => {
    let jVarLocalHtmlId = 'BillNumberId';
    let jVarLocalBillNumberId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBillNumberId === null === false) {
        jVarLocalBillNumberId.value = inValue;
    };
};

let jFLocalToInputGrossAmout = (inBillsQrCodeData) => {
    let LocalGrossAmout = inBillsQrCodeData.map(e => e.GrossAmout).reduce((a, b) => a + b, 0)
    let jVarLocalHtmlId = 'GrossAmoutId';
    let jVarLocalBillNumberId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBillNumberId === null === false) {
        jVarLocalBillNumberId.value = LocalGrossAmout;
    };
};

export { StartFunc };
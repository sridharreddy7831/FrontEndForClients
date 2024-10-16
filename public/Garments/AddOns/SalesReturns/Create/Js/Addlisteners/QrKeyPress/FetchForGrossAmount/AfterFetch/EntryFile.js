let StartFunc = ({ inData }) => {
    let LocalData = inData;

    jFLocalToInputGrossAmountId(LocalData.GrossAmout);
};

let jFLocalToInputGrossAmountId = (inValue) => {
    let jVarLocalHtmlId = 'GrossAmountId';
    let jVarLocalGrossAmountId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalGrossAmountId === null === false) {
        jVarLocalGrossAmountId.value = inValue;
    };
};

export { StartFunc };

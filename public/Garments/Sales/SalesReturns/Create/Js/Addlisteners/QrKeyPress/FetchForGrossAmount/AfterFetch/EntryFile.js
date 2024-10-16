let StartFunc = ({ inData }) => {
    let LocalData = inData;

    jFLocalToInputGrossAmountId(LocalData.GrossAmout);
    jFLocalToInputDisPercentage(LocalData.DisPercentage);
    jFLocalToInputDisRate(LocalData.DisRate);
    jFLocalToInputUnitRate(LocalData.UnitRate);
};

let jFLocalToInputGrossAmountId = (inValue) => {
    let jVarLocalHtmlId = 'GrossAmountId';
    let jVarLocalGrossAmountId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalGrossAmountId === null === false) {
        jVarLocalGrossAmountId.value = inValue;
    };
};

let jFLocalToInputDisPercentage = (inValue) => {
    let jVarLocalHtmlId = 'DisPercentage';
    let jVarLocalGrossAmountId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalGrossAmountId === null === false) {
        jVarLocalGrossAmountId.value = inValue;
    };
};

let jFLocalToInputDisRate = (inValue) => {
    let jVarLocalHtmlId = 'DisRate';
    let jVarLocalGrossAmountId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalGrossAmountId === null === false) {
        jVarLocalGrossAmountId.value = inValue;
    };
};

let jFLocalToInputUnitRate = (inValue) => {
    let jVarLocalHtmlId = 'UnitRate';
    let jVarLocalGrossAmountId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalGrossAmountId === null === false) {
        jVarLocalGrossAmountId.value = inValue;
    };
};

export { StartFunc };

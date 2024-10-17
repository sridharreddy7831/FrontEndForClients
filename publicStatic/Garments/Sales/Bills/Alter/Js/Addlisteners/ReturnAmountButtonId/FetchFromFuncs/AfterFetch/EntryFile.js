let StartFunc = ({ inFetchData }) => {
    let jVarLocalGrossAmountArray = inFetchData.map(element => parseInt(element.GrossAmount));

    jFLocalToInputReturnAmountId(jVarLocalGrossAmountArray.reduce((a, b) => a + b, 0));
};

let jFLocalToInputReturnAmountId = (inValue) => {
    let jVarLocalHtmlId = 'ReturnAmountId';
    let jVarLocalReturnAmountId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalReturnAmountId === null === false) {
        jVarLocalReturnAmountId.value = inValue;
    };
};

export { StartFunc }
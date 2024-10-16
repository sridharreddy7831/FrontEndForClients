import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");

    KeysJson.body = JSON.stringify({
        ReturnAmount: parseInt(jFLocalReturnAmountId())
    });

    return KeysJson;
};

let jFLocalReturnAmountId = () => {
    let jVarLocalReturnAmountId = 'ReturnAmountId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalReturnAmountId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }
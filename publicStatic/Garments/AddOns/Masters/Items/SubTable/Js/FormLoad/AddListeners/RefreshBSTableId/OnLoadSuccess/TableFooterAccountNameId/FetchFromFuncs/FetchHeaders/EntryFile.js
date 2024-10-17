import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    KeysJson.body = JSON.stringify(jFLocalPrepareBody());

    return KeysJson;
};

let jFLocalPrepareBody = () => {
    return {
        "AccountName": LocalFuncForjVarLocalTableFooterAccountNameId(),
        "BSGroup": LocalFuncForjVarLocalTableFooterBSGroupId()
    }
};

let LocalFuncForjVarLocalTableFooterBSGroupId = () => {
    let jVarLocalTableFooterBSGroupId = 'TableFooterBSGroupId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterBSGroupId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();

    };

};

let LocalFuncForjVarLocalTableFooterAccountNameId = () => {
    let jVarLocalTableFooterAccountNameId = document.getElementById('TableFooterAccountNameId');

    if (jVarLocalTableFooterAccountNameId === null === false) {
        return jVarLocalTableFooterAccountNameId.value.trim();
    };
};

export { StartFunc };
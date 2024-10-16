import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    KeysJson.body = JSON.stringify(jFLocalPrepareBody());

    return KeysJson;
};

let jFLocalPrepareBody = () => {
    let jVarLocalTableFooterSubGroup = jFLocalTableFooterSubGroupId();
    
    return {
        "AccountName": LocalFuncForjVarLocalTableFooterAccountNameId(),
        "BSGroup": LocalFuncForjVarLocalTableFooterBSGroupId(),
        "SubGroup" : jVarLocalTableFooterSubGroup
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

let LocalFuncForjVarLocalTableFooterSubGroupId = () => {
    let jVarLocalTableFooterAccountNameId = document.getElementById('TableFooterSubGroupId');

    if (jVarLocalTableFooterAccountNameId === null === false) {
        return jVarLocalTableFooterAccountNameId.value.trim();
    };
};

let jFLocalTableFooterSubGroupId = () => {
    let jVarLocalTableFooterSubGroupId = 'TableFooterSubGroupId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterSubGroupId);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };
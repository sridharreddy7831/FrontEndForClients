import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    KeysJson.body = JSON.stringify(jFLocalPrepareBody());

    return KeysJson;
};

let jFLocalPrepareBody = () => {
    let jVarLocalTableFooterDisPercent = jFLocalTableFooterDisPercent();
    
    return {
        "ProductName": LocalFuncForjVarLocalTableFooterProductNameId(),
        "GrossAmount": LocalFuncForjVarLocalTableFooterGrossAmount(),
        "DisPercent" : jVarLocalTableFooterDisPercent,
        "ItemDescription":LocalFuncForjVarLocalTableFooterItemDescription(),
        "AddOnAmount":LocalFuncForjVarLocalTableFooterAddOnAmount(),
        "GAmount":LocalFuncForjVarLocalTableFooterGAmount(),
        "FK": getUrlQueryParams({ inGetKey: "StichRef" })
    }
};

let LocalFuncForjVarLocalTableFooterGrossAmount = () => {
    let jVarLocalTableFooterBSGroupId = 'GrossAmount'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterBSGroupId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();

    };

};

let LocalFuncForjVarLocalTableFooterProductNameId = () => {
    let jVarLocalTableFooterAccountNameId = document.getElementById('ProductName');

    if (jVarLocalTableFooterAccountNameId === null === false) {
        return jVarLocalTableFooterAccountNameId.value.trim();
    };
};


let jFLocalTableFooterDisPercent = () => {
    let jVarLocalTableFooterSubGroupId = 'DisPercent'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterSubGroupId);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};
let LocalFuncForjVarLocalTableFooterItemDescription = () => {
    let jVarLocalTableFooterItemDescription = 'ItemDescription'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemDescription);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

let LocalFuncForjVarLocalTableFooterAddOnAmount = () => {
    let jVarLocalTableFooterAddOnAmount = 'AddOnAmount'

    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterAddOnAmount);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

let LocalFuncForjVarLocalTableFooterGAmount = () => {
    let jVarLocalTableFooterBSGroupId = 'GrossAmount'
    let jVarLocalHtmlId1 = document.getElementById(jVarLocalTableFooterBSGroupId);

    let jVarLocalTableFooterAddOnAmount = 'AddOnAmount'
    let jVarLocalHtmlId2 = document.getElementById(jVarLocalTableFooterAddOnAmount);

    if (jVarLocalHtmlId1 === null === false || jVarLocalHtmlId2 === null === false) {
        let jVarGrossAmount = jVarLocalHtmlId1.value.trim();
        let jVarAddOnAmount = jVarLocalHtmlId2.value.trim();
        if(!jVarAddOnAmount) {
            jVarAddOnAmount=0;
        }
        
        return parseInt(jVarGrossAmount) + parseInt(jVarAddOnAmount);
    };
     
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };
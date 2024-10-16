let StartFunc = async () => {
    return await jFLocalGetFetch();
};

let jFLocalGetFetch = async () => {
    let jVarLocalUrl = `/bin/pos/${jFLocalSalesRef()}`;
    let jVarLocalResponse = await fetch(jVarLocalUrl);

    if (jVarLocalResponse.status === 200) {
        return true;
    };

    return false;
};

let jFLocalSalesRef = () => {
    let jVarLocalSalesRef = 'SalesRef'
    let jVarLocalHtmlId = document.getElementById(jVarLocalSalesRef);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }
let StartFunc = async () => {
    let jVarLocalSalesRef = getUrlQueryParams({ inGetKey: "SalesRef" });

    let jVarLocalAccountNamesDataListId = document.getElementById("SRRefId");
    jVarLocalAccountNamesDataListId.value = jVarLocalSalesRef;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
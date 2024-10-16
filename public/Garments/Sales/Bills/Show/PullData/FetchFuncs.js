let StartFunc = async () => {
    let jVarLocalRowPK = getUrlQueryParams({ inGetKey: "RowPK" });

    try {
        let jVarLocalFetchUrl = `/bin/pos/FilterData/pk/${jVarLocalRowPK}`;
        // let jVarLocalFetchUrl = `/bin/pos/MaxRow`;
        const response = await fetch(jVarLocalFetchUrl);
        return await response;

    } catch (error) {
        console.log("error:", error);
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
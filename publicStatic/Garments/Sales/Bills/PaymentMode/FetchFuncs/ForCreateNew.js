let StartFunc = async () => {
    let jVarLocalRowPK = getUrlQueryParams({ inGetKey: "RowPK" });

    try {
        let jVarLocalFetchUrl = `/bin/pos/${jVarLocalRowPK}`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();
        return await data;
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
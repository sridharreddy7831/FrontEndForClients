let FromNode = async () => {
    try {
        let jVarLocalRowPK = getUrlQueryParams({ inGetKey: "RowPK" });

        let jVarLocalFetchUrl = `/bin/BillsQrCode/FilterData/BillPk/${jVarLocalRowPK}`;

        const response = await fetch(jVarLocalFetchUrl);

        return await response;

    } catch (error) {
        console.log("error:", error);
    }

};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { FromNode };
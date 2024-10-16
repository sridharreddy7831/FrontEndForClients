let FromNode = async () => {
    try {
        let jVarLocalRowPK = getUrlQueryParams({ inGetKey: "RowPK" });
        // let jVarLocalFetchUrl = `/bin/Vouchers/FilterData/pk/${jVarLocalRowPK}`;
        let jVarLocalFetchUrl = `/bin/Vouchers/MaxRow`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();
        localStorage.setItem("RowPK", data.pk)

        return await data;

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
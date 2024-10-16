let FromNode = async ({ inProjectName, inValueToCheck }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
        let jVarLocalRowPK = getUrlQueryParams({ inGetKey: "RowPK" });

        let jVarLocalFetchUrl = `/bin/Generate/FilterData/pk/${jVarLocalRowPK}`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        if (data.KTF === false) {
            LocalReturnObject.KReason = data.KReason;
            return await LocalReturnObject;
        };

        LocalReturnObject.JsonData = data;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

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
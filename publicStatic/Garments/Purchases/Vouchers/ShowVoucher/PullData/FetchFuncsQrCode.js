import ConfigJson from '../../../../config.json' with {type: 'json'};

let FromNode = async () => {
    try {
        let jVarLocalRowPK = getUrlQueryParams({ inGetKey: "RowPK" });
        let jVarLocalFetchUrl = `/${ConfigJson.StartUrl}/Generate/Search/AsArrayAsInt?Key=PurchasePk&Value=${jVarLocalRowPK}`;

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

export { FromNode };
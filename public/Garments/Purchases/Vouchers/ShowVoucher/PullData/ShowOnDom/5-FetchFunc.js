import ConfigJson from '../../../../../config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalRowPK = getUrlQueryParams({ inGetKey: "RowPK" });
    let jVarLocalFetchUrl = `/${ConfigJson.StartUrl}/Vouchers/RowShow/${jVarLocalRowPK}`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
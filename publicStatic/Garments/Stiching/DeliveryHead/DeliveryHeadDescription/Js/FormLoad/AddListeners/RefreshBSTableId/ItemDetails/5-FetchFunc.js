import ApiConfigJson from "../../../../Config.json" assert {type: 'json'};

let StartFunc = async () => {
    let jVarLocalroutePath = ApiConfigJson.routePath;
    let jVarLocalTable = ApiConfigJson.tableName;

    let jVarLocalFetchUrl = `/${jVarLocalroutePath}/${jVarLocalTable}/DataOnly`;

    let response = await fetch(jVarLocalFetchUrl);

    return response;
};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
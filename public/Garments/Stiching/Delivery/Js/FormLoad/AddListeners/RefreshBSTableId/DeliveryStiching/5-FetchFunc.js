import ApiConfigJson from "../../../../Config.json" with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalroutePath = ApiConfigJson.routePath;
    let jVarLocalTable = ApiConfigJson.tableName;
    let jVarLocalStichRef = getUrlQueryParams({ inGetKey: "StichRef" });

    let jVarLocalFetchUrl = `/${jVarLocalroutePath}/DeliveryStiching/FilterData/FK/${jVarLocalStichRef}`;

    let response = await fetch(jVarLocalFetchUrl);
    
    if (response.status === 200) {
        return await response.json();
    }else {
        return []
    }

};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
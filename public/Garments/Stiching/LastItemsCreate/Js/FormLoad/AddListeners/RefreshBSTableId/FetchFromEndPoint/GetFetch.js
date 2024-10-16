import ConfigJson from "../../../../Config.json" with { type: "json"};

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;
    // let jVarLocalStichRef = getUrlQueryParams({ inGetKey: "StichRef" });
    let jVarLocalStichRef = localStorage.getItem("StichRef");
    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/FilterData/FK/${jVarLocalStichRef}`;
    let response = await fetch(jVarLocalFetchUrl);
    // let data = await response.json();

    return await response;
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc };


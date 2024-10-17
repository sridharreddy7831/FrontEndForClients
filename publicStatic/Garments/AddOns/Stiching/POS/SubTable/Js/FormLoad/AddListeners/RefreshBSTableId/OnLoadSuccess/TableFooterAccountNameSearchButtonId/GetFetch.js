import ConfigJson from "../../../../../Config.json" with { type: "json"};

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;

    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);
    // let data = await response.json();

    return await response;
};

export { StartFunc };


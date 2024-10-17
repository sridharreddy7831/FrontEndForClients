import ConfigJson from "../../../Config.json" assert { type: "json" };

let StartFunc = async ({ inRowpk }) => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;
    let LocalRowpk = inRowpk;


    let jVarLocalFetchUrl = `/${LocalroutePath}/Generate/${LocalRowpk}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };


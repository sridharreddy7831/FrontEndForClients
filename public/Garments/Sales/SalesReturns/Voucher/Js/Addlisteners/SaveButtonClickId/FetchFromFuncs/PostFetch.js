import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/WithKeysCheck`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    // console.log("response : ", response);
    // let data = await response.json();

    return await response;
};

export { StartFunc };


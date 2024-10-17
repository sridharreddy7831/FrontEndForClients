import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../Config.json" with { type: "json" };

let StartFunc = async ({ inBodyData }) => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;

    let jVarLocalFetchHeaders = await StartFuncFetchHeaders({ inBodyData });
    // let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/WithCheckAndGenPk`;
    let jVarLocalFetchUrl = `/Custom/Clients/Maguva/Transactions/Sales/POS`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    // let data = await response.json();

    return await response;
};



export { StartFunc };
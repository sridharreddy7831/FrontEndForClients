import ConfigJson from "../../../Config.json" assert { type: "json" };

let StartFunc = async ({ inRowpk }) => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = "BillsQrCode";
    let LocalRowpk = inRowpk;

    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/${LocalRowpk}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };


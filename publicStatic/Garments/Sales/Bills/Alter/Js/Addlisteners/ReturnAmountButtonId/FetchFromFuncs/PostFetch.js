import ConfigJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocalRowId = jFLocalReturnVoucherId();

    let jVarLocalFetchUrl = `/${LocalroutePath}/SalesReturns/FilterData/SRRef/${LocalRowId}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

let jFLocalReturnVoucherId = () => {
    let jVarLocalReturnVoucherId = 'ReturnVoucherId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalReturnVoucherId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };


import ConfigJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;
    let JvarLocalCustomerNumber = jFLocalCustomerNumber();

    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/FilterData/CustomerName/${JvarLocalCustomerNumber}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

let jFLocalCustomerNumber = () => {
    let jVarLocalCustomerNumber = 'CustomerName'
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNumber);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};



export { StartFunc };
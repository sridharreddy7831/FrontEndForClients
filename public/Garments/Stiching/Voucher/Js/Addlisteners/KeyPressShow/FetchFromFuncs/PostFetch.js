import ConfigJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = "StichingPOS";
    let JvarLocalCustomerNumber = jFLocalCustomerNumber();

    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/FilterData/CustomerNumber/${JvarLocalCustomerNumber}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

let jFLocalCustomerNumber = () => {
    let jVarLocalCustomerNumber = 'CustomerNumber'
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNumber);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};



export { StartFunc };
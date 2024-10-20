import ConfigJson from '../../../Config.json' with {type: 'json'};

let jFLocalFetchSalesReturns = async () => {
    const jValjFLocalFetchSalesReturns = ConfigJson.StartRoute;

    let jVarLocalFetchUrl = `/${jValjFLocalFetchSalesReturns}/SalesReturns/DataOnly`;
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

export { StartFunc }
import ConfigJson from '../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const jValLocalStartRoute = ConfigJson.StartRoute;

    let jVarLocalFetchUrl = `/${jValLocalStartRoute}/SalesReturns/Show/DataOnly`;
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

export { StartFunc }
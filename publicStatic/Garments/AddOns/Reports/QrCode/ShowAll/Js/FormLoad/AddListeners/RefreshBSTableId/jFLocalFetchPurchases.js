import ConfigJson from '../../../Config.json' with {type: 'json'};

let jFLocalFetchPurchases = async () => {
    const jFLocalFetchPurchases = ConfigJson.StartRoute;

    let jVarLocalFetchUrl = `/${jFLocalFetchPurchases}/Vouchers/DataOnly`; 
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

export { startFunc }
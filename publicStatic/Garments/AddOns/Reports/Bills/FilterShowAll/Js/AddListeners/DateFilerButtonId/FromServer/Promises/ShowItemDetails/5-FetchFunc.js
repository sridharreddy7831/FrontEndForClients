import ConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const LocalStartRoute = ConfigJson.StartRoute;

    let jVarLocalFetchUrl = `/${LocalStartRoute}/BillsQrCode/Show/DataOnly`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
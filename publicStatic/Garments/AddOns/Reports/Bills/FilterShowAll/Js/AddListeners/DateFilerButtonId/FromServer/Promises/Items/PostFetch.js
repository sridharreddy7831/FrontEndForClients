import ConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const LocalStartRoute = ConfigJson.StartRoute;

    let jVarLocalFetchUrl = `/${LocalStartRoute}/Items/Show/DataOnly`;

    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };
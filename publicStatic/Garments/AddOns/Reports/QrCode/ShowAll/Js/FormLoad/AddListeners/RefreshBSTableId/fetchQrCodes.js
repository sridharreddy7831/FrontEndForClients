import ConfigJson from '../../../Config.json' with {type: 'json'};

let startFunc = async () => { 
    const jValLocalStartRoute = ConfigJson.StartRoute;
    
    let jVarLocalFetchUrl = `/${jValLocalStartRoute}/Generate/DataOnly`;
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

export { startFunc };
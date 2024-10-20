import posUrlJson from './posUrl.json' with {type: 'json'};
import ConfigJson from '../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalStartUrl = ConfigJson.StartUrl;
    let jVarLocalFetchUrl = posUrlJson.url;

    const response = await fetch(`/${jVarLocalStartUrl}/${jVarLocalFetchUrl}`);

    const text = await response.json();
    return text;
};

export { StartFunc }
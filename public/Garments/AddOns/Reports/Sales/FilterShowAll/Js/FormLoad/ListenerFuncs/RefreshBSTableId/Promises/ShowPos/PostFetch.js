import Dataonly from './Dataonly.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = Dataonly;

    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };
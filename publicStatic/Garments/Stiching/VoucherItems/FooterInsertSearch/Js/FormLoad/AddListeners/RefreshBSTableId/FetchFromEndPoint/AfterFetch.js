import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async ({ inFetchData }) => {
    let jVarLocalData = await inFetchData.json();

    localStorage.setItem(ConfigJson.tableName, JSON.stringify(jVarLocalData));
};

export { StartFunc }